import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Définir les origines autorisées
  const allowedOrigins = [
    "http://localhost:3000",
    "https://kylian-zamy.dev", 
    "https://www.kylian-zamy.dev", 
  ];

  const origin = req.headers.get('origin');
  
  if (allowedOrigins.includes(origin || '')) {
    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', origin || '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  }
  
  // Si la méthode est OPTIONS, répond directement avec un statut 200
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200 });
  }

  // Retourner la réponse
  return NextResponse.next();
}
