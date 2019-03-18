import {Schema} from 'mongoose';

export default {
    name: Schema.Types.String,
    slug: Schema.Types.String,
    location: {
      lon: Schema.Types.Number,
      lat: Schema.Types.Number
    },
    description: Schema.Types.String,

    founder_quote: Schema.Types.String,

    logo: {
        url: Schema.Types.String
    },

    // Adding the Google Place ID field
    google_places_id: {
        type: Schema.Types.Number,
        default: -1
    }
}
