import ConnectDB from "@/lib/database/mongo";
import Reservation from "@/lib/models/reservation";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await ConnectDB()
        const reservations = await Reservation.find({}).sort({ createAt: -1 })

        if (!reservations) {
            return NextResponse.json({ success: false, message: "Reservation data not found" }, { status: 400 })
        }

        return NextResponse.json({ success: true, message: 'Successfully fetched reservation data', payload: reservations }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to fetch reservation data', error: error.message }, { status: 500 })

    }

}