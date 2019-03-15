import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import boutiqueSchema from '../schemas/boutique';

let BoutiqueSchema = new Schema(boutiqueSchema,
    {
        versionKey: false // You should be aware of the outcome after set to false
    })

//Setting the index for geospatial queries
BoutiqueSchema.index({ location: "2dsphere" })

export default mongoose.model('Boutiques', BoutiqueSchema);
