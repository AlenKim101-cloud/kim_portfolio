import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import SelectedWork from "../components/SelectedWork";
import StackSection from "../components/StackSection";
import AboutTeaser from "../components/AboutTeaser";
import GitHubStrip from "../components/GitHubStrip";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <SelectedWork />
      <StackSection />
      <AboutTeaser />
      <GitHubStrip />
      <ContactSection />
    </>
  );
}
