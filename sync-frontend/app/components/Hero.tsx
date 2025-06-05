import React from 'react';
import { Button } from '@/components/ui/button';
import Graph from "@/assets/Rising.svg";
import Company from "@/assets/company.svg";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-fit pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight bg-[linear-gradient(92.09deg,_#FFFFFF_3.42%,_rgba(255,255,255,0.932755)_56.55%,_rgba(255,255,255,0)_111.05%)] bg-clip-text text-transparent">
                Fastest & secure
                <br />
                <span className="bg-[linear-gradient(92.09deg,_#FFFFFF_3.42%,_rgba(255,255,255,0.932755)_56.55%,_rgba(255,255,255,0)_111.05%)] bg-clip-text text-transparent">
                  crypto marketplace
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Right content - Chart aligned right */}
          <div className="flex justify-end">
            <Image
              src={Graph}
              alt="Graph"
              width={393}
              height={368}
            />
          </div>
        </div>

        {/* Company logos */}
        <div className="pt-6 flex justify-center">
          <Image
            src={Company}
            alt="Companies"
            width={1183}
            height={36}
          />
        </div>
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
