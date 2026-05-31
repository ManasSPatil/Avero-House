"use client";
import { useState } from "react";

import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCreators, setShowAllCreators] = useState(false);
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);
  const creators = [
  {
    name: "Manisha",
    niche: "LifeStyle",
    followers: "80K+",
    image: "/creators/manisha.png",
      instagram: "https://www.instagram.com/__mannu2630/",

  },
  {
    name: "Geetanjali",
    niche: "LifeStyle",
    followers: "32K+",
    image: "/creators/geetanjali.png",
      instagram: "https://www.instagram.com/geetrashcam/",

  },
  {
    name: "Riyanshi",
    niche: "Lifestyle & fashion",
    followers: "50K+",
    image: "/creators/riyanshi.png",
      instagram: "https://www.instagram.com/riyanshichandak/",

  },
   {
    name: "Aarya",
    niche: "Lifestyle fashionj Travel",
    followers: "34.1K+",
    image: "/creators/aarya.png",
      instagram: "https://www.instagram.com/aaaaryyya/",

  },
   {
    name: "Tisha",
    niche: "Lifestyle Ed-Tech",
    followers: "50K+",
    image: "/creators/tisha.png",
      instagram: "https://www.instagram.com/tishaamadaan/",

  },
   {
    name: "Grow With Gargee",
    niche: " Ed-Tech",
    followers: "63K+",
    image: "/creators/Gargee.png",
      instagram: "https://www.instagram.com/grow.with.gargee/",

  },
   {
    name: "Gargee",
    niche: "Lifestyle",
    followers: "22K+",
    image: "/creators/gargee2.png",
      instagram: "https://www.instagram.com/gargee_e/",

  },
   {
    name: "Mahek",
    niche: "Lifestyle",
    followers: "127K+",
    image: "/creators/mahek.png",
      instagram: "https://www.instagram.com/mahekti_vibes_/",

  },
   {
    name: "Akshara",
    niche: "Lifestyle",
    followers: "47K+",
    image: "/creators/akshara.png",
      instagram: "https://www.instagram.com/aksharagupta257/",

  },
   {
    name: "khushi",
    niche: "Lifestyle",
    followers: "97K+",
    image: "/creators/khushi.png",
      instagram: "https://www.instagram.com/khushivvermaa/",

  },
   {
    name: "Janvi",
    niche: "Lifestyle",
    followers: "18K+",
    image: "/creators/janvi.png",
      instagram: "https://www.instagram.com/janvi345_/",

  },
  {
    name: "Vaishnavi",
    niche: "Lifestyle",
    followers: "47K+",
    image: "/creators/vaishnavi.png",
      instagram: "https://www.instagram.com/vaishnavigoell/",

  },{
    name: "Jigyasa",
    niche: "Lifestyle",
    followers: "55K+",
    image: "/creators/jigyasa.png",
      instagram: "https://www.instagram.com/jigyasaa_ranaa/",

  },{
    name: "Barkha",
    niche: "Lifestyle",
    followers: "15K+",
    image: "/creators/barkha.png",
      instagram: "https://www.instagram.com/barkhabisht_01/",

  },{
    name: "Kriti",
    niche: "UGC Lifestyle",
    followers: "22K+",
    image: "/creators/kriti.png",
      instagram: "https://www.instagram.com/k_riti__ugc/",

  },
];
const campaigns = [
  {
    creator: "Manisha",
    brand: "Qwipp X Manisha",
    date: "May 2026",
    thumbnail: "videos/manisha-qwipp.jpg",
    reelUrl: "https://www.instagram.com/p/DYzID9lId_e/",
  },

  {
    creator: "Janvi",
    brand: "Dave & Busters X Janvi",
    date: "April 2026",
    thumbnail: "videos/janviDave.jpg",
    reelUrl: "https://www.instagram.com/reel/DV_Nd6yiLIn/",
  },

  {
    creator: "Aarya",
    brand: "Dove X Aarya",
    date: "March 2026",
    thumbnail: "videos/aaryaDove.jpg",
    reelUrl: "https://www.instagram.com/p/DWUSIFzjK_z/",
  },
  {
    creator: "Riyanshi",
    brand: "Dove X Riyanshi",
    date: "April 2026",
    thumbnail: "videos/riyanshiDove.jpg",
    reelUrl: "https://www.instagram.com/p/DULg2qREq6P/",
  },

  {
    creator: "Geetanjali",
    brand: "Geetanjali X Dove",
    date: "March 2026",
    thumbnail: "videos/geetanjaliDove.jpg",
    reelUrl: "https://www.instagram.com/p/DULN8G4Aa7L/",
  },{
    creator: "Gargee",
    brand: "Gargee X Hilary Rhoda ",
    date: "April 2026",
    thumbnail: "videos/gargeeHilaryrhoda.jpg",
    reelUrl: "https://www.instagram.com/p/DWga9ZODFa3/",
  },

  {
    creator: "Mahek",
    brand: "Mahek X Lakme",
    date: "March 2026",
    thumbnail: "videos/mahekLakme.jpg",
    reelUrl: "https://www.instagram.com/p/DWgjW2-yesK/",
  },{
    creator: "Gargee",
    brand: "Gargee X Epic",
    date: "April 2026",
    thumbnail: "videos/gargeeEpic.jpg",
    reelUrl: "https://www.instagram.com/p/DWyzNnJEgWQ/",
  },

  {
    creator: "Manisha",
    brand: "Manisha X MegaMart",
    date: "March 2026",
    thumbnail: "videos/manisha-megamart.jpg",
    reelUrl: "https://www.instagram.com/p/DWyB7-siEpN/",
  },{
    creator: "Varchashi",
    brand: "Varchashi X PopClub",
    date: "April 2026",
    thumbnail: "videos/varchashi.jpg",
    reelUrl: "https://www.instagram.com/p/DXMVPvRk6E1/",
  },

  {
    creator: "Aarya",
    brand: "Aarya X Plix",
    date: "March 2026",
    thumbnail: "videos/aaryaPLix.jpg",
    reelUrl: "https://www.instagram.com/p/DX_Kpo_tZoe/",
  },{
    creator: "Geetanjali",
    brand: "Geetanjali X Plix",
    date: "April 2026",
    thumbnail: "videos/geetanjaliPlix.jpg",
    reelUrl: "https://www.instagram.com/p/DX_ow3xh3qB/",
  },

  {
    creator: "Janvi",
    brand: "Janvi X Plix",
    date: "March 2026",
    thumbnail: "videos/janviPlix.jpg",
    reelUrl: "https://www.instagram.com/p/DX6MWrWA_WI/",
  },{
    creator: "Gargee",
    brand: "Gargee X WalkPad",
    date: "April 2026",
    thumbnail: "videos/gargeeWalkpad.jpg",
    reelUrl: "https://www.instagram.com/p/DYChNf6IZ5g/",
  },

  {
    creator: "Manisha",
    brand: "Manisha X Dove",
    date: "March 2026",
    thumbnail: "videos/manishaDove.jpg",
    reelUrl: "https://www.instagram.com/p/DYR2tI5Ig2c/",
  },{
    creator: "Gargee",
    brand: "Gargee X Faces Canada",
    date: "April 2026",
    thumbnail: "videos/gargeeFacesCanda.jpg",
    reelUrl: "https://www.instagram.com/p/DYR_nGBsUJv/",
  },

  {
    creator: "Aarya",
    brand: "Aarya X Loccitane",
    date: "May 2026",
    thumbnail: "videos/aaryaStoreVisit.jpg",
    reelUrl: "https://www.instagram.com/p/DY2D4DIihZZ/",
  },{
    creator: "Gargee",
    brand: "Gargee X upGrad",
    date: "May 2026",
    thumbnail: "videos/gargeeupgrad.jpg",
    reelUrl: "https://www.instagram.com/p/DY7DVT9oNzj/",
  },

  {
    creator: "Gargee",
    brand: "Gargee X Amity",
    date: "May 2026",
    thumbnail: "videos/gargeeAmity.jpg",
    reelUrl: "https://www.instagram.com/p/DZAJfTiIeG9/",
  },
];
const desktopCreators = showAllCreators
  ? creators
  : creators.slice(0, 6);

