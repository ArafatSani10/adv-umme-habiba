export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-800">
      <h1 className="text-6xl font-bold text-brand-peach font-sans">
        Umme Habiba
      </h1>
      <p className="mt-4 text-xl text-primary font-sans">
        Advocate, Civil & Criminal Law
      </p>
      <div className="mt-8 px-6 py-3 bg-primary text-white rounded-full font-sans cursor-pointer hover:bg-brand-peach hover:text-primary transition-all">
        Contact Me
      </div>
    </main>
  );
}