import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");
  const pillars = ["blueprint", "scale", "frontier"];

  const basePath = process.env.NEXT_PUBLIC_REPO_NAME 
    ? `/${process.env.NEXT_PUBLIC_REPO_NAME.replace(/^\//, '')}` 
    : '';

  return (
    <div className="flex flex-col w-full selection:bg-navy-800 selection:text-navy-100 min-h-screen pt-32 pb-24 relative z-10">
      <main className="max-w-5xl mx-auto px-6 lg:px-12 w-full flex flex-col space-y-16 md:space-y-24">
        
        {/* Header Section: Photo and Title Side-by-Side */}
        <header className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 pb-12 border-b border-navy-800/50">
          <div className="relative w-[276px] h-[276px] sm:w-[368px] sm:h-[368px] aspect-square flex-shrink-0 rounded-full overflow-hidden border border-navy-700 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
            <img
              src={`${basePath}/profile.jpeg`}
              alt="Vinicius Prado Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-display">
              {t('title')}
            </h1>
            <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest">
              Vinicius Prado
            </p>
          </div>
        </header>

        {/* Content Section: 3-column layout with Glassmorphism floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pillars.map((pillar, idx) => (
            <article 
              key={idx} 
              className="flex flex-col space-y-4 p-8 rounded-lg bg-navy-900/30 border border-navy-800/50 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 hover:translate-y-[-4px] shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-xl font-bold text-navy-100 border-b border-navy-800/50 pb-3 text-balance font-display">
                {t(`pillars.${pillar}.title`)}
              </h3>
              <p className="text-sm text-navy-200 leading-relaxed font-medium flex-1">
                {t(`pillars.${pillar}.content`)}
              </p>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
}
