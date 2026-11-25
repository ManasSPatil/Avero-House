import type { Metadata } from "next";
import { publicCreators } from "../public-creators";
import Directory, { type Creator } from "./directory";

export const metadata: Metadata = {
  title: "Discover Creators | Avero House",
  description: "Find and shortlist creators for your next brand campaign. Request commercials and availability from Avero House.",
};
export const dynamic = "force-dynamic";

const localCreators: Creator[] = publicCreators.map(c => ({
  handle: new URL(c.instagram).pathname.split("/").filter(Boolean)[0].toLowerCase(),
  name: c.name,
  niche: c.niche.trim().replace(/LifeStyle/gi, "Lifestyle").replace(/fashionj Travel/i, "fashion & travel").replace(/Lifestyle Ed-Tech/i, "Lifestyle & Ed-Tech"),
  followers: Math.round(Number.parseFloat(c.followers) * 1000),
  followerLabel: c.followers,
  city: null,
  languages: [],
  image: c.image,
}));

type PublicRow = {
  handle: string; display_name: string; niche: string; follower_count: number | null;
  city: string | null; languages: string[] | null; photo_url: string | null;
};

async function loadCreators(): Promise<{creators: Creator[]; live: boolean; unavailable: boolean}> {
  const url = process.env.DISCOVERY_SUPABASE_URL;
  const key = process.env.DISCOVERY_SUPABASE_ANON_KEY;
  if (!url && !key) return {creators: localCreators, live: false, unavailable: false};
  if (!url || !key) return {creators: [], live: false, unavailable: true};
  try {
    const endpoint = new URL("/rest/v1/avero_public_discovery_profiles", url);
    endpoint.searchParams.set("select", "handle,display_name,niche,follower_count,city,languages,photo_url");
    endpoint.searchParams.set("order", "handle.asc");
    const rows: PublicRow[] = [];
    const batch = 500;
    // No cached publication results: an unpublished profile should disappear immediately.
    for (let offset = 0; ; offset += batch) {
      endpoint.searchParams.set("limit", String(batch));
      endpoint.searchParams.set("offset", String(offset));
      const response = await fetch(endpoint, {headers: {apikey: key}, cache: "no-store"});
      if (!response.ok) throw new Error("Directory request failed");
      const page = await response.json() as PublicRow[];
      if (!Array.isArray(page)) throw new Error("Unexpected directory response");
      rows.push(...page);
      if (page.length < batch) break;
    }
    const creators = rows.filter(r => /^[a-zA-Z0-9._]{1,30}$/.test(r.handle)).map(r => ({
      handle: r.handle,
      name: r.display_name,
      niche: r.niche,
      followers: r.follower_count,
      followerLabel: r.follower_count === null ? null : new Intl.NumberFormat("en-IN", {notation:"compact", maximumFractionDigits:1}).format(r.follower_count),
      city: r.city,
      languages: r.languages || [],
      image: r.photo_url && (/^https:\/\//i.test(r.photo_url) || /^\/creators\/[a-zA-Z0-9._-]+$/.test(r.photo_url)) ? r.photo_url : null,
    }));
    return {creators, live: true, unavailable: false};
  } catch {
    // Do not resurrect unpublished profiles from a static fallback on a DB error.
    return {creators: [], live: false, unavailable: true};
  }
}

export default async function DiscoverPage() {
  const data = await loadCreators();
  const number = process.env.DISCOVERY_WHATSAPP_NUMBER || "";
  return <Directory {...data} businessNumber={/^[1-9]\d{7,14}$/.test(number) ? number : null} />;
}
