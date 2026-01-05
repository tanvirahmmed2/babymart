import ConnectDB from "@/lib/database/mongo";
import Product from "@/lib/models/product";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    try {
        await ConnectDB()
        const { category } = await params

        if (!category) {
            return NextResponse.json({
                success: false,
                message: 'id not found'
            }, { status: 400 })
        }

        const products = await Product.find({ category }).sort({createAt:-1})

        if (!products) {
            return NextResponse.json({
                success: false,
                message: 'No product found with this category'
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            message: 'Product data found successfully',
            payload: products
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch data',
            error: error.message
        }, { status: 500 })
    }

}

