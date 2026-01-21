'use client'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Context } from '../helper/Context'




const AddProduct = () => {
    const { categories, fetchCategory } = useContext(Context)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        unit: '',
        category: '',
        image: null,
        wholeSalePrice: '',
        quantity: '',


    })

    const [categoryData, setCategoryData] = useState({
        title: '',
        image: null
    })
    const addNewCategory = async (e) => {
        e.preventDefault()
        try {
            const newData = new FormData()
            newData.append('title', categoryData.title)
            newData.append('imageFile', categoryData.image)
            const response = await axios.post('/api/category', newData, { withCredentials: true })
            toast.success(response.data.message)
            fetchCategory()
            setCategoryData({
                title: '',
                image: null
            })
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || 'Failed to perform action')
        }
    }


    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (files) {
            setFormData({ ...formData, image: files[0] })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleChangeCategory = (e) => {
        const { name, value, files } = e.target
        if (files) {
            setCategoryData({ ...categoryData, image: files[0] })
        } else {
            setCategoryData({ ...categoryData, [name]: value })
        }
    }

    const addNewProduct = async (e) => {
        e.preventDefault()
        try {
            const newData = new FormData()
            newData.append('title', formData.title)
            newData.append('description', formData.description)
            newData.append('price', formData.price)
            newData.append('category', formData.category)
            newData.append('image', formData.image)
            newData.append('unit', formData.unit)
            newData.append('wholeSalePrice', formData.wholeSalePrice)
            newData.append('quantity', formData.quantity)

            const response = await axios.post('/api/product', newData, { withCredentials: true })
            toast.success(response.data.message)
            setFormData({
                title: '',
                description: '',
                price: '',
                unit: '',
                category: '',
                image: null,
                wholeSalePrice: '',
                quantity: '',

            })

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || 'Failed to add product')
        }

    }



    return (
        <div className='w-full flex flex-col gap-8 px-4'>
            <form onSubmit={addNewProduct} className='w-full flex flex-col items-center justify-center gap-4 border-b-2 border-black/10 py-4'>
                <h1 className='text-xl font-semibold'>Add New Product</h1>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' required value={formData.title} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' id='description' required value={formData.description} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>


                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" required value={formData.category} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm'>
                            <option value="">--Select--</option>
                            {categories && categories.map((cat) => (
                                <option value={cat.title} key={cat._id}>{cat.title}</option>
                            ))}
                        </select>
                    </div>

                </div>


                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="unit">Unit</label>
                    <input type="text" name='unit' id='unit' required value={formData.unit} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="price">Price</label>
                    <input type="number" name='price' id='price' min={0} required value={formData.price} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="wholeSalePrice">Whole Sale Price</label>
                    <input type="number" name='wholeSalePrice' id='wholeSalePrice' min={0} required value={formData.wholeSalePrice} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name='quantity' id='quantity' min={0} required value={formData.quantity} onChange={handleChange} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="image">Image</label>
                    <input type="file" accept='image/*' required name='image' onChange={handleChange} id='image' className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />
                </div>
                <button type='submit' className='bg-pink-400 text-white p-1 px-4 rounded-lg shadow-sm cursor-pointer'>Submit</button>

            </form>

            <form onSubmit={addNewCategory} className='w-full flex flex-col items-center justify-center gap-4 border-b-2 border-black/10 py-4'>
                <label htmlFor="category">New Category</label>
                <div className='w-full flex flex-row items-center justify-between gap-4'>
                    <label htmlFor="title">Title</label>
                    <input type="text" required value={categoryData.title} id='title' name='title' onChange={handleChangeCategory} className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />

                </div>
                <div className='w-full flex flex-row items-center justify-between gap-4'>
                    <label htmlFor="image">Image</label>
                    <input type="file" accept='image/**' required onChange={handleChangeCategory} id='image' name='image'  className='w-full p-1 px-3 outline-none border-2 border-black/10 rounded-lg shadow-sm' />

                </div>
                <button type='submit' className='px-4 p-1 bg-pink-400 text-center rounded-lg hover:scale-[1.02] transform ease-in-out duration-500 cursor-pointer text-white'>Submit</button>
            </form>

        </div>
    )
}

export default AddProduct
