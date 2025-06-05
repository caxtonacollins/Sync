import React from 'react';
import { TrendingUp, Bitcoin, Zap, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CryptoTable from './home/table';

const Market = () => {
  const cryptoData = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$32,554.32',
      change: '+1.21',
      icon: Bitcoin,
      color: 'text-orange-500'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$32,554.32',
      change: '+0.87',
      icon: Zap,
      color: 'text-blue-400'
    },
    {
      id: 3,
      name: 'Ripple',
      symbol: 'XRP',
      price: '$32,554.32',
      change: '+1.42',
      icon: Waves,
      color: 'text-cyan-400'
    }
  ];

  const stats = [
    { value: '45M+', label: 'User worldwide' },
    { value: '120', label: 'Country Supported' },
    { value: '73M+', label: 'Crypto Transactions' },
    { value: '$470B', label: 'Assets on Platform' }
  ];

  const MiniChart = ({ trend }: { trend: 'up' | 'down' }) => (
    <div className="w-16 h-8 flex items-end space-x-0.5">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className={`w-1 rounded-sm ${trend === 'up' ? 'bg-green-400' : 'bg-red-400'}`}
          style={{ 
            height: `${Math.random() * 20 + 10}px`,
            opacity: 0.6 + (i * 0.05)
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="py-12 text-white p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Side - Market Trend Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Market Trend
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Coino maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.
              </p>
            </div>
            
             <Button
                      className="bg-[#2D52EC] hover:bg-[#2D52EC]/90 text-white font-Montserrat px-16 py-6  rounded-lg mt-4 "
                    >
                      Start Trading
                    </Button>
          </div>

          {/* Right Side - Crypto Table */}
          <CryptoTable/>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2 p-6 ">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Visual Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default Market;