const desktopCampaigns = showAllCampaigns
  ? campaigns
  : campaigns.slice(0, 6);

  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}

      <nav
        className="
  fixed
  top-0
  left-0
  w-full
  z-50
  backdrop-blur-xl
  bg-black/30
  border-b
  border-white/10
  shadow-[0_8px_30px_rgba(0,0,0,0.4)]
  "
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <h1 className="text-2xl font-black tracking-wider">
            AVERO HOUSE
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <a href="#creators" className="hover:text-zinc-300">
              Creators
            </a>

            <a href="#campaigns" className="hover:text-zinc-300">
              Campaigns
            </a>

            <a href="#about" className="hover:text-zinc-300">
              About
            </a>

            <a
  href="https://wa.me/message/GTVEDVXXN5DMO1"
  target="_blank"
  rel="noopener noreferrer"
  className="
  bg-white
  text-black
  px-6
  py-3
  rounded-full
  font-semibold
  hover:scale-105
  transition-all
  duration-300
  shadow-lg
  inline-block
  "
>
  Book A Call
</a>
          </div>
          <div className="md:hidden">
            <a
  href="https://wa.me/message/GTVEDVXXN5DMO1"
  target="_blank"
  rel="noopener noreferrer"
  className="
  bg-white
  text-black
  px-4
  py-2
  rounded-full
  text-sm
  inline-block
  "
