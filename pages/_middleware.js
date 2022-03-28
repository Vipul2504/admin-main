import { NextResponse } from "next/server";

export async function middleware(req) {
    const { accessCookie } = req.cookies

    const url = req.url

    if (url === 'http://localhost:4000/') {
        if (accessCookie) {
            return NextResponse.redirect('http://localhost:4000/dashboard')
        }
    } else {
        if (!accessCookie) {
            return NextResponse.redirect('http://localhost:4000/')
        }
    }
}