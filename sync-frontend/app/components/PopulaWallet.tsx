import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PopularWallet() {
  return (
    <div className="bg-gradient-to-br m-8 from-[var(--color-linear-gradient3)] via-[var(--color-linear-gradient2)] to-[var(--color-linear-gradient4)] ">
    <h1 className="text-gray-50 text-5xl text-center pt-8">Popular Wallet</h1>
    <div className="flex flex-row justify-around">
      <div className="bg-[#1a1a41] flex flex-col m-16 rounded-md">
        <div>
          <ul className="flex flex-row gap-8 p-8">
            <li className="text-gray-100 text-2xl">Bitcoin</li>
            <li className="text-gray-500 text-2xl">BTC/USDT</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-gray-50 text-3xl px-6">$40,322.50</li>
          </ul>
        </div>

        <div>
          <ul className="px-6 pb-6 py-6">
            <li className="inline-block bg-[#e86c6c] px-4 py-2 rounded-full text-gray-100">
              +0.23%
            </li>
          </ul>
        </div>
      </div>


      <div className="bg-[#1a1a41] flex flex-col m-16 rounded-md">
        <div>
          <ul className="flex flex-row gap-8 p-8">
            <li className="text-gray-100 text-2xl">Ethereum</li>
            <li className="text-gray-500 text-2xl">ETH/USDT</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-gray-50 text-3xl px-6">$40,322.50</li>
          </ul>
        </div>

        <div>
          <ul className="px-6 pb-6 py-6">
            <li className="inline-block bg-[#e86c6c] px-4 py-2 rounded-full text-gray-100">
              +0.23%
            </li>
          </ul>
        </div>
      </div>


      <div className="bg-[#1a1a41] flex flex-col m-16 rounded-md">
        <div>
          <ul className="flex flex-row gap-8 p-8">
            <li className="text-gray-100 text-2xl">Ripple</li>
            <li className="text-gray-500 text-2xl">XRP/USDT</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-gray-50 text-3xl px-6">$40,322.50</li>
          </ul>
        </div>

        <div>
          <ul className="px-6 pb-6 py-6">
            <li className="inline-block bg-[#8ac36f] px-4 py-2 rounded-full text-gray-100">
              +0.23%
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
