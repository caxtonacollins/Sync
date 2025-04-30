import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0F0B2D] flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Fastest & secure
          <br />
          crypto marketplace
        </h1>
        <p className="text-white/70 mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s
          standard dummy text.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 h-auto text-sm sm:text-base">
          Get Started
        </Button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm md:max-w-md">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-3 sm:p-4">
            <div className="bg-[#1A1552] rounded-xl p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">BTC</div>
              </div>

              <svg
                width="100%"
                height="100"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,100 Q50,80 100,60 T200,40 T300,60 T400,20" stroke="#3B82F6" strokeWidth="2" fill="none" />
                <circle cx="320" cy="55" r="6" fill="#3B82F6" />
              </svg>

              <div className="grid grid-cols-6 gap-1 sm:gap-2 mt-3 sm:mt-4">
                <div className="text-white/50 text-[10px] sm:text-xs text-center">1h</div>
                <div className="text-white/50 text-[10px] sm:text-xs text-center">1d</div>
                <div className="text-white/50 text-[10px] sm:text-xs text-center">1w</div>
                <div className="text-white/50 text-[10px] sm:text-xs text-center">1m</div>
                <div className="text-white/50 text-[10px] sm:text-xs text-center">1y</div>
                <div className="text-white/50 text-[10px] sm:text-xs text-center">All</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
