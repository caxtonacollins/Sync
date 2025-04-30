import { Button } from "@/components/ui/button"

const marketTrendData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$32,534.42",
    change: "+1.21",
    chart: "up",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$32,534.42",
    change: "-0.89",
    chart: "down",
  },
  {
    id: 3,
    name: "Ripple",
    symbol: "XRP",
    price: "$32,534.42",
    change: "+1.42",
    chart: "up",
  },
]

export function MarketTrend() {
  return (
    <section className="w-full py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0F0B2D]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-8">
        {/* Left side (33%) - Market Trend title and button */}
        <div className="w-full md:w-1/3 flex flex-col justify-between pr-0 mb-8 md:mb-0">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Market Trend</h2>
            <p className="text-white/70 text-sm sm:text-base">
              Crypto markets are highly volatile and understanding price movements is essential for successful trading.
              Stay updated with the latest trends.
            </p>
          </div>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">Start Trading</Button>
        </div>
        
        {/* Right side (66%) - Crypto table */}
        <div className="w-full md:w-2/3">
          <div className="bg-[#1A1552] rounded-xl overflow-hidden overflow-x-auto">
            <div className="min-w-[600px] flex border-b border-white/10 text-white/60 text-xs sm:text-sm">
              <div className="py-2 sm:py-3 px-2 sm:px-4 w-[8%] text-center border-r border-white/10 hover:bg-white/5 cursor-pointer">
                #
              </div>
              <div className="py-2 sm:py-3 px-2 sm:px-4 w-[22%] text-center border-r border-white/10 hover:bg-white/5 cursor-pointer">
                Name
              </div>
              <div className="py-2 sm:py-3 px-2 sm:px-4 w-[20%] text-center border-r border-white/10 hover:bg-white/5 cursor-pointer">
                Price
              </div>
              <div className="py-2 sm:py-3 px-2 sm:px-4 w-[15%] text-center border-r border-white/10 hover:bg-white/5 cursor-pointer">
                24h change
              </div>
              <div className="py-2 sm:py-3 px-2 sm:px-4 w-[20%] text-center border-r border-white/10 hover:bg-white/5 cursor-pointer">
                Chart
              </div>
              <div className="py-2 sm:py-3 px-2 sm:px-4 w-[15%] text-center hover:bg-white/5 cursor-pointer">Trade</div>
            </div>

            <div className="min-w-[600px]">
              {marketTrendData.map((coin) => (
                <div key={coin.id} className="flex border-b border-white/10 hover:bg-white/5 text-xs sm:text-sm">
                  <div className="py-3 px-2 sm:px-4 w-[8%] text-center text-white font-medium">{coin.id}</div>
                  <div className="py-3 px-2 sm:px-4 w-[22%] text-center">
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 mr-2 flex items-center justify-center text-[10px] sm:text-xs">
                        {coin.symbol.charAt(0)}
                      </div>
                      <span className="text-white">{coin.name}</span>
                      <span className="text-white/60 ml-1 sm:ml-2 text-[10px] sm:text-xs">{coin.symbol}</span>
                    </div>
                  </div>
                  <div className="py-3 px-2 sm:px-4 w-[20%] text-center text-white">{coin.price}</div>
                  <div
                    className={`py-3 px-2 sm:px-4 w-[15%] text-center ${coin.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                  >
                    {coin.change}%
                  </div>
                  <div className="py-3 px-2 sm:px-4 w-[20%] text-center">
                    <svg
                      width="80"
                      height="30"
                      viewBox="0 0 80 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <path
                        d={
                          coin.chart === "up"
                            ? "M0,20 Q10,15 20,10 T40,5 T60,15 T80,5"
                            : "M0,10 Q10,15 20,20 T40,25 T60,15 T80,25"
                        }
                        stroke={coin.chart === "up" ? "#10B981" : "#EF4444"}
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="py-3 px-2 sm:px-4 w-[15%] text-center">
                    <Button
                      size="sm"
                      className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 h-auto ${
                        coin.chart === "up"
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}