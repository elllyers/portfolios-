"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(2px)" : "none",
      },
      {
        duration: duration ? duration : .5,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx >3 ? "text-purple-500" : "text-slate-100"
              } opacity-0 lg:text-6xl md:text-3xl tracking-wider`}
              style={{
                filter: filter ? "blur(20px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-extrabold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
