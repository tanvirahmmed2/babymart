import ConnectDB from "@/lib/database/mongo";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        await ConnectDB()
        
    } catch (error) {
        return NextResponse.json({
            success: false,
            message:'Failed to update order',
            error: error.message
        }, {status:500})
        
    }
    
}