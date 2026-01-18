import ConnectDB from "@/lib/database/mongo";
import Category from "@/lib/models/category";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        await ConnectDB()

        const { title } = await req.json()
        if (!title) {
            return NextResponse.json({
                success: false, message: 'Please add category title'
            }, { status: 400 })
        }
        const category = await Category.findOne({ title })
        if (category) {
            return NextResponse.json({
                success: false, message: 'Category aleady exists'
            }, { status: 400 })
        }

        const newCat = new Category({ title })

        await newCat.save()
        return NextResponse.json({
            success: true, message: 'Successfully added new category'
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}

export async function GET() {
    try {
        await ConnectDB()
        const categories = await Category.find().sort({ createdAt: -1 })
        if (!categories || categories.length<1) {
            return NextResponse.json({
                success: false, message: 'No category data found'
            }, { status: 400 })
        }
        return NextResponse.json({
            success: true, message: 'Successfully fetched data', payload: categories
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}


export async function DELETE(req) {
    try {
        await ConnectDB()

        const { id } = await req.json()
        if (!id) {
            return NextResponse.json({
                success: false, message: 'Id not found'
            }, { status: 400 })
        }

        const category = await Category.findById(id)
        if (!category) {
            return NextResponse.json({
                success: false, message: 'category not found'
            }, { status: 400 })
        }
        await Category.findByIdAndDelete(id)
        return NextResponse.json({
            success: true, message: 'Successfully deleted category'
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false, message: error.message
        }, { status: 500 })

    }

}