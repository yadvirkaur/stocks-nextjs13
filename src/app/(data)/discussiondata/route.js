import { NextResponse } from 'next/server';
import cards from './dummyData.json';

export async function GET(request) {
  return NextResponse.json(cards);
}
