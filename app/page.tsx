import {
  ChevronRight,
} from "lucide-react";
import type { JSX } from "react";

type SocialLink = {
  name: string;
  subtitle: string;
  url?: string;
  icon: (props: { className?: string }) => JSX.Element;
};

const links: SocialLink[] = [
  {
    name: "YouTube",
    subtitle: "Voir mes tutoriels",
    url: "https://www.youtube.com/@SuzyNoumbissi",
    icon: YouTubeIcon,
  },
  {
    name: "Facebook",
    subtitle: "Suivre l'actualite",
    icon: FacebookIcon,
  },
  {
    name: "Telegram",
    subtitle: "Rejoindre le canal VIP",
    icon: TelegramIcon,
  },
  {
    name: "WhatsApp",
    subtitle: "Contact direct",
    url: "https://whatsapp.com/biz/",
    icon: WhatsAppIcon,
  },
  {
    name: "TikTok",
    subtitle: "Contenu quotidien",
    icon: TikTokIcon,
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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000000] px-4 py-8 text-[#FFFFFF]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18)_0%,_rgba(0,0,0,0)_45%)]" />

      <section className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-white/10 text-xs font-medium uppercase tracking-wide text-white/80">
          Image ici
        </div>

        <header className="space-y-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Alpha Hunt Capital</h1>
          <p className="text-sm text-white/75">Trader • Formateur • Entrepreneur</p>
        </header>

        <div className="flex w-full flex-col gap-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.url ?? "#"}
                target={link.url ? "_blank" : undefined}
                rel={link.url ? "noopener noreferrer" : undefined}
                aria-label={`${link.name} - ${link.subtitle}`}
                className="group flex w-full items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-[#D4AF37] hover:bg-white/15 hover:shadow-[0_0_18px_rgba(212,175,55,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="flex min-w-0 flex-1 flex-col text-left">
                  <span className="truncate text-base font-semibold">{link.name}</span>
                  <span className="truncate text-sm text-white/70">
                    {link.subtitle}
                  </span>
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
      </section>
    </main>
  );
}
