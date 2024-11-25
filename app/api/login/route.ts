import { cookies } from "next/headers";


export async function POST(req: Request) {
    const { username, password } = await req.json();
    
    if (!username || !password) {
        return Response.json({ status: 405, error: "Username or password is missing" });
    }

    if (username === "manahama" && password === "Password1") {
        (await cookies()).set("jwt", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGVFbmQiOiIvd2VsbGRvbmUvb18wIn0.c4okqanx5O6O9BG0y9rYVpx5GTJ8CPyK-BQhK6wFFHU")
        return Response.json({ status: 300, location: "/"});
    }

    return Response.json({ status: 405, error: "Incorrect username or password" });
}