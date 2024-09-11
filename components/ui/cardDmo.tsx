"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/Card";
import Link from "next/link";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-slate-200">
          <h1>LTS platform</h1>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="font-extralight tracking-wide text-sm max-w-sm mt-2 text-neutral-300 uppercase"
        >
          <span>
            {" "}
            an innovative platform designed to empower students with visual
            disabilities. Our mission is to bridge the accessibility gap in
            education by providing adaptive learning materials, fostering a
            collaborative community. regardless of visual impairment,every
            student can confidently learn, and thrive.
          </span>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/lts-black .png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://x.com/AsElllyers"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            ABOUT THIS PROJECT →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
