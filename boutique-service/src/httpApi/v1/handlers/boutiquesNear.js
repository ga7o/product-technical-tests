export default function boutiques({models}, req, res, next) {
    let long = parseFloat(req.query.longitude)
    let latt = parseFloat(req.query.latitude)
    let limit = parseInt(req.query.limit) || 1
    let maxDistance = parseInt(req.query.distance) || 1000

    if(!long || !latt) {
        console.error('longitude and latitude should be a floating number')
        return res.status(500).send({ error: 'longitude and latitude should be a floating number' })
    }

    const Boutique = models.boutique;

    Boutique.aggregate(
        [
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [ long , latt]
                    },
                    distanceField: "distance",
                    maxDistance: maxDistance,
                    num: limit,
                    spherical: true
                }
            },
            {
                $project: {
                    _id: 0,
                    "boutique_id" : "$_id",
                    //name: 1,
                    //location:1,
                    distance: 1
                }
            }
        ],(err,data)=>{
            if(err) {
                console.error(err)
                return res.status(500).send({ error: err })
            }
            return res.send(data);
        })
}
