import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Studio from "../components/Studio";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SiteFooter from "../components/SiteFooter";
import usePageMeta from "../hooks/usePageMeta";

const HomePage = () => {
  usePageMeta({
    title: "Steven Gabriel — Software Engineer & Founder, Lagos",
    description:
      "Software engineer and founder in Lagos, Nigeria. Founder of MyBabe AI and CEO of Iteminder LTD, a software studio that builds and scales apps.",
    canonicalPath: "/",
  });

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Work />
        <Studio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
};

export default HomePage;
