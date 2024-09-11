import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

import { items } from "@/data";

export function GridContent() {
  return (
    <div className="flex flex-col">
      <div className="mb-10 bg-black rounded-lg items-center justify-center">
        <h2 className="text-center mb-2">
          <span className="tracking-widest font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-800 brightness-200 to-cyan-500 sm:text-xl md:text-2xl lg:text-3xl uppercase">
            ALL ABOUT ME
          </span>
        </h2>
      </div>
      <div>
        <BentoGrid className=" mx-2">
          {items.map(({ Key, title, description, img }) => (
            <BentoGridItem
              Key={Key}
              title={title}
              description={description}
              className={Key === 1 || Key === 6|| Key===3 ? "md:col-span-2" : ""}
              img={img}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
