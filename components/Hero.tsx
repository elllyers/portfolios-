"use client";

import { motion } from "framer-motion";
import React from "react";

import { Vortex } from "./ui/vortex";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import MagicButton from "./ui/magicButton";
import { AnimatedTooltip } from "./ui/animatedTool";
import { people } from "@/data";
import { slideInFromLeft } from "@/lib/motion";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <div>
        <Vortex
          backgroundColor="black"
          className="h-full w-fullflex items-center justify-center  overflow-hidden"
        >
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            animate="visible"
            className="absolute mx-10 pl-4 invisible md:visible  bottom-10"
          >
            <AnimatedTooltip items={people} />
          </motion.div>
          <div className="h-screen flex flex-col w-full items-center justify-center gap-4">
            <div className="h-32 w-84 flex -mt-10">
              <motion.span
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                className="text-center uppercase text-sm text-blue-100 tracking-widest max-w-90"
              >
                i&#39;m a passionate web developer from rwanda
              </motion.span>
            </div>
            <TextGenerateEffect
              className="h-32 w-84 font-extrabold uppercase text-center text-[40px] md:text-3xl lg:text-8xl"
              words="I like coding, solving real world problems"
            />
            <p className="text-center text-xl md:tracking-wider text-slate-300 px-2">
              The worst enemy to the creativity is self doubt
            </p>
            <div className="my-4">
              <a href="#about">
                <MagicButton title="Show My Progress" />
              </a>
            </div>
          </div>
        </Vortex>
      </div>
    </div>
  );
};

export default Hero;
