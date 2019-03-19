export default function boutiqueAdd({models}, req, res, next) {
    let data = req.body

    const Boutique = new models.boutique(data);

    Boutique.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(Boutique);
    });

}
