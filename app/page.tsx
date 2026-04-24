import { ChevronRight } from "lucide-react";
import Image from "next/image";
import type { JSX } from "react";

type IconComponent = (props: { className?: string }) => JSX.Element;

type SocialLink = {
  name: string;
  subtitle: string;
  url: string;
  icon?: IconComponent;
  /** Logo image dans /public (prioritaire sur icon) */
  logoSrc?: string;
  /** Pastille couleur marque (fond + bordure + couleur SVG si icône) */
  iconBoxClass: string;
};

const links: SocialLink[] = [
  {
    name: "YouTube",
    subtitle: "Tutoriels et formations professionnelles",
    url: "https://www.youtube.com/@SuzyNoumbissi",
    icon: YouTubeIcon,
    iconBoxClass:
      "border-red-500/50 bg-[#FF0000] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
  },
  {
    name: "TikTok",
    subtitle: "Contenu quotidien et actualité",
    url: "https://www.tiktok.com/@rolacktrading?_r=1&_t=ZN-95keFoNfV82",
    icon: TikTokIcon,
    iconBoxClass:
      "border-cyan-400/35 bg-gradient-to-br from-[#00f2ea] via-[#010101] to-[#ff0050] text-white",
  },
  {
    name: "Instagram",
    subtitle: "Stories ; reel et analyse",
    url: "https://www.instagram.com/rolacktrading?igsh=YWVoMmxodXBpZWM4&utm_source=qr",
    icon: InstagramIcon,
    iconBoxClass:
      "border-pink-400/35 bg-gradient-to-br from-[#833ab4] via-[#E1306C] to-[#F77737] text-white",
  },
  {
    name: "Facebook",
    subtitle: "Suivre l'actualité Rolack Trading",
    url: "https://www.facebook.com/share/18hwVy47rp/?mibextid=wwXIfr",
    icon: FacebookIcon,
    iconBoxClass: "border-blue-400/45 bg-[#1877F2] text-white",
  },
  {
    name: "WhatsApp",
    subtitle: "Rejoindre l'académie",
    url: "https://chat.whatsapp.com/HW6lexUGiQDBfJ9m0tFWVM?mode=gi_t",
    icon: WhatsAppIcon,
    iconBoxClass: "border-emerald-400/45 bg-[#25D366] text-white",
  },
  {
    name: "Telegram",
    subtitle: "Rejoindre l'académie de formation",
    url: "https://t.me/+JvXditQQ7VA3MTI0",
    icon: TelegramIcon,
    iconBoxClass: "border-sky-300/45 bg-[#2AABEE] text-white",
  },
  {
    name: "Exness",
    subtitle: "Créer votre compte de trading Exness",
    url: "https://one.exnesstrack.org/a/3093g17g84",
    logoSrc: "/logos/exness.svg",
    iconBoxClass:
      "border-[#3dcfad]/50 bg-gradient-to-br from-[#0c0c0c] via-[#122620] to-[#1a1a12] p-1",
  },
  {
    name: "Binance",
    subtitle: "Créer votre compte de trading Binance",
    url: "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=en&ref=GRO_28502_VY2AM&utm_source=referral_entrance",
    logoSrc: "/logos/binance.svg",
    iconBoxClass: "border-[#F0B90B]/50 bg-[#1e2329] p-1.5",
  },
  {
    name: "FTMO",
    subtitle: "Créer votre compte prop firm FTMO",
    url: "https://trader.ftmo.com/?affiliates=zeBehUsFACLGNaiFierW",
    logoSrc: "/logos/ftmo.svg",
    iconBoxClass: "border-[#00a0e3]/60 bg-slate-100 p-1.5",
  },
];

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 1-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.1 15.8 8.8 20c.5 0 .8-.2 1.2-.5l2.8-2.7 5.8 4.2c1.1.6 1.8.3 2.1-1l3.8-17.8c.4-1.7-.6-2.4-1.6-2L.8 8.7c-1.6.6-1.6 1.5-.3 1.9l5.6 1.8L19 4.2c.6-.4 1.2-.2.7.2" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.5 3.5A11.7 11.7 0 0 0 2.8 18.2L1 23l4.9-1.7A11.7 11.7 0 1 0 20.5 3.5Zm-8.8 18a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-2.9 1 1-2.8-.3-.4a9.6 9.6 0 1 1 7.5 3.7Zm5.3-7.1c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.8.2-.2.3-.9 1-1.1 1.1-.2.2-.4.2-.8 0a7.8 7.8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.4 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.6 0-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3 1.3 3.2.2.2 2.2 3.4 5.3 4.7 2 .9 2.8 1 3.8.8.6-.1 1.8-.8 2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 2h-3.4v13.2a2.8 2.8 0 1 1-2-2.7V9a6.3 6.3 0 1 0 5.4 6.2V8.4a8.5 8.5 0 0 0 5 1.6V6.6c-2.1 0-3.8-1.7-5-4.6Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000000] px-4 py-8 text-[#FFFFFF]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18)_0%,_rgba(0,0,0,0)_45%)]" />

      <section className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-[#0a0a0a]/80 shadow-[0_0_40px_rgba(0,0,0,0.55)] backdrop-blur-sm">
        <div className="relative isolate h-44 w-full overflow-hidden sm:h-52">
          <Image
            src="/profil.jpeg"
            alt="Rolack Trading — bannière"
            fill
            className="scale-[1.03] object-cover object-[center_35%] brightness-[0.42] contrast-[1.05] saturate-[0.92]"
            sizes="(max-width: 768px) 100vw, 28rem"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0a0a0a]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-black/25 ring-1 ring-inset ring-white/15"
            aria-hidden
          />
        </div>

        <div className="relative z-10 -mt-14 overflow-hidden border-b border-white/15">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="trade-bg-cross-1 absolute inset-0">
              <Image
                src="/trade1.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 28rem"
              />
            </div>
            <div className="trade-bg-cross-2 absolute inset-0">
              <Image
                src="/trade.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 28rem"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/92 via-[#0a0a0a]/88 to-[#0a0a0a]/93"
            aria-hidden
          />

          <div className="relative z-[2] flex flex-col items-center gap-3 px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#D4AF37] bg-[#0a0a0a] ring-4 ring-[#0a0a0a]">
              <Image
                src="/profile.jpeg"
                alt="Photo de profil"
                fill
                className="object-cover object-[center_20%]"
                sizes="96px"
                priority
              />
            </div>

            <header className="space-y-1 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                ROLACK TRADING
              </h1>
              <p className="text-sm text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
                WHERE CAPITAL MEETS PRÉCISION
              </p>
            </header>

            <div className="mt-3 flex w-full flex-col gap-3">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.name} — ${link.subtitle}`}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-white/25 bg-white/10 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-[#D4AF37] hover:bg-white/15 hover:shadow-[0_0_18px_rgba(212,175,55,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-colors duration-300 group-hover:border-[#D4AF37] group-hover:brightness-110 ${link.iconBoxClass}`}
                  >
                    {link.logoSrc ? (
                      <Image
                        src={link.logoSrc}
                        alt=""
                        width={32}
                        height={32}
                        className="h-full w-full max-h-8 max-w-8 object-contain"
                      />
                    ) : Icon ? (
                      <Icon className="h-5 w-5 shrink-0" />
                    ) : null}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col text-left">
                    <span className="truncate text-base font-semibold">{link.name}</span>
                    <span className="line-clamp-2 text-sm text-white/70">{link.subtitle}</span>
                  </span>

                  <ChevronRight
                    size={20}
                    className="shrink-0 text-white/65 transition-colors duration-300 group-hover:text-[#D4AF37]"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
