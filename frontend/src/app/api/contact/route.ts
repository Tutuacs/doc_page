import { NextResponse } from "next/server";
import { env } from "process";


// pages/api/submit-form.js
export async function POST(req: Request) {
    
    const data = await req.json();

    const resp = await fetch(env.BACK_URL + '/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (resp.ok) {
        return NextResponse.json({}, { status: 200 });
    }

    return NextResponse.json({ error: 'Temporariamente indisponíveis' }, { status: resp.status });
}