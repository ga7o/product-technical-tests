import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import boutiqueSchema from '../schemas/boutique';

let BoutiqueSchema = new Schema(boutiqueSchema)

//Setting the index for geospatial queries
BoutiqueSchema.index({ location: "2dsphere" })

export default mongoose.model('Boutiques', BoutiqueSchema);
