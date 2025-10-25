import { HeroHeader } from "@/app/(marketing)/_components/header";
import HeroSection from "@/app/(marketing)/_components/hero-section";
import { ThemeToggle } from "@/components/ui/them-toggle";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThemeToggle />
      <p>Home</p>
    </>
  );
}
