"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ColorTest from "./components/ColorTest";
import Footer from "./components/Footer";
import OneApplicationMultipleOptions from "./components/OneApplicationMultipleOptions";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularWallet from "./components/PopularWallet";
import Market from "./components/Market";

export default function TestPage() {
  return (
    <main
      className="custom-gradient-bg"
    >
      <Navbar />
      <Hero/>
      <PopularWallet/>
      <Market/>

      <OneApplicationMultipleOptions />
      <Footer />
    </main>
  );
}
