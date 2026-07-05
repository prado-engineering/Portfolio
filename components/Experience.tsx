import { getTranslations } from "next-intl/server";

export default async function Experience() {
  const t = await getTranslations("Experience");
  const roles = ["role1", "role2", "role3"];

  return (
    <section id="experience" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-100 mb-12 tracking-tight text-balance">
        {t('title')}
      </h2>
      
      <div className="space-y-12 relative ml-2 sm:ml-4">
        {/* Continuous Timeline Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0 border-l-2 border-dashed border-navy-800/50 -z-10"></div>
        
        {roles.map((role, idx) => (
          <div key={idx} className="relative flex items-start gap-6 sm:gap-8 group">
            {/* Git commit dot */}
            <div className="relative z-10 w-4 h-4 rounded-full border-4 border-navy-950 bg-navy-400 group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_0_2px_rgba(56,189,248,0)] group-hover:shadow-[0_0_0_2px_rgba(56,189,248,0.5)] mt-1.5 flex-shrink-0"></div>
            
            <div className="flex flex-col space-y-2 flex-1">
              <span className="text-sm font-bold text-pink-400 tracking-widest uppercase font-mono">
                {t(`roles.${role}.period`)}
              </span>
              <h3 className="text-xl font-bold text-cyan-400 text-balance font-display">
                {t(`roles.${role}.title`)}
              </h3>
              <p className="text-navy-200 leading-relaxed text-base whitespace-pre-line">
                {t(`roles.${role}.description`)}
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold tracking-wide text-navy-300 uppercase">
                  {t(`roles.${role}.skills`)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
