"use client";

import Button from "@mui/material/Button"
import { useState, useEffect } from "react";

import InfinitDiv from "./(components)/InfinitDiv";
const labels = ["Start Here", "Not That Easy", "Maybe Try Something Else", "This Is Not The Answer", "You're Getting Closer", "Almost There", "You're So Close"];
const colors = ["primary", "secondary", "error", "warning", "success"];

export default function Home() {
  type ButtonColor = "inherit" | "primary" | "secondary" | "success" | "error" | "warning";
  const [buttonColor, setButtonColor] = useState<ButtonColor>("primary");
  const [buttonText, setButtonText] = useState("Start Here");


  const handleClick = () => {
    const label: string = labels.shift() || "Why?";
    const color: ButtonColor = (colors.shift() as ButtonColor) || "primary";
    
    setButtonText(label);
    setButtonColor(color);
    
    labels.push(label);
    colors.push(color);
  }

  return (
    <>
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center space-y-14">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl">CTF</h1>
          <p className="text-lg font-semibold">Welcome to the Capture The Flag competition!</p>
        </div>
        <Button variant="contained" color={buttonColor} size="large" onClick={handleClick}>
          {buttonText}
        </Button>
      </div>
      <InfinitDiv />
    </>
  );
}
