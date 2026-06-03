"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import SocialConnect from "./components/SocialConnect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <About />
        <Testimonials />
        <SocialConnect />
        <Team/>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      
    </>
  );
}