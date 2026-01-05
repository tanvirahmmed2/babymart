import ConnectDB from "@/lib/database/mongo"
import Product from "@/lib/models/product"
import { NextResponse } from "next/server"
import slugify from "slugify"

export async function POST(req) {
    try {
        await ConnectDB()

        const { title, description, price, discount, id, quantity, wholeSalePrice } = await req.json()

        if (!title || !description || !price || !id || quantity === undefined || !wholeSalePrice) {
            return NextResponse.json({
                success: false,
                message: 'Please fill all data'
            }, { status: 400 })
        }

        const newSlug = slugify(title, { strict: true, lower: true })

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                title,
                slug: newSlug,
                description,
                discount,
                price,
                quantity,
                wholeSalePrice,
                isAvailable: quantity > 0 
            },
            { new: true } 
        )

        if (!updatedProduct) {
            return NextResponse.json({
                success: false,
                message: 'Product not found, invalid id'
            }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully updated data',
            payload: updatedProduct
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to update product',
            error: error.message,
        }, { status: 500 })
    }
}