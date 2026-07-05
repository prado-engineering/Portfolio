"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales } from "../i18n/config";

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  
  return (
    <div className="flex items-center space-x-1.5 bg-navy-900/30 px-2 py-1 rounded-md border border-navy-800/50 backdrop-blur-sm">
      {locales.map((loc, idx) => {
        const isActive = loc === currentLocale;
        const redirectPath = pathname.replace(new RegExp(`^\\/${currentLocale}`), `/${loc}`) || `/${loc}`;
        
        return (
          <span key={loc} className="flex items-center">
            {idx > 0 && <span className="text-[10px] text-navy-600 mr-1.5 select-none">|</span>}
            <Link 
              href={redirectPath}
              className={`text-[10px] font-bold uppercase transition-colors px-1 py-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                isActive 
                  ? "text-cyan-400 font-extrabold" 
                  : "text-navy-400 hover:text-navy-100"
              }`}
              aria-label={`Switch to ${loc === "en" ? "English" : loc === "pt" ? "Portuguese" : "Spanish"}`}
            >
              {loc}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
