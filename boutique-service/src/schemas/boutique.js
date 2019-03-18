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
    // These IDs often take the form of a long string. Example:
    // ElMxNjIsIExhbmUgTnVtYmVyIDcsIEJsb2NrIEgsIE5lYiBTYXJhaSwgU2FpbmlrIEZhcm0sIE5ldyBEZWxoaSwgRGVsaGkgMTEwMDYyLCBJbmRpYQ
    // More infor: https://developers.google.com/places/place-id

    google_places_id: {
        type: Schema.Types.String,
        default: "-1"
    }
}