>
  Book A Call
</a>
          </div>
        </div>

        {/* {menuOpen && (  
<div
  className="
  fixed
  top-20
  left-0
  right-0
  z-40
  bg-black/95
  backdrop-blur-xl
  border-b
  border-white/10
  md:hidden
  shadow-[0_20px_60px_rgba(0,0,0,0.8)]
  "
>
    <div className="flex flex-col p-6 gap-6">

<a
  href="#creators"
  onClick={() => setMenuOpen(false)}
>
  Creators
</a>

<a
  href="#campaigns"
  onClick={() => setMenuOpen(false)}
>
  Campaigns
</a>

<a
  href="#about"
  onClick={() => setMenuOpen(false)}
>
  About
</a>
      

      <button className="bg-white text-black py-3 rounded-full">
        Book A Call
      </button>

    </div>
  </div>
      )} */}

      </nav>


      {/* HERO SECTION */}

      <section
        className="
  pt-28
  md:pt-32
  px-5
  md:px-6
  pb-16
  "
      >

        <div className="
max-w-7xl
mx-auto
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-20
items-center
">

          {/* LEFT SIDE */}

          <div>

            <p className="uppercase tracking-[4px] text-zinc-500 text-sm mb-6">
              Premium Creator Management
            </p>

            <h1
              className="
  text-3xl
  sm:text-5xl
  md:text-7xl
  font-bold
  leading-tight
  "
            >
              Turning Creators
              <br />
              Into Brands.
            </h1>

            <p className="text-zinc-400 text-lg mt-8 max-w-xl leading-relaxed">
              We help creators secure premium brand
              partnerships, negotiate better deals,
              and build sustainable businesses that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 items-start">

              <a
                href="#creators"
                className="
  bg-white
  text-black
  px-5 md:px-8
  py-3 md:py-4
  rounded-full
  font-semibold
  text-sm md:text-base
  hover:scale-105
  transition
  inline-block
  "
              >
                View Creators
              </a>

              <a
                href="https://wa.me/message/GTVEDVXXN5DMO1"
                target="_blank"
                className="
  border
  border-white/20
  px-5 md:px-8
  py-3 md:py-4
  rounded-full
  text-sm md:text-base
  hover:bg-white/5
  transition
  inline-block
  "
              >
                Partner With Us
              </a>

            </div>

            <p className="mt-6 text-zinc-500">
              Trusted across Finance • Business • Lifestyle • Fitness
            </p>

            {/* STATS */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">

              <Stat number="100+" label="Collaborations" />

              <Stat number="10M+" label="Audience Reach" />

              <Stat number="15+" label="Creators Managed" />

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div
              className="
  relative
  w-[280px]
  sm:w-[320px]
  md:w-[330px]
  h-[560px]
  sm:h-[620px]
  md:h-[680px]
  rounded-[42px]
  border
  border-white/10
  overflow-hidden
  bg-black
  shadow-[0_0_80px_rgba(99,102,241,0.25)]
  "
            >

              <div
                className="
  absolute
  top-4
  left-1/2
  -translate-x-1/2
  z-20
  w-[120px]
  h-[34px]
  bg-black
  rounded-full
  border
  border-white/10
  "
              />

              <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover"
>
  <source
    src="/videos/reel.mp4"
    type="video/mp4"
  />
</video>

              {/* OVERLAY */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-transparent
                to-transparent
                "
              />

              {/* TEXT OVER VIDEO */}

              <div className="absolute bottom-6 left-6 right-6">

                <p className="font-semibold text-lg">
                  Featured Campaign
                </p>

                <p className="text-zinc-300 text-sm">
                  Premium Brand Collaboration
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CREATORS */}

      <section
        id="creators"
        className="max-w-7xl mx-auto px-6 py-20 md:py-20 md:py-20 md:py-32"
      >

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl md:text-5xl font-bold">
            Our Creators
          </h2>

          <span className="text-zinc-500 text-sm md:hidden">
            Swipe →
          </span>

        </div>

        {/* MOBILE */}

<div
  className="
  flex
  md:hidden
  gap-8
  overflow-x-auto
  pb-4
  snap-x
  snap-mandatory
  "
>
  {creators.map((creator) => (
    <CreatorCard
      key={creator.name}
      name={creator.name}
      niche={creator.niche}
      followers={creator.followers}
      image={creator.image}
      instagram={creator.instagram}
    />
  ))}
</div>

{/* DESKTOP */}

<div className="hidden md:grid md:grid-cols-3 gap-8">
  {desktopCreators.map((creator) => (
    <CreatorCard
      key={creator.name}
      name={creator.name}
      niche={creator.niche}
      followers={creator.followers}
      image={creator.image}
      instagram={creator.instagram}
    />
  ))}
</div>

       <div className="hidden md:flex justify-center mt-12">
  {creators.length > 6 && (
    <button
      onClick={() => setShowAllCreators(!showAllCreators)}
      className="
      bg-white
      text-black
      px-8
      py-4
      rounded-full
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      "
    >
      {showAllCreators
        ? "Show Less"
        : "View Our Creator Network →"}
    </button>
  )}
</div>

      </section>

      {/* CAMPAIGNS */}

      <section
        id="campaigns"
        className="max-w-7xl mx-auto px-6 py-20 md:py-20 md:py-20 md:py-32"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          Recent Campaigns
        </h2>

        {/* MOBILE */}

<div
  className="
  flex
  md:hidden
  gap-8
  overflow-x-auto
  pb-4
  snap-x
  snap-mandatory
  "
>
  {campaigns.map((campaign) => (
    <CampaignCard
      key={campaign.brand}
      creator={campaign.creator}
      brand={campaign.brand}
      date={campaign.date}
      thumbnail={campaign.thumbnail}
      reelUrl={campaign.reelUrl}
    />
  ))}
</div>

{/* DESKTOP */}

<div className="hidden md:grid md:grid-cols-3 gap-8">
  {desktopCampaigns.map((campaign) => (
    <CampaignCard
      key={campaign.brand}
      creator={campaign.creator}
      brand={campaign.brand}
      date={campaign.date}
      thumbnail={campaign.thumbnail}
      reelUrl={campaign.reelUrl}
    />
  ))}
</div>

        {/* <div
          className="
  flex
  md:grid
  md:grid-cols-3
  gap-8
  overflow-x-auto
  md:overflow-visible
  pb-4
  snap-x
  snap-mandatory
  "
        >

     {desktopCampaigns.map((campaign) => (
  <CampaignCard
    key={campaign.brand}
    creator={campaign.creator}
    brand={campaign.brand}
    date={campaign.date}
    thumbnail={campaign.thumbnail}
    reelUrl={campaign.reelUrl}
  />
))}

        </div> */}

        <div className="hidden md:flex justify-center mt-12">
  {campaigns.length > 6 && (
    <button
      onClick={() => setShowAllCampaigns(!showAllCampaigns)}
      className="
      bg-white
      text-black
      px-8
      py-4
      rounded-full
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      "
    >
      {showAllCampaigns
        ? "Show Less"
        : "View All Campaigns →"}
    </button>
  )}
</div>

      </section>

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 md:py-20 md:py-20 md:py-32"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-14">
          Why Avero House
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <WhyCard
            title="Brand Partnerships"
            text="We connect creators with brands that actually fit their audience."
          />

          <WhyCard
            title="Negotiation"
            text="Better pricing, better terms, and long-term relationships."
          />

          <WhyCard
            title="Campaign Execution"
            text="From briefing to publishing, we handle the process."
          />

        </div>
      </section>

      {/* <section className="max-w-7xl mx-auto px-6 py-20 md:py-20 md:py-20 md:py-32">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          What Creators Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-zinc-300 mb-6">
              "Avero House helped me secure my biggest brand deal till date."
            </p>

            <h4 className="font-bold">
              Ayush
            </h4>

            <span className="text-zinc-500">
              Finance Creator
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-zinc-300 mb-6">
              "The entire campaign process became effortless."
            </p>

            <h4 className="font-bold">
              Riya
            </h4>

            <span className="text-zinc-500">
              Lifestyle Creator
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-zinc-300 mb-6">
              "Professional management and great brand partnerships."
            </p>

            <h4 className="font-bold">
              Arjun
            </h4>

            <span className="text-zinc-500">
              Business Creator
            </span>
          </div>

        </div>
      </section> */}

      {/* FINAL CTA */}

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-20 md:py-20 md:py-32">

        <div
          className="
    rounded-[40px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8 md:p-16
    text-center
    "
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready To Scale Your Personal Brand?
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            We help creators secure premium brand partnerships,
            negotiate better deals, and build long-term businesses.
          </p>

          <a
  href="https://wa.me/message/GTVEDVXXN5DMO1"
  target="_blank"
  rel="noopener noreferrer"
  className="
  inline-block
  bg-white
  text-black
  px-8
  py-4
  rounded-full
  font-semibold
  hover:scale-105
  transition-all
  duration-300
  "
>
  Book A Discovery Call
</a>

        </div>

      </section>

      <footer className="border-t border-white/10 mt-32">

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

          <div className="grid md:grid-cols-3 gap-12">

            {/* BRAND */}

            <div>

              <h2 className="text-2xl md:text-4xl font-bold tracking-wider">
                AVERO HOUSE
              </h2>

              <p className="text-zinc-400 mt-5 leading-relaxed max-w-sm">
                Turning creators into brands through strategic
                partnerships, premium campaigns, and long-term growth.
              </p>

            </div>

            {/* NAVIGATION */}

            <div>

              <h3 className="font-semibold text-white mb-5">
                Navigation
              </h3>

              <div className="flex flex-col gap-3 text-zinc-400">

                <a href="#creators" className="hover:text-white transition">
                  Creators
                </a>

                <a href="#campaigns" className="hover:text-white transition">
                  Campaigns
                </a>

                <a href="#about" className="hover:text-white transition">
                  About
                </a>

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <h3 className="font-semibold text-white mb-5">
                Connect
              </h3>

              <div className="flex flex-col gap-3 text-zinc-400">

                <a
                  href="https://www.instagram.com/averohouse/"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>

                <a
                  href="mailto:patilmanas260@gmail.com"
                  className="hover:text-white transition"
                >
                  Email
                </a>

                <a
                    href="https://wa.me/message/GTVEDVXXN5DMO1"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM BAR */}

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-zinc-500 text-sm">
              © 2026 Avero House. All rights reserved.
            </p>

            <p className="text-zinc-600 text-sm">
              Turning Creators Into Brands.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}

