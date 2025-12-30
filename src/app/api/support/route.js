import ConnectDB from "@/lib/database/mongo";
import Support from "@/lib/models/support";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await ConnectDB()

        const supports = await Support.find({}).sort({ createdAt: -1 })
        if (!supports) {
            return NextResponse.json({ success: false, message: "Support data not found" }, { status: 400 })
        }
        return NextResponse.json({ success: true, message: 'Successfully fetched support data', payload: supports }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: ' Failed to fetch support data', error: error.message }, { status: 500 })

    }

}