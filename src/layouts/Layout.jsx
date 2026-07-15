import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <div
        className="
        absolute flex h-auto justify-center left-7 lg:left-20 inset-0 z-10 pointer-events-none mx-auto
        max-w-[1150px]
        bg-[length:25%_100%]
       sm:bg-[length:20%_100%]
       md:bg-[length:16.666%_100%]
       lg:bg-[length:6.75%_100%]
         "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0 60px, transparent 1px 100%)",
        }}
      />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
