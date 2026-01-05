import ConnectDB from "@/lib/database/mongo";

import Product from "@/lib/models/product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectDB()

        const products = await Product.find({ isFeatured: true }).sort({ createdAt: -1 })

        if (!products) {
            return NextResponse.json({ success: false, message: 'No product data found' }, { status: 400 })

        }

        return NextResponse.json({ success: true, message: 'Successfully fetched data', payload: products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to fetch data', error: error.message }, { status: 500 })

    }

}

export async function POST(req) {
    try {
        await ConnectDB();

        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ success: false, message: 'Id not received' }, { status: 400 });
        }

        const product = await Product.findById(id);

        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        const newStatus = !product.isFeatured;
        
        await Product.findByIdAndUpdate(id, { isFeatured: newStatus });

        return NextResponse.json({
            success: true,
            message: newStatus ? 'Added to featured' : 'Removed from featured'
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ 
            success: false, 
            message: 'Failed to update featured status', 
            error: error.message 
        }, { status: 500 });
    }
}