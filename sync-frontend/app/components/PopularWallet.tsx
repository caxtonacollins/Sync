'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // optional utility for class merging

interface WalletCardProps {
  name: string;
  pair: string;
  price: string;
  change: string;
  changeType: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ name, pair, price, change, changeType }) => {
  return (
    <div className="bg-[#1E1E4C] text-white rounded-xl p-6 w-full max-w-xs shadow-md">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-sm text-gray-400">{pair}</span>
      </div>

      <div className="text-3xl font-bold mb-4 text-left">{price}</div>

      <div className="text-left">
        <div
          className={cn(
            'inline-block px-4 py-1 mt-4 text-sm font-medium rounded-full',
            changeType === 'up' ? 'bg-[#8AC36F] text-white' : 'bg-[#E86C6C] text-white'
          )}
        >
          {change}
        </div>
      </div>
    </div>
  );
};

const PopularWallet = () => {
  const wallets = [
    {
      name: 'Bitcoin',
      pair: 'BTC/USDT',
      price: '$40,322.50',
      change: '+0.23%',
      changeType: 'down',
    },
    {
      name: 'Ethereum',
      pair: 'ETH/USDT',
      price: '$40,322.50',
      change: '+0.23%',
      changeType: 'down',
    },
    {
      name: 'Ripple',
      pair: 'XRP/USDT',
      price: '$40,322.50',
      change: '+0.23%',
      changeType: 'up',
    },
  ];

  return (
    <section className="min-h-fit text-center pb-24">
      <h2 className="text-4xl md:text-7xl font-serif text-white mb-20">Popular Wallet</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {wallets.map((wallet, index) => (
          <WalletCard key={index} {...wallet} />
        ))}
      </div>

      <div className="mt-12">
        <button
          
          className="text-white border-[#2D52EC] border hover:bg-blue-600 hover:text-white transition-colors px-16 py-2 text-lg rounded-xl"
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default PopularWallet;