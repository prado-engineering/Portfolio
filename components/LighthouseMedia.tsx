export default function LighthouseMedia() {
  const basePath = process.env.NEXT_PUBLIC_REPO_NAME 
    ? `/${process.env.NEXT_PUBLIC_REPO_NAME.replace(/^\//, '')}` 
    : '';

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      {/* 
        Video Background 
        Optimized per Vercel/Next.js rules: muted, autoPlay, loop, playsInline.
        Preload="none" forces the browser to wait, but autoPlay might override it depending on the browser.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity bg-navy-950"
        aria-hidden="true"
      >
        <source src={`${basePath}/videos/lighthouse-storm.mp4`} type="video/mp4" />
      </video>

      {/* 
        Opacity Masks & Gradients 
        Ensures strict contrast against text (Web Design Guidelines)
      */}
      <div className="absolute inset-0 bg-navy-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-transparent" />
    </div>
  );
}
