import mongoose from 'mongoose'
const Schema = mongoose.Schema
const StoreSchema = new Schema({})
export default mongoose.model('test', StoreSchema)
