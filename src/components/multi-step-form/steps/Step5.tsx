"use client"
import React from "react";
import { z } from "zod";
import Image from "next/image";

const Step5 = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full py-20">
            <div className="relative w-20 h-20">
                <Image
                    src={"/assets/images/icon-thank-you.svg"}
                    layout="fill"
                    objectFit="contain"
                    alt={"Thank you icon"}
                />
            </div>
            <div className="text-3xl text-marine-blue font-ubuntu-bold my-8">Thank You!</div>
            <div className="text-center text-cool-gray">Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.</div>
        </div>
    );
};

export default Step5;