import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: [
      ...Array(20)
        .fill(1)
        .map((_, i) => (i % 2 === 0 ? 1 : 1.1)),
    ],
    transition: {
      duration: 30,
    },
  },
};
const yr = Date;
const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "elllyers@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      id="contact"
      className="h-full mt-4 px-3 py-2 gap-2 border-t border-slate-500 rounded-none"
    >
      <div className=" grid grid-cols-2 gap-10 md:flex md:gap-0 items-center justify-evenly my-2 ">
        <div className="h-15  -mt-4">
          <div>
            <h2 className="text-center text-slate-200 text-xl font-semibold ">
              contact us
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white "
                  d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232"
                />
              </svg>
            </span>
            <span className="text-slate-400 tracking-wide font-mono m-1">
              +250739894115
            </span>
          </div>
        </div>{" "}
        <div className="h-15 -mt-4">
          <h2 className="text-center text-slate-200 text-xl font-semibold ">
            location
          </h2>
          <div className="text-xs sm:text-xl text-slate-400  font-mono flex justify-center">
            <span className="text-slate-400 font-mono ">Nyagatare,Rwanda</span>
          </div>
        </div>
        <div className="text-xs sm:text-xl h-15">
          <h2 className="text-center text-slate-200 text-xl font-semibold ">
            projects
          </h2>
          <div className="text-xs sm:text-xl h-full flex flex-col items-center justify-center">
            <span className=" text-slate-400 tracking-wide font-mono ">
              LTS platform
            </span>
            <span className=" text-slate-400 tracking-wide font-mono">
              EdGePLEX
            </span>
          </div>
        </div>
        <div className="text-xs sm:text-xl h-15">
          <h2 className="text-center text-slate-200 text-xl font-semibold ">
            Copy email
          </h2>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="h-10 w-full p-0.5 bg-indigo-700 rounded-lg mt-0.5 sm:mt-2"
          >
            <div className="flex items-center justify-center bg-slate-700 h-full w-full rounded-lg">
              <button
                className=" text-slate-200 text-[8px] sm:text-xs text-base text-center outline-none"
                onClick={handleCopy}
              >
                {copied ? "Email is Copied!" : "Copy my email address"}
              </button>
            </div>{" "}
          </motion.div>
        </div>
      </div>

      <div className="p-1 mx-4">
        <div className="flex items-center justify-start">
          <span className="mr-0.5">
            <img src="/imgfooter.png" width={20} height={20} />
          </span>
          <span className="font-thin text-sm text-slate-200">
            {" "}
            &#169;{new Date().getFullYear()}
          </span>
        </div>
        <div className="flex flex-row gap-1 my-4">
          <a href="https://github.com/elllyers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.16-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
          </a>

          <span className="border-r-2 border-slate-500"></span>
          <a href="https://x.com/AsElllyers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />
            </svg>
          </a>
          <span className="border-r-2 border-slate-500"></span>
          <a href="https://www.linkedin.com/in/elias-gatete-157938325/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
