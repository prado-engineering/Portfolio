import { getTranslations } from "next-intl/server";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations("Nav");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-950/75 backdrop-blur-md border-b border-navy-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Name / Logo */}
        <div className="flex-shrink-0">
          <Link href={`/${locale}`} className="text-navy-100 font-bold tracking-tight text-sm sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
            <span className="block sm:hidden">V. Prado</span>
            <span className="hidden sm:block">Vinicius Prado</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex items-center space-x-3 sm:space-x-8">
          <Link href={`/${locale}/about`} className="text-xs sm:text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
            {t('about')}
          </Link>
          <Link href={`/${locale}#experience`} className="text-xs sm:text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
            {t('experience')}
          </Link>
          <Link href={`/${locale}#projects`} className="text-xs sm:text-sm font-medium text-navy-400 hover:text-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
            {t('projects')}
          </Link>
        </nav>

        {/* Right: Social & Language Switcher */}
        <div className="flex items-center justify-end flex-shrink-0 space-x-2 sm:space-x-4">
          
          {/* Command Palette Cue */}
          <div className="hidden xl:flex flex-shrink-0 items-center space-x-2 bg-navy-900/50 border border-navy-800 rounded-md px-3 py-1.5 text-xs text-navy-400 cursor-text hover:bg-navy-800/50 hover:text-navy-300 transition-colors">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search...</span>
            <kbd className="ml-2 font-mono bg-navy-950 px-1.5 py-0.5 rounded border border-navy-700 text-[10px] text-navy-300">⌘K</kbd>
          </div>

          <a
            href="https://github.com/prado-x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-400 hover:text-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 flex-shrink-0"
            aria-label="GitHub"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <div className="w-px h-4 bg-navy-800" />
          <LocaleSwitcher currentLocale={locale} />
        </div>
        
      </div>
    </header>
  );
}
