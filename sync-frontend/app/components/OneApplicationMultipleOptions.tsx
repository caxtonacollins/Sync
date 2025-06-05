import React from "react";
import Image from "next/image";
import phoneMockup from "@/assets/phone-mockup.png";
import Eth from "@/assets/image 5.png";
import Bitcoin from "@/assets/image 6.png";
import { motion } from "framer-motion";
import { i } from "motion/react-client";
import Icon1 from "@/assets/Frame 51.png";
import Icon2 from "@/assets/Frame 51 (1).png";
import Icon3 from "@/assets/Frame 51 (2).png";
import Icon4 from "@/assets/Frame 51 (3).png";

const OneApplicationMultipleOptions = () => {
    const features = [
        {
            id: "planning",
            title: "Planning",
            description: "Map the crypto projects scope with framer template",
            icon: "⊞",
            Image: Icon1,
            position: { top: "20%", left: "15%" },
            isLeft: true
        },
        {
            id: "prototype",
            title: "Prototype",
            description: "Build crypto website test for your product",
            icon: "⚙",
            Image: Icon2,
            position: { bottom: "35%", left: "12%" },
            isLeft: true
        },
        {
            id: "refinement",
            title: "Refinement",
            description: "Refine & improve your crypto landing page",
            icon: "◈",
            Image: Icon3,
            position: { top: "18%", right: "15%" },
            isLeft: false
        },
        {
            id: "scale",
            title: "Scale and support",
            description: "Deploy product live and ensure expert support",
            icon: "🚀",
            Image: Icon4,
            position: { bottom: "30%", right: "12%" },
            isLeft: false
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const phoneVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const bitcoinVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 1,
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className='relative min-h-screen bg-gradient-to-br from-slate-900 via-[#0E1032] to-[#02071A] overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                <div className='absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl'></div>
                <div className='absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl'></div>
                <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-lg'></div>
            </div>

            <motion.div
                className='relative z-10 container mx-auto px-4 py-16 lg:py-24'
                variants={containerVariants}
                initial='hidden'
                animate='visible'
            >
                {/* Header */}
                <motion.div className='text-center mb-16' variants={itemVariants}>
                    <p className='text-white  mb-4 text-sm font-medium tracking-wide uppercase'>
                        We deliver <span className='text-[#2D52EC]'>best solution</span>
                    </p>
                    <h1 className='text-white text-[20px] md:text-[40px] lg:text-[40px] font-bold leading-tight max-w-[936px] mx-auto'>
                        One application with multiple options to give you freedom of buying
                        & selling
                    </h1>
                </motion.div>

                {/* Main Content Area */}
                <div className='relative flex flex-col lg:flex-row justify-center items-center min-h-[800px]'>
                    {/* Orbital Rings - Hidden on mobile */}
                    <div className='hidden lg:flex absolute inset-0 items-center justify-center'>
                        <div className='w-[500px] h-[500px] border-[3.48px] border-[#FFFFFF1A] rounded-full'></div>
                        <div className='absolute w-[400px] h-[400px] border-[3.48px] border-[#FFFFFF1A] rounded-full'></div>
                        <div className='absolute w-[600px] h-[600px] border-[3.48px] border-[#FFFFFF1A] rounded-full'></div>
                    </div>

                    {/* Phone and crypto images section */}
                    <div className='relative lg:absolute lg:inset-0 flex justify-center items-center'>
                        <div className='relative'>
                            {/* Phone Mockup with Bitcoin inside */}
                            <motion.div
                                className='relative z-30 mx-auto'
                                variants={phoneVariants}
                            >
                                <div className='w-80 h-[540px] relative'>
                                    <Image
                                        src={phoneMockup}
                                        alt='Crypto Exchange App Interface'
                                        className='w-full h-full object-contain'
                                    />
                                    {/* Bitcoin positioned on the phone screen - LARGER SIZE */}
                                    <motion.div
                                        className='absolute z-40 top-[40%] right-[0%]'
                                        variants={bitcoinVariants}
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, -5, 0],
                                        }}
                                        transition={{
                                            y: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                            rotate: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            },
                                        }}
                                    >
                                        <Image
                                            src={Bitcoin}
                                            alt='Bitcoin'
                                            className='w-26 h-26 object-contain'
                                            style={{
                                                transform: "translate(30%, -30%)",
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Ethereum Icon (peeking from side) - LARGER SIZE */}
                            <motion.div
                                className='absolute z-20 bottom-[35%] left-[-10%]'
                                variants={bitcoinVariants}
                                animate={{
                                    x: [0, -5, 0],
                                    rotate: [0, -3, 3, 0],
                                }}
                                transition={{
                                    x: {
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    },
                                    rotate: {
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    },
                                }}
                            >
                                <Image
                                    src={Eth}
                                    alt='Ethereum'
                                    className='w-40 h-40 object-contain opacity-90'
                                    style={{
                                        marginLeft: "-8px",
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Feature Cards - Desktop */}
                    <div className='hidden lg:block'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                className='absolute z-20 group cursor-pointer'
                                style={feature.position}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className=''>
                                    <div className='flex items-start gap-2'>
                                        {feature.isLeft === false && <div className=''>
                                            <Image
                                                src={feature.Image}
                                                alt={`${feature.title} Icon`}
                                                className='object-contain'
                                            />
                                        </div>}

                                        <div className='flex-1'>
                                            <h3 className={`text-white font-semibold text-[20px] mb-1 ${feature.isLeft ? 'text-right' : 'text-left'}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-slate-300 text-sm leading-relaxed w-[200px] ${feature.isLeft ? 'text-right' : 'text-left'}`}>
                                                {feature.description}
                                            </p>
                                        </div>

                                        {feature.isLeft === true && <div className=''>
                                            <Image
                                                src={feature.Image}
                                                alt={`${feature.title} Icon`}
                                                className='object-contain'
                                            />
                                        </div>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Feature Cards - Mobile */}
                    <div className='lg:hidden w-full mt-8 space-y-8 px-4'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                className='group cursor-pointer'
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6'>
                                    <div className={`flex items-center gap-4 ${feature.isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className='flex-shrink-0'>
                                            <Image
                                                src={feature.Image}
                                                alt={`${feature.title} Icon`}
                                                className='w-12 h-12 object-contain'
                                            />
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-white font-semibold text-lg mb-1'>
                                                {feature.title}
                                            </h3>
                                            <p className='text-slate-300 text-sm leading-relaxed'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default OneApplicationMultipleOptions;