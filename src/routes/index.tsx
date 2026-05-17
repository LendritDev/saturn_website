import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saturn Group — Building the Future Through Technology" },
      { name: "description", content: "Saturn Group engineers next-generation cloud, AI, cybersecurity, and software platforms for enterprises operating at planetary scale." },
      { property: "og:title", content: "Saturn Group — Future-grade Technology" },
      { property: "og:description", content: "Cloud, AI, cybersecurity, and software, engineered as one." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Loader />
      <StarField />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Services />
          <Showcase />
          <Stats />
          <Partners />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
