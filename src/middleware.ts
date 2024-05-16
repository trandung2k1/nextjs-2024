import { NextResponse } from 'next/server';
const allowedOrigins =
    process.env.NODE_ENV === 'production' ? ['http://localhost:5173'] : ['http://localhost:5173'];

export function middleware(request: Request, res: Response) {
    const origin = request.headers.get('origin');

    if (origin && !allowedOrigins.includes(origin)) {
        return NextResponse.json({ message: 'Invalid origin' }, { status: 401 });
    }
    const response = NextResponse.next({
        request: {
            ...request,
            headers: request.headers,
        },
    });

    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return response;
}

export const config = {
    matcher: '/api/:path*',
};
