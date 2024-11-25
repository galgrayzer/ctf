"use client";

import { useState, useEffect } from "react";
import InputBuild from "@/app/(components)/input/InputField";
import Button from "@/app/(components)/input/Button";


export default function Page() {
    const [winners, setWinners] = useState<any>([]);
    const [winner, setWinner] = useState<string>("");

    useEffect(() => {
        getWinners();
    }, []);

    const getWinners = async () => {
        const req = await fetch("/api/add-winner", { cache: "no-store" });
        const json = await req.json();
        if (json.status === 200) {
            setWinners(json.winnersList);
        }
    }

    const addWinner = async (winner: string) => {
        const req = await fetch("/api/add-winner", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: winner
            }),
            cache: "no-store"
        });
        const json = await req.json();
        if (json.status === 200) {
            setWinners(json.winnersList);
        }
    }

    return (
        <div>
            <div className="absolute left-1/2 -translate-x-1/2 top-10">
                <h1 className="text-4xl font-bold text-center text-yellow-600">Congratulations You Win!</h1>
                <h2 className="text-2xl font-bold text-center">Here are the winners:</h2>
            </div>
            <div className="absolute top-1/4 -translate-y-1/4 left-10 space-y-5 place-items-center">
                <InputBuild label="Add Winner" placeholder="Enter the winner's name" type="text" value={winner} setValue={setWinner} className="w-56" />
                <Button text="Add Winner" onClick={() => addWinner(winner)} disabled={false} className="hover:scale-105 transition-all ease-in-out duration-200 text-lg hover:bg-emerald-600"/>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <ul className="text-xl">
                    {winners.map((winner: string, index: number) => {
                        return <li key={index}>{`${index + 1}. ${winner}`}</li>
                    })}
                </ul>
            </div>
        </div> 
    )
}