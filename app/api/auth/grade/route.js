import { db } from '@/utils/db';  // Import your db connection
import { GRADES } from '@/utils/schema';  // Import the table schema
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Fetch data from the GRADES table
    const result = await db.select().from(GRADES);

    // Return the result as JSON response
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching grades:', error);
    return NextResponse.json({ error: 'Unable to fetch grades' }, { status: 500 });
  }
}