/* STATS */

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      className="
      p-6
      rounded-3xl
      bg-white/[0.03]
      border
      border-white/10
      backdrop-blur-xl
      "
    >

      <h3 className="text-3xl font-bold">
        {number}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {label}
      </p>

    </div>
  );
}

/* CREATOR CARD */

function CreatorCard({
  name,
  niche,
  followers,
  image,
  instagram,
}: {
  name: string;
  niche: string;
  followers: string;
  image: string;
  instagram: string;
}){
  return (
  <a
    href={instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
      className="
      min-w-[280px]
      md:min-w-0
      rounded-3xl
      overflow-hidden
      bg-white/[0.03]
      border
      border-white/10
      hover:border-indigo-500/40
      hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
      transition-all
      duration-300
      cursor-pointer
      "
    >

      <img
        src={image}
        className="w-full h-[320px] md:h-[420px] object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="text-zinc-400 mt-2">
          {niche}
        </p>

        <p className="mt-4 font-semibold">
          {followers}
        </p>

      </div>

    </motion.div>
  </a>
);
}

function CampaignCard({
  creator,
  brand,
  date,
  thumbnail,
  reelUrl,
}: {
  creator: string;
  brand: string;
  date: string;
  thumbnail: string;
  reelUrl: string;
}){
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      bg-white/[0.03]
      hover:border-indigo-500/40
      hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
      transition-all
      min-w-[280px]
md:min-w-0
      "
    >
      <a
  href={reelUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={thumbnail}
    className="
    w-full
    h-[350px] md:h-[500px]
    object-cover
    "
  />
</a>

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {brand}
        </h3>

        <p className="text-zinc-400 mt-2">
          Creator: {creator}
        </p>

        <p className="text-zinc-500 text-sm mt-1">
          Live: {date}
        </p>

      </div>

    </motion.div>
  );
}

function WhyCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
      p-8
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      hover:border-indigo-500/40
      hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]
      transition-all
      "
    >
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-zinc-400 mt-4">
        {text}
      </p>
    </motion.div>
  );
}