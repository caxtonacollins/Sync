"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ColorTest from "./components/ColorTest";
import Footer from "./components/Footer";
import OneApplicationMultipleOptions from "./components/OneApplicationMultipleOptions";

export default function TestPage() {
  return (
    <main 
    //className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6"
    >
      {/* <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl p-6 bg-white rounded-2xl shadow-xl"
      >
        <h1 className="text-2xl font-bold mb-4">🎉 Test Page Working!</h1>
        <Button onClick={() => alert("Working Great! 🚀")}>Click Me</Button>

        <div className="mt-8">
          <ColorTest />
        </div>
      </motion.div> */}
              <OneApplicationMultipleOptions />
 <Footer />
    </main>
  );
}
