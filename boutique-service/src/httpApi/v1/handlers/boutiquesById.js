export default function boutiquesById({models}, req, res, next) {
    let boutiqueId = req.params.id

    const Boutique = models.boutique;
    Boutique.findOne({ _id:boutiqueId })
        .then(boutiques => {
            res.send(boutiques);
        })
        .catch(next);
}
