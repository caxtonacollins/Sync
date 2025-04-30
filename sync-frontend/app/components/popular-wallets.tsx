import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import partners from "../assits/partners.png"

const walletLogos = [
  { name: "Binance", logo: "/placeholder.svg?height=24&width=80" },
  { name: "Ripple", logo: "/placeholder.svg?height=24&width=80" },
  { name: "Coinbase", logo: "/placeholder.svg?height=24&width=80" },
  { name: "Bitcoin", logo: "/placeholder.svg?height=24&width=80" },
  { name: "Tether", logo: "/placeholder.svg?height=24&width=80" },
  { name: "Monero", logo: "/placeholder.svg?height=24&width=80" },
  { name: "Ethereum", logo: "/placeholder.svg?height=24&width=80" },
]

const walletCards = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$40,322.50",
    percent: "-0.3%",
    status: "down",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$40,322.50",
    percent: "-0.3%",
    status: "down",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$40,322.50",
    percent: "+1.2%",
    status: "up",
  },
]

export function PopularWallets() {
  return (
    <section className="w-full py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0F0B2D]">
      {/* Wallet Logos */}
      <div className="flex justify-center mb-10 sm:mb-16"> 
        <div className="transition-opacity hover:opacity-80"> 
          <Image
            src={partners}
            alt="Wallet Logos"
            width={1000}
            height={80}
            className="max-w-full h-auto"
          />
        </div>
      </div> 
      
      {/* Popular Wallet Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
        Popular Wallet
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
        {walletCards.map((wallet, index) => (
          <Card key={index} className="bg-[#1A1552] border-none text-white">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm">{wallet.name}</div>
                <div className="text-[10px] sm:text-xs text-white/60">{wallet.symbol}</div>
              </div>
              <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{wallet.price}</div>
              <div
                className={`inline-block px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs ${
                  wallet.status === "up" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                }`}
              >
                {wallet.percent}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline" className="border-blue/20 bg-transparent text-white hover:text-blue-700 hover:bg-white">
          Connect Wallet
        </Button>
      </div>
    </section>
  )
}