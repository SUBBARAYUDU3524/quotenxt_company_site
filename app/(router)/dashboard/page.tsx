import FiveDDesign from "./_components/5DDesign";
import HomeHeader from "./_components/HomeHeader";
import Imagine from "./_components/Imagine";
import Industries from "./_components/Industries";
import OurMission from "./_components/OurMission";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonials";

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
        <Testimonial />
      </section>
      <section className="w-full">
        <FiveDDesign />
      </section>
    </main>
  );
}