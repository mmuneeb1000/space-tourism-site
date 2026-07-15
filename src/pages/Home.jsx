import { Link } from "react-router-dom";
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
      lg:items-end md:justify-center md:gap-8 lg:justify-between px-6 lg:px-70 lg:pb-32"
      >
        <div className="max-w-[420px] text-white text-center lg:text-left">
          <h2 className="mb-2 lg:text-[28px] uppercase tracking-[4.75px] text-[#D0D6F9]">
            So, you want to travel to
          </h2>

          <h1 className="mb-4 font-serif text-7xl lg:text-[150px] uppercase leading-none">
            Space
          </h1>

          <p className="lg:text-[18px] leading-8 text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to="/destination"
          aria-label="Explore space destinations"
          className="relative flex h-[120px] w-[120px] md:h-[274px] md:w-[274px] items-center
         justify-center rounded-full bg-white font-serif md:text-[32px] 
         uppercase tracking-[2px] text-[#0B0D17] transition 
         md:hover:before:absolute md:hover:before:h-[360px] md:hover:before:w-[360px] 
         md:hover:before:rounded-full md:hover:before:bg-white/10 md:hover:before:content-['']
         motion-reduce:transition-none motion-reduce:hover:before:hidden"
        >
          <span className="relative z-10 ">Explore</span>
        </Link>
      </div>
    </section>
  );
}
