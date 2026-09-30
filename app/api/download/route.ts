import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { error: 'This page is currently unavailable.' },
    { status: 404 }
  );
}