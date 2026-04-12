import Banner from "@/components/HomPages/Banner";
import Expertise from "@/components/HomPages/expertise";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background">
      <div className="snap-start min-h-screen w-full">
        <Banner />
      </div>
      <div className="snap-start min-h-screen w-full">
        <Expertise />
      </div>
    </main>
  );
}