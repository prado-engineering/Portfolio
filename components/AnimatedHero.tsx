"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  translations: {
    badge: string;
    headline: string;
    bio: string;
    metrics: {
      coverageValue: string;
      coverageLabel: string;
      defectsValue: string;
      defectsLabel: string;
      experienceValue: string;
      experienceLabel: string;
    };
    buttons: {
      projects: string;
      linkedin: string;
    };
  };
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const photoVariants = {
  hidden: { opacity: 1, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TraceBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20">
    <svg aria-hidden="true" className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <motion.path
        d="M 0 300 C 200 300, 300 100, 500 400 S 800 600, 1000 300"
        fill="transparent"
        stroke="#66FCF1"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M 0 700 C 300 700, 400 900, 600 500 S 900 300, 1000 600"
        fill="transparent"
        stroke="#45A29E"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950" />
  </div>
);

export default function AnimatedHero({ translations: t }: HeroProps) {
  const basePath = process.env.NEXT_PUBLIC_REPO_NAME 
    ? `/${process.env.NEXT_PUBLIC_REPO_NAME.replace(/^\//, '')}` 
    : '';

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full min-h-[80vh]">
      <TraceBackground />

      {/* Text Content & Mobile Photo (Left Column) */}
      <motion.div
        className="lg:col-span-8 space-y-12 z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header Section with Integrated Mobile Photo */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-start justify-between w-full">
          <div className="space-y-6 max-w-3xl flex-1">
            <motion.div variants={itemVariants} className="inline-block max-w-full">
              <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-normal xs:tracking-wider sm:tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-2 py-1 xs:px-3 xs:py-1.5 rounded-full border border-cyan-400/20 backdrop-blur-sm whitespace-normal sm:whitespace-nowrap inline-flex items-center text-center leading-normal">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {t.headline}
            </motion.h1>

            <motion.p variants={itemVariants} className="font-sans text-base sm:text-xl text-foreground max-w-2xl leading-relaxed">
              {t.bio}
            </motion.p>
          </div>

          {/* Mobile Profile Picture (Visible only on small screens) */}
          <div className="lg:hidden flex-shrink-0 pt-1 sm:pt-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 aspect-square flex-shrink-0 rounded-full overflow-hidden border border-navy-700 shadow-[0_0_40px_rgba(102,252,241,0.1)] block">
              <img
                src={`${basePath}/profile.jpeg`}
                alt="Vinicius Prado Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-400 text-navy-950 font-medium rounded-sm hover:bg-cyan-300 transition-colors flex items-center justify-center font-display tracking-wide uppercase text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            {t.buttons.projects}
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-prado-259388100"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-navy-900 text-white font-medium rounded-sm border border-navy-700 hover:bg-navy-800 hover:border-cyan-400 transition-colors flex items-center justify-center font-display tracking-wide uppercase text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            {t.buttons.linkedin}
          </a>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 w-full border-t border-navy-800">
          <div className="flex flex-col space-y-2">
            <span className="font-mono text-4xl sm:text-5xl font-bold text-cyan-400 tracking-tight">
              {t.metrics.coverageValue}
            </span>
            <span className="font-sans text-xs uppercase tracking-wider font-semibold text-foreground/70">
              {t.metrics.coverageLabel}
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="font-mono text-4xl sm:text-5xl font-bold text-cyan-400 tracking-tight">
              {t.metrics.defectsValue}
            </span>
            <span className="font-sans text-xs uppercase tracking-wider font-semibold text-foreground/70">
              {t.metrics.defectsLabel}
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="font-mono text-4xl sm:text-5xl font-bold text-cyan-400 tracking-tight">
              {t.metrics.experienceValue}
            </span>
            <span className="font-sans text-xs uppercase tracking-wider font-semibold text-foreground/70">
              {t.metrics.experienceLabel}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Profile Picture (Desktop Only) */}
      <div className="hidden lg:flex lg:col-span-4 items-center justify-center xl:justify-end self-start mt-6 z-10 w-full">
        <div className="relative w-48 h-48 xl:w-56 xl:h-56 aspect-square flex-shrink-0 rounded-full overflow-hidden border border-navy-700 shadow-[0_0_40px_rgba(102,252,241,0.1)] block">
          <img
            src={`${basePath}/profile.jpeg`}
            alt="Vinicius Prado Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
}
