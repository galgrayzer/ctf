"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import BlankCard from "../(components)/card/BlankCard";
import InputField from "../(components)/input/InputField";
import Button from "../(components)/input/Button";

import { Alert } from "@mui/material";


export default function AccountPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async () => {
        const req = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const json = await req.json();
        if (json.status === 300) {
            router.push(json.location);
        }
        else {
            setError(json.error);
        }
    }

    return (
        <div>
            {error !== "" && <Alert severity="error" variant="filled" className="fixed left-1/2 -translate-x-1/2 w-100">{error}</Alert>}
            <BlankCard width="md:w-3/12 w-4/5" height="h-2/3">
                <div className="relative top-10">
                    <h1 className="fixed left-1/2 -translate-x-1/2 text-2xl text-center font-bold">Login</h1>
                    <div className="relative top-14 space-y-24">
                        <InputField className="fixed w-3/4 left-1/2 -translate-x-1/2" 
                        label="Username" placeholder="Enter your username" type="text" value={username} setValue={setUsername} />
                        <InputField className="fixed w-3/4 left-1/2 -translate-x-1/2" 
                        label="Password" placeholder="Enter your password" type="password" value={password} setValue={setPassword} />
                    </div>
                    <div className="relative top-60">
                        <Button text="Login" onClick={() => handleSignIn()} disabled={false} className="fixed w-3/4 left-1/2 -translate-x-1/2 hover:scale-105 
                        transition-all ease-in-out duration-200 text-lg hover:bg-emerald-600"/>
                    </div>
                </div>
            </BlankCard>
        </div>
    );
}