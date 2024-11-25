import { cookies } from "next/headers";

const names: string[] = [];

export async function PUT(req: Request) {
    if ((await cookies()).get("jwt")?.value === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGVFbmQiOiIvd2VsbGRvbmUvb18wIn0.c4okqanx5O6O9BG0y9rYVpx5GTJ8CPyK-BQhK6wFFHU") {
        names.push((await req.json()).name);
        return Response.json({ status: 200, winnersList: names });
    }
    else
        return Response.json({ status: 405, error: "You are not authorized to access this route" });
}

export async function GET() {
    return Response.json({ status: 200, winnersList: names });
}