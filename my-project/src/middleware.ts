import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Définir les origines autorisées
  const allowedOrigins = [
    "http://localhost:3000", // En développement
    "https://kylian-zamy.dev", // Ton domaine en production
    "https://www.kylian-zamy.dev", // Si tu utilises la version www
  ];

  const origin = req.headers.get('origin');
  
  if (allowedOrigins.includes(origin || '')) {
    const response = NextResponse.next();
    
    // Ajouter les en-têtes CORS
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
