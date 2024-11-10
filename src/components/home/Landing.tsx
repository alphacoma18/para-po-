"use client";

import LandingAnimation from "@/components/landing/landingAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function Landing() {
    const [destination, setDestination] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log("Destination:", destination);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <div className="w-full lg:w-1/3 h-auto lg:h-screen flex flex-col justify-center items-center relative overflow-hidden">
                <div className="w-full h-[50vh] flex justify-center items-center">
                    <LandingAnimation />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-sm items-center space-x-2 px-4 lg:px-0"
                >
                    <Input
                        type="text"
                        placeholder="Where are you going?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="flex-grow"
                    />
                    <Button type="submit">Go</Button>
                </form>
            </div>
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-screen flex justify-center items-center">
                <Spline
                    scene="https://prod.spline.design/zpMJQkPWSrM6Shpm/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}