// app/api/history/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { aiOutput } from '@/utils/schema';

export async function GET() {
    try {
        const results = await db.select().from(aiOutput);

        console.log('Fetched Results:', results); // Log the results

        return NextResponse.json({ success: true, data: results });
    } catch (error) {
        console.error('Error fetching history:', error);
        return NextResponse.json({ success: false, message: 'Error fetching history' });
    }
}
