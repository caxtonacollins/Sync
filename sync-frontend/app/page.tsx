import { Navbar } from "./components/ navbar";
import { HeroSection } from "./components/hero-section";
import { MarketTrend } from "./components/market-trend";
import { PopularWallets } from "./components/popular-wallets";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0B2D]">
      <Navbar />
      <HeroSection />
      <PopularWallets />
      <MarketTrend />
    </main>
  )
}
