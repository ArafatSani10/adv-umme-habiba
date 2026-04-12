export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 transition-colors duration-500">
      
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.1),transparent_50%)] dark:block hidden" />
      </div>

      <div className="z-10 text-center space-y-6">
        <h1 className="text-7xl md:text-9xl font-sans font-bold tracking-tighter text-foreground">
          Umme <span className="text-brand-peach">Habiba</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-sans text-muted-foreground uppercase tracking-[0.4em] font-medium opacity-70">
          Advocate <span className="mx-2 text-brand-peach">•</span> Civil & Criminal Law
        </p>
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-6 z-10">
        <button className="group relative px-10 py-4 bg-foreground text-background rounded-full font-sans font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(244,194,194,0.2)]">
          Book Consultation
        </button>
        
        <button className="px-10 py-4 border border-foreground/20 text-foreground rounded-full font-sans font-medium text-lg hover:bg-foreground/5 transition-all">
          Learn More
        </button>
      </div>

      <div className="absolute bottom-12 flex items-center gap-4 opacity-30">
        <div className="h-px w-12 bg-foreground" />
        <span className="text-xs font-sans tracking-[0.5em] uppercase">Trusted Professional</span>
        <div className="h-px w-12 bg-foreground" />
      </div>
    </main>
  );
}