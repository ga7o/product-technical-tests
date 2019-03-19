export default function boutiqueUpdate({models}, req, res, next) {

    let boutiqueId = req.params.id
    let data = req.body
    console.log('boutiqueId: ', boutiqueId)
    console.log('Data to update: ', data)

    const Boutique = models.boutique;

    Boutique.findByIdAndUpdate(
        { _id: boutiqueId },
        data,
        {new: true},
        (err,dataUpdated)=>{
            if(err) {
                console.error(err)
                return res.status(500).send({ error: err })
            }
            return res.send(dataUpdated);
        }
    )

}
