import mongoose from 'mongoose'

const newSchema= new mongoose.Schema({
    title:{type:String, required:true, unique:true, trim: true},
    createdAt:{type:Date, default:Date.now}
})

const Category= mongoose.models.categories || mongoose.model('categories', newSchema)


export default Category