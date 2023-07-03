import { NextResponse } from 'next/server';
import stories from './dummyData.json';

export async function GET(request) {
  return NextResponse.json(stories);
}
