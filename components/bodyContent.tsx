import React from "react";

import { CARDS } from "@/data";
import { motion } from "framer-motion";
import { ThreeDCard } from "./ui/cardDmo";
import { ThreeDCard1 } from "./ui/cardDmo1";
import { FlipWords } from "./ui/FlipWords";
import { CardStack } from "./ui/cardStack";
import { GridContent } from "./ui/Grid";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const BodyContent = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = Intl.DateTimeFormat("en-us", { dateStyle: "long" }).format(now);
  return (
    <div className="h-full w-full flex flex-col gap-4">
      <div
        id="about"
        className="h-full w-full dark:bg-black bg-bla-200  bg-grid-white/[0.09] dark:bg-grid-black/[0.2] relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-bla-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <GridContent />
      </div>
      <div id="projects" className="h-full w-full my-8 mx-2">
        <div className="h-full w-full dark:bg-black bg-bla-200 bg-grid-small-white/[0.2] dark:bg-grid-small-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-bla-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

          <div className="h-full w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="text-center font-bold">
                  <span className="text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-800 brightness-200 to-cyan-500 text-3xl sm:text-xl md:text-2xl lg:text-3xl uppercase">
                    Projects in workspace
                  </span>
                </h1>
              </div>
              <div className="my-2">
                <h2 className="capitalize text-center text-xl text-slate-200 hover:brightness-90">
                  <span className="block">
                    only give time all that matters on you
                  </span>
                  <span className="">
                    through this, i have managed to fullfill my responsibilities
                  </span>
                </h2>
              </div>
              <div className="flex flex-col xl:flex-row xl:items-center xl:gap-4 ">
                <div className="mx-2">
                  <ThreeDCard />
                </div>
                <div className="mx-2">
                  <ThreeDCard1 />
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col h-42 w-full border-b border-slate-500 my-8 py-8">
              <div className=" mx-2">
                <span className="text-center block brightness-200 uppercase tracking-wider text-3xl text-slate-300 font-semibold transition animate-bounce">
                  Dreaming of more diffent projects
                </span>
              </div>
              <div className="h-30 mx-4 border-slate-600 rounded-md bg-bla-100/50 p-1">
                <p className="text-2xl text-white text-center hover:brightness-90">
                  &quot;Hey, fellow dreamers! Gather &apos;round. You know, I&apos;ve been
                  thinking—a project isn&apos;t just code; it&apos;s a whisper of
                  possibility. So, let&apos;s dream bigger. Imagine an app that pairs
                  lost socks, because even laundry deserves love. Or a website
                  that translates cat meows into Shakespearean sonnets—because
                  feline drama deserves iambic pentameter. And what about an
                  AI-powered umbrella that predicts rain, but also compliments
                  your outfit? “Brilliant choice of raincoat, my dear Watson!”
                  it&apos;ll say. Now, I see you raising an eyebrow. “But how?” you
                  ask. Well, that&apos;s the magic! We&apos;ll mix equal parts curiosity,
                  caffeine, and late-night inspiration. We&apos;ll code like wizards,
                  debug like detectives, and test like mad scientists. And when
                  our project finally takes flight—whether it&apos;s a pixel-perfect
                  website or an app that organizes your sock drawer—we&apos;ll
                  high-five the universe. Because dreams, my friends, are the
                  blueprints of reality. So, grab your digital sketchbook,
                  sprinkle it with stardust, and let&apos;s create. Who knows? Our
                  next project might just change lives—or at least make mornings
                  more caffeinated! ☕🚀&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="h-full my-8 ">
        <div className="flex flex-col h-20 w-full items-center justify-center ">
          <div className="text-center font-bold text-3xl">
            <span
              className="
             text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-800 brightness-200 to-cyan-500 uppercase"
            >
              Hmmm....
              <FlipWords
                words={["better", "cute", "beautiful", "modern"]}
                className="transition bg-clip-text bg-gradient-to-r from-purple-800 brightness-200 to-cyan-500 uppercase"
              />
              , Skills
            </span>
          </div>
          <div className="my-4 mx-2">
            <span className="px-2">
              <h2 className="leading-6 text-center font-semibold text-white text-2xl">
                Coding with new technologies is my lifestyle
              </h2>
            </span>
          </div>
        </div>
        <div className="h-90 rounded-md  mt-16 mx-8 items-center justify-center flex ">
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid md:grid grid-cols-1 mobile:grid-cols-2 gap-4 lg:gap-10 md:grid-cols-3 lg:grid lg:overflow-hidden xl:align-middle xl:flex xl:overflow-hidden"
          >
            <motion.div
              variants={slideInFromLeft(1)}
              className="bg-bla-300/20 hover:bg-bla-300/40  transition  hover:translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/[0.7] lg:hover:shadow-xl lg:hover:shadow-emerald-500/[0.3] lg:hover:-translate-y-1 h-[240px] overflow-hidden rounded-lg my-1 p-0.5 w-40 border border-slate-600 text-white "
            >
              <div className=" p-0.5 rounded-lg">
                <h1 className="text-xl border-b border-slate-600 text-center font-semibold rounded-lg">
                  Tailwind
                </h1>
              </div>
              <div className="my-0.5 p-0.5">
                <img src="/tailwind.png" alt="taiwind" />
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromBottom(1)}
              className="hover:shadow-2xl hover:shadow-emerald-500/[0.7] transition hover:translate-y-1 xl:mt-24 h-[240px] overflow-hidden bg-bla-300/20 hover:bg-bla-300/40 rounded-lg my-1 p-0.5 w-40 border border-slate-600 text-white"
            >
              <div className=" p-0.5 rounded-lg">
                <h1 className="border-b border-slate-600 text-xl text-center font-semibold rounded-lg">
                  React
                </h1>
              </div>
              <div className="h-[200px] my-0.5 pt-2 ">
                <img src="/react.png" alt="taiwind" />
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromTop(1)}
              className="transition  hover:translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/[0.7] lg:hover:shadow-xl lg:hover:shadow-emerald-500/[0.3] lg:hover:-translate-y-1 h-[240px] overflow-hidden bg-bla-300/20 hover:bg-bla-300/40 rounded-lg my-1 p-0.5 w-40 border border-slate-600 text-white "
            >
              <div className=" p-0.5 rounded-lg">
                <h1 className="border-b border-slate-600 text-xl text-center font-semibold rounded-lg">
                  Next.js
                </h1>
              </div>
              <div className="pb-1 my-0.5 p-0.5 ">
                <img src="/next.png" alt="taiwind" />
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromBottom(1)}
              className="hover:shadow-2xl hover:shadow-emerald-500/[0.7] transition hover:translate-y-1 xl:mt-24 h-[240px] overflow-hidden bg-bla-300/20 hover:bg-bla-300/40 rounded-lg my-1 p-0.5 w-40 border border-slate-600 text-white"
            >
              <div className=" p-0.5 rounded-lg">
                <h1 className="border-b border-slate-600 text-xl text-center font-semibold rounded-lg">
                  HTML
                </h1>
              </div>
              <div className="h-[200px] my-0.5 p-0.5 ">
                <img src="/html.png" alt="taiwind" />
              </div>
            </motion.div>

            <motion.div
              variants={slideInFromTop(1)}
              className="transition  hover:translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/[0.7] lg:hover:shadow-xl lg:hover:shadow-emerald-500/[0.3] lg:hover:-translate-y-1 h-[240px] overflow-hidden bg-bla-300/20 hover:bg-bla-300/40 rounded-lg my-1 p-0.5 w-40 border border-slate-600 text-white "
            >
              <div className=" p-0.5 rounded-lg">
                <h1 className="border-b border-slate-600 text-xl text-center font-semibold rounded-lg">
                  CSS
                </h1>
              </div>
              <div className="my-0.5 p-0.5 ">
                <img src="/css.png" alt="taiwind" />
              </div>
            </motion.div>
            <motion.div
              variants={slideInFromRight(1)}
              className="hover:shadow-2xl hover:shadow-emerald-500/[0.7] transition hover:translate-y-1 xl:mt-24 h-[240px] overflow-hidden bg-bla-300/20 hover:bg-bla-300/40 rounded-lg my-1 p-0.5 w-40 border border-slate-600 text-white"
            >
              <div className=" p-0.5 rounded-lg">
                <h1 className="border-b border-slate-600 text-xl text-center font-semibold rounded-lg">
                  MYSQL
                </h1>
              </div>
              <div className="my-0.5 p-0.5 ">
                <img src="/mysql.png" alt="taiwind" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        id="toNote"
        className="h-full my-4  px-3 flex items-center justify-center gap-2"
      >
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-bla-100/20  p-1 rounded-lg overflow-hidden">
            <div className="mb-10">
              <h2 className="text-slate-300  text-center text-2xl font-medium capitalize mx-2">
                some words matters
              </h2>
            </div>
            <div className="p-1 my-2 flex items-center justify-center">
              <CardStack items={CARDS} />
            </div>
          </div>
          <div className="h-0 md:h-full rounded-lg overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500 p-1">
              <div className="h-full bg-gradient-to-r from-purple-500 via-sky-600 to-cyan-500 p-2 rounded-sm ">
                <div className="h-full bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-500 p-3 rounded-sm ">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-sky-900 to-cyan-500 p-4 rounded-sm ">
                    <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500 p-5 rounded-sm ">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500  rounded-sm p-6">
                        <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500  rounded-sm p-7 opacity-50">
                          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-500 p-8 rounded-full opacity-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div className=" border border-slate-500 rounded-lg overflow-hidden">
            <div className="h-0 md:h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500 md:p-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 via-sky-600 to-cyan-500 p-2 rounded-sm ">
                <div className="h-full bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-500 p-3 rounded-sm ">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-sky-900 to-cyan-500 p-4 rounded-sm ">
                    <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500 p-5 rounded-sm ">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500  rounded-sm p-6">
                        <div className="h-full bg-gradient-to-r from-purple-500 via-slate-600 to-cyan-500  rounded-sm p-7 opacity-50">
                          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-500 p-8 rounded-full opacity-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="bg-bla-100/20  p-1 rounded-lg flex items-center justify-center">
            <div className="h-full md:w-[200px] lg:w-[300px]">
              <Carousel className="bg-bla-100/50 h-full w-full">
                <CarouselContent className="flex aspect-square items-center justify-center p-6">
                  <CarouselItem className="ml-4 p-1 text-slate-400 flex  items-center justify-center "></CarouselItem>
                  <CarouselItem className="ml-4 p-1 flex text-xl font-bold  items-center justify-center">
                    <div className="flex flex-col gap-20 items-center justify-center">
                      <div className="flex items-center justify-center text-slate-400">
                        {time}
                      </div>
                      <div className="text-slate-300">{date}</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="ml-8 p-1 flex  items-center justify-center">
                    <p className="text-2xl text-slate-400 text-center uppercase">
                      Who owns time and data owns world
                    </p>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
