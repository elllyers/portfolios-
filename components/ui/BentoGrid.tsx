import { cn } from "@/lib/utils";
import { TypewriterEffect } from "./typeWriter";
import { words } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  Key,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  Key: number;
  img: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-black border-white/[0.2]  border  justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
      style={{
        background: "rgb(3,8,23)",
        backgroundColor:
          "linear-gradient(90deg, rgba(3,8,23,1) 35%, rgba(9,13,38,1) 100%)",
      }}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-center font-sans font-bold text-2xl  text-neutral-200 mb-2">
          {title}
        </div>
        <div className="text-center font-sans font-normal text-base lg:text-xl text-neutral-300">
          {description}
        </div>

        {Key === 1 && (
          <div className="flex flex-row mt-8">
            <div className="my-2">
              <img src={img} alt="hardwork" />
            </div>
            <div className="p-1 flex items-center justify-center">
              <TypewriterEffect words={words} />
            </div>
          </div>
        )}

        {Key === 2 && (
          <div className="flex items-center justify-center">
            <div>
              <img src={img} alt="client" />
            </div>
          </div>
        )}

        {Key === 5 && (
          <div className="flex items-center justify-center my-4">
            <div>
              <img src={img} alt="client" />
            </div>
          </div>
        )}
        {Key === 3 && (
          <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center lg:justify-between mt-4 lg:mt-10 ">
            <div>
              <img src={img} alt="collabolation" />
            </div>
            <div className="mt-4 ">
              <button className="btn hover:transition hover:translate-y-1 outline-none">
                <a href="#contact">
                  <div className="rounded-sm bg-gradient-to-r from-slate-500 via-slate-500 to-slate-400 p-0.5">
                    <div className=" rounded-sm bg-black w-full h-full  hover:bg-bla-100 p-1">
                      <h1 className="h-full w-full text-xl lg:text-3xl md:text-sm font-semibold">
                        <span className="text-slate-400 font-serif lg:leading-4">
                          let's collaborate
                        </span>
                      </h1>
                    </div>
                  </div>
                </a>
              </button>
            </div>
          </div>
        )}

        <div className="rounded-none overflow">
          {Key === 4 && (
            <div className="flex items-end justify-end">
              <div className="relative bg-cover z-[10] opacity-30 flex items-center justify-center rounded-lg overflow-hidden">
                <div className="aspect-video opacity-80 ">
                  <video src="/earth.webm" autoPlay muted loop />
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {Key === 6 && (
            <div className="my-2 opacity-50">
              <img src={img} alt="codes" className="w-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
