import React from 'react';
import { Button } from '@/components/ui/button';

interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: string;
  iconBg: string;
  chartColor: string;
}

const CryptoTable: React.FC = () => {
  const cryptoData: CryptoData[] = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$32,554.32',
      change: '+1.21',
      icon: '₿',
      iconBg: 'bg-orange-500',
      chartColor: 'text-orange-400'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$32,554.32',
      change: '+0.87',
      icon: '♦',
      iconBg: 'bg-blue-500',
      chartColor: 'text-blue-400'
    },
    {
      id: 3,
      name: 'Ripple',
      symbol: 'XRP',
      price: '$32,554.32',
      change: '+1.42',
      icon: '◊',
      iconBg: 'bg-cyan-500',
      chartColor: 'text-cyan-400'
    }
  ];

  const MiniChart: React.FC<{ color: string }> = ({ color }) => (
    <div className={`${color} opacity-60`}>
      <svg width="60" height="20" viewBox="0 0 60 20" className="fill-none stroke-current stroke-[1.5]">
        <path d="M2 12c2-3 4-8 8-6 4 2 6-2 10 0s6 4 10 2 8-4 12-2 10 3 14 1" className="stroke-current"/>
      </svg>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-800">
      {/* Header */}
      <div className="px-6 py-4 ">
        <div className="grid grid-cols-12 gap-4 items-center text-slate-400 text-sm font-medium">
          <div className="col-span-1">#</div>
          <div className="col-span-3">Name</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">24h change</div>
          <div className="col-span-2">Chart</div>
          <div className="col-span-2">Trade</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-slate-800">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            className="px-6 py-4 hover:bg-slate-800/50 transition-colors duration-200"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Rank */}
              <div className="col-span-1">
                <span className="text-slate-400 text-sm font-medium">{crypto.id}</span>
              </div>

              {/* Name */}
              <div className="col-span-3 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${crypto.iconBg} flex items-center justify-center text-white font-bold text-sm`}>
                  {crypto.icon}
                </div>
                <div>
                  <div className="text-white font-medium">{crypto.name}</div>
                  <div className="text-slate-400 text-sm">{crypto.symbol}</div>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2">
                <span className="text-white font-semibold text-lg">{crypto.price}</span>
              </div>

              {/* 24h Change */}
              <div className="col-span-2 pl-4">
                <span className="text-green-400 font-medium">{crypto.change}</span>
              </div>

              {/* Chart */}
              <div className="col-span-2">
                <MiniChart color={crypto.chartColor} />
              </div>

              {/* Trade Button */}
              <div className="col-span-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTable;