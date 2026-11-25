"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type Creator = {
  handle: string; name: string; niche: string; followers: number | null;
  followerLabel: string | null; city: string | null; languages: string[];
  image: string | null;
};

const whatsapp = "https://wa.me/message/GTVEDVXXN5DMO1";
const field = "w-full min-w-0 rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50";
const button = "rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10";
const primary = "rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200";
const ranges = [
  { label: "Any follower count", value: "" },
  { label: "Under 50K", value: "0-50000" },
  { label: "50K–100K", value: "50000-100000" },
  { label: "100K–250K", value: "100000-250000" },
  { label: "250K–500K", value: "250000-500000" },
  { label: "500K+", value: "500000-Infinity" },
];
const categories = (niche: string) => niche.toLowerCase().split(/\s*[&,/]\s*/).map(x => x.trim()).filter(Boolean);
const label = (s: string) => s.replace(/\b\w/g, x => x.toUpperCase());

export default function Directory({ creators, live, unavailable, businessNumber }: {
  creators: Creator[]; live: boolean; unavailable: boolean; businessNumber: string | null;
}) {
  const [query, setQuery] = useState("");
  const [niche, setNiche] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");
  const [range, setRange] = useState("");
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [quote, setQuote] = useState<Creator[] | null>(null);
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState(1);
  const niches = [...new Set(creators.flatMap(c => categories(c.niche)))].sort();
  const cities = [...new Set(creators.flatMap(c => c.city ? [c.city] : []))].sort();
  const languages = [...new Set(creators.flatMap(c => c.languages))].sort();
  const results = useMemo(() => creators.filter(c => {
    const term = query.toLowerCase().trim().replace(/^@/, "");
    if (term && ![c.name, c.handle, c.niche, c.city || "", ...c.languages].join(" ").toLowerCase().includes(term)) return false;
    if (niche && !categories(c.niche).includes(niche)) return false;
    if (city && c.city !== city) return false;
    if (language && !c.languages.includes(language)) return false;
    if (range) {
      const [min, max] = range.split("-").map(Number);
      if (c.followers === null || c.followers < min || c.followers >= max) return false;
    }
    return true;
  }), [creators, query, niche, city, language, range]);
  const selected = creators.filter(c => shortlist.includes(c.handle));
  const toggle = (handle: string) => setShortlist(old => old.includes(handle) ? old.filter(x => x !== handle) : [...old, handle]);
  const request = (people: Creator[]) => { setCopied(false); setQuote(people); };
  const message = quote ? "Hi Avero House! I found these creators on Discover Creators and would like their commercials and availability:\n" + quote.map(c => "- " + c.name + " (@" + c.handle + ")").join("\n") + "\n\nCampaign details: " : "";
  const clear = () => { setQuery(""); setNiche(""); setCity(""); setLanguage(""); setRange(""); setPage(1); };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-20 flex items-center justify-between gap-2">
          <Link href="/" className="text-lg sm:text-2xl font-black tracking-wider shrink-0">AVERO HOUSE</Link>
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base">
            <Link href="/#creators" className="hover:text-zinc-300">Creators</Link>
            <Link href="/discover" aria-current="page" className="text-white underline underline-offset-8">Discover Creators</Link>
            <Link href="/#campaigns" className="hover:text-zinc-300">Campaigns</Link>
            <Link href="/#about" className="hover:text-zinc-300">About</Link>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={primary}>Book A Call</a>
          </div>
          <div className="md:hidden flex gap-2 items-center text-xs"><Link href="/discover" aria-current="page" className="underline underline-offset-4">Discover</Link><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-3 py-2 rounded-full whitespace-nowrap">Book A Call</a></div>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-36 pb-12">
        <p className="uppercase tracking-[4px] text-zinc-500 text-xs sm:text-sm mb-5">The Avero House Creator Network</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">Discover Creators.</h1>
        <p className="text-zinc-400 text-lg mt-5 max-w-2xl leading-relaxed">Find creators for your next campaign. Explore profiles, shortlist your favourites and request commercials and availability from our team.</p>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
          <label className="block text-sm text-zinc-400 mb-2" htmlFor="creator-search">Search creators</label>
          <input id="creator-search" className={field} placeholder="Name, Instagram handle, niche or city" value={query} onChange={e => {setQuery(e.target.value);setPage(1);}} />
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <select aria-label="Category" className={field} value={niche} onChange={e => {setNiche(e.target.value);setPage(1);}}><option value="">All categories</option>{niches.map(n => <option key={n} value={n}>{label(n)}</option>)}</select>
            <select aria-label="Location" className={field} disabled={!cities.length} value={city} onChange={e => {setCity(e.target.value);setPage(1);}}><option value="">{cities.length ? "All locations" : "Locations not yet listed"}</option>{cities.map(c => <option key={c}>{c}</option>)}</select>
            <select aria-label="Follower range" className={field} value={range} onChange={e => {setRange(e.target.value);setPage(1);}}>{ranges.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}</select>
            <select aria-label="Language" className={field} disabled={!languages.length} value={language} onChange={e => {setLanguage(e.target.value);setPage(1);}}><option value="">{languages.length ? "All languages" : "Languages not yet listed"}</option>{languages.map(l => <option key={l}>{l}</option>)}</select>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 text-sm text-zinc-400"><span aria-live="polite">{results.length} creators found</span><button className="underline underline-offset-4 hover:text-white" onClick={clear}>Clear filters</button></div>
        </div>
        {!live && !unavailable && <p className="text-zinc-500 text-xs mt-4">Follower figures are from our existing public roster and may have changed. Location and language will be added once verified.</p>}
        {unavailable && <p role="status" className="mt-6 text-zinc-400">The directory is temporarily unavailable. Please contact our team for creator recommendations.</p>}
      </section>
      <section className="max-w-7xl mx-auto px-5 md:px-6 pb-16">
        {!results.length && !unavailable && <div className="rounded-3xl border border-white/10 p-10 text-center text-zinc-400">No matching creators. Try clearing your filters or contact our team.</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.slice(0, page * 24).map(c => (
            <article key={c.handle} className="flex flex-col rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all">
              <a href={"https://www.instagram.com/" + encodeURIComponent(c.handle) + "/"} target="_blank" rel="noopener noreferrer" aria-label={"View " + c.name + " on Instagram"}>
                {c.image ? <img src={c.image} alt={c.name} loading="lazy" className="w-full h-64 sm:h-72 object-cover" /> : <div className="h-64 sm:h-72 grid place-items-center bg-white/[0.04] text-5xl text-zinc-500" aria-hidden="true">{c.name.charAt(0).toUpperCase()}</div>}
              </a>
              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-2xl font-bold break-words">{c.name}</h2>
                <a className="text-sm text-zinc-400 hover:text-white break-all mt-1" href={"https://www.instagram.com/" + encodeURIComponent(c.handle) + "/"} target="_blank" rel="noopener noreferrer">@{c.handle} ↗</a>
                <p className="text-zinc-400 mt-3">{c.niche}</p>
                {c.city && <p className="text-sm text-zinc-400 mt-1">{c.city}</p>}
                {!!c.languages.length && <p className="text-sm text-zinc-400 mt-1">{c.languages.join(", ")}</p>}
                <p className="font-semibold mt-4">{c.followerLabel || "Follower count not listed"}{c.followerLabel ? " followers" : ""}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-5">
                  <button type="button" aria-pressed={shortlist.includes(c.handle)} onClick={() => toggle(c.handle)} className={button + (shortlist.includes(c.handle) ? " bg-white/10 border-white/60" : "")}>{shortlist.includes(c.handle) ? "✓ Shortlisted" : "+ Shortlist"}</button>
                  <button type="button" onClick={() => request([c])} className={primary}>Request quote</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        {results.length > page * 24 && <div className="text-center mt-10"><button className={primary} onClick={() => setPage(p => p+1)}>Load more creators</button></div>}
        <div className="mt-16 rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-12 text-center"><h2 className="text-2xl md:text-4xl font-bold">Need help finding creators?</h2><p className="text-zinc-400 mt-4 mb-6">Share your campaign brief with our team. We can help source suitable creators and coordinate quotes.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className={primary + " inline-block"}>Talk to Avero House</a></div>
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500 pb-28"><Link href="/" className="font-semibold text-white">AVERO HOUSE</Link><p className="mt-3">Turning Creators Into Brands.</p></footer>
      {!!selected.length && <aside className="sticky bottom-0 z-40 border-t border-white/10 bg-[#101010]/95 backdrop-blur-xl p-4"><div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3"><div><p className="font-semibold">{selected.length} shortlisted</p><p className="text-xs text-zinc-400 max-w-sm truncate">{selected.map(c => c.name).join(", ")}</p></div><div className="flex gap-2 flex-wrap"><button className={button} onClick={() => setShortlist([])}>Clear</button><button className={primary} onClick={() => request(selected)}>Request quotes on WhatsApp</button></div></div></aside>}
      {quote && <section role="dialog" aria-modal="false" aria-labelledby="quote-title" className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-[60] max-w-lg w-auto sm:w-[440px] rounded-3xl bg-[#101010] border border-white/20 shadow-2xl p-5 sm:p-6">
        <div className="flex justify-between gap-4 items-center"><h2 id="quote-title" className="text-xl font-bold">Request a quote</h2><button className={button} onClick={() => setQuote(null)} aria-label="Close quote panel">Close</button></div>
        <p className="text-sm text-zinc-400 mt-3">{businessNumber ? "Open WhatsApp with your creator shortlist ready to send." : "Copy your shortlist, then open our existing business WhatsApp and paste it into the chat."}</p>
        <textarea aria-label="Quote request message" readOnly value={message} rows={5} className={field + " mt-3 resize-y"} />
        <div className="flex flex-wrap gap-2 mt-4"><button className={button} onClick={async () => {try {await navigator.clipboard.writeText(message);setCopied(true);} catch {setCopied(false);}}}>{copied ? "Copied ✓" : "Copy message"}</button><a className={primary} href={businessNumber ? "https://wa.me/" + businessNumber + "?text=" + encodeURIComponent(message) : whatsapp} target="_blank" rel="noopener noreferrer">Open WhatsApp ↗</a></div>
        <p aria-live="polite" className="text-xs text-zinc-400 mt-2">{copied ? "Message copied." : "You can also select and copy the message manually."}</p>
      </section>}
    </main>
  );
}
