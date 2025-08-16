import FiveDDesign from "./components/5DDesign";
import HomeHeader from "./components/HomeHeader";
import Imagine from "./components/Imagine";
import Industries from "./components/Industries";
import OurMission from "./components/OurMission";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

// This is the main homepage
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-100">
      <HomeHeader />
      <section className="w-full">
        <Services />
      </section>
      <section className="w-full">
        <Imagine />
      </section>
      <section className="w-full">
        <OurMission />
      </section>
      <section className="w-full">
        <Industries />
      </section>
      <section className="w-full">
        <Testimonials />
      </section>
      <section className="w-full">
        <FiveDDesign />
      </section>
    </main>
  );
}