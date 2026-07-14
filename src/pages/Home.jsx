import bgHome from "/assets/home/background-home-desktop.jpg";
export default function Home() {
  return (
    <section
      className="fixed inset-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <div className="relative z-10 flex h-full items-end justify-between px-40 pb-32">
        <div className="max-w-[450px] text-white">
          <h2 className="mb-6 text-[28px] uppercase tracking-[4.75px] text-[#D0D6F9]">
            So, you want to travel to
          </h2>

          <h1 className="mb-8 font-serif text-[150px] uppercase leading-none">
            Space
          </h1>

          <p className="text-[18px] leading-8 text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="relative flex h-[274px] w-[274px] items-center justify-center rounded-full bg-white font-serif text-[32px] uppercase tracking-[2px] text-[#0B0D17] transition hover:before:absolute hover:before:h-[420px] hover:before:w-[420px] hover:before:rounded-full hover:before:bg-white/10 hover:before:content-['']">
          <span className="relative z-10">Explore</span>
        </button>
      </div>
    </section>
  );
}
