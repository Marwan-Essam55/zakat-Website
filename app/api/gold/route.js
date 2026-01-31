import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("https://egyptgoldprice.com/", {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const html = await response.text();
    const regex = /24.*?(\d{1,2}[,.]?\d{3})/s;
    const match = html.match(regex);

    if (match && match[1]) {
      const cleanPrice = match[1].replace(/[,.]/g, '');
      const priceInt = parseInt(cleanPrice);
      
      if (priceInt > 3000 && priceInt < 9000) {
        return NextResponse.json({ price: cleanPrice });
      }
    }
    
    return NextResponse.json({ error: "Price logic failed" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}