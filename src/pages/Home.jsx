import bgHomeDesktop from "/assets/home/background-home-desktop.jpg";
import bgHomeTablet from "/assets/home/background-home-tablet.jpg";
import bgHomeMobile from "/assets/home/background-home-mobile.jpg";
import useResponsiveBackground from "../hooks/useResponsiveBackground";
export default function Home() {
  const bg = useResponsiveBackground(bgHomeDesktop, bgHomeTablet, bgHomeMobile);
  return (
    <section
      className="fixed inset-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="relative z-10 flex flex-col lg:flex-row h-full justify-evenly items-center
      lg:items-end  lg:justify-between px-6 lg:px-70 lg:pb-32"
      >
        <div className="max-w-[420px] text-white text-center lg:text-left">
          <h2 className="mb-6 lg:text-[28px] uppercase tracking-[4.75px] text-[#D0D6F9]">
            So, you want to travel to
          </h2>

          <h1 className="mb-8 font-serif text-7xl lg:text-[150px] uppercase leading-none">
            Space
          </h1>

          <p className="lg:text-[18px] leading-8 text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button
          className="relative flex h-[120px] w-[120px] lg:h-[274px] lg:w-[274px] items-center
         justify-center rounded-full bg-white font-serif lg:text-[32px] 
         uppercase tracking-[2px] text-[#0B0D17] transition 
         lg:hover:before:absolute lg:hover:before:h-[420px] lg:hover:before:w-[420px] 
         lg:hover:before:rounded-full lg:hover:before:bg-white/10 lg:hover:before:content-['']"
        >
          <span className="relative z-10 ">Explore</span>
        </button>
      </div>
    </section>
  );
}
