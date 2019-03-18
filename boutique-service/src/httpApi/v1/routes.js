export default function attachRoutes({ models, router, handlers }) {
    /**
     * @api {get} /v1/boutiques Return a list of all boutiques
     * @apiName BoutiqueList
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Returns the complete list of boutiques
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "location": {
     *         "lon": -0.0757307,
     *         "lat": 51.52338109999999
     *       },
     *       "_id": "5234d2b244e937489c00011c",
     *       "logo": {
     *         "url": "https://res.cloudinary.com/streethub/image/upload/brand/530df3dc6aa953000000014d/nqHF2T7qTjsKq8lE3ugn"
     *       },
     *       "founder_quote": "\"Our mission at Maiden is simple: to make fun, quality gifts accessible to everyone.\"",
     *       "description": "First established in 2009 by Noah Crutchfield, Maiden has become a legendary fixture in Shoreditch's creative independent community. Noah's empire has since expanded to two wonderful shops at Boxpark Shoreditch; THE GIFT BOX & THE PLAY BOX both stocking the different and ever updated bright, eclectic range of gifts that Maiden has become renowned for. A destination for those seeking an original gift, Maiden also plays host to design-led homewares with a humorous twist. ",
     *       "slug": "maiden-in-e16hu",
     *       "name": "MAIDEN",
     *       "google_places_id": "52338109999999"
     *     }]
     *
     */
    router.get('/boutiques', handlers.boutiques.bind(undefined, {models}));

    /**
     * @api {get} /v1/boutiques/near Return the boutiques closest to provided coordinates
     * @apiName BoutiquesNear
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Return the boutiques closest to provided coordinates
     *
     * @apiParam {Number} latitude      Latitude component of coordinate
     * @apiParam {Number} longitude     Longitude component of coordinate
     * @apiParam {Number} distance      Maximum distance in meters from the latlon to search
     * @apiParam {Number} limit         Number of boutiques to return
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "boutique_id": "5234d2b244e937489c00011c",
     *       "distance": 370
     *     }]
     *
     */
    router.get('/boutiques/near', handlers.boutiquesNear.bind(undefined, {models}));




    /**
     * @api {get} /v1/boutiques/:id Return the boutique of a given ID
     * @apiName BoutiqueList
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Return the boutique of a given ID
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "location": {
     *         "lon": -0.0757307,
     *         "lat": 51.52338109999999
     *       },
     *       "_id": "5234d2b244e937489c00011c",
     *       "logo": {
     *         "url": "https://res.cloudinary.com/streethub/image/upload/brand/530df3dc6aa953000000014d/nqHF2T7qTjsKq8lE3ugn"
     *       },
     *       "founder_quote": "\"Our mission at Maiden is simple: to make fun, quality gifts accessible to everyone.\"",
     *       "description": "First established in 2009 by Noah Crutchfield, Maiden has become a legendary fixture in Shoreditch's creative independent community. Noah's empire has since expanded to two wonderful shops at Boxpark Shoreditch; THE GIFT BOX & THE PLAY BOX both stocking the different and ever updated bright, eclectic range of gifts that Maiden has become renowned for. A destination for those seeking an original gift, Maiden also plays host to design-led homewares with a humorous twist. ",
     *       "slug": "maiden-in-e16hu",
     *       "name": "MAIDEN",
     *       "google_places_id": "52338109999999"
     *     }
     *
     */
    router.get('/boutiques/:id', handlers.boutiquesById.bind(undefined, {models}));


    /**
     * @api {post} /v1/boutiques/ Return the created boutique
     * @apiName BoutiqueList
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Return the created boutique
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "location": {
     *         "lon": -0.0757307,
     *         "lat": 51.52338109999999
     *       },
     *       "_id": "5234d2b244e937489c00011c",
     *       "logo": {
     *         "url": "https://res.cloudinary.com/streethub/image/upload/brand/530df3dc6aa953000000014d/nqHF2T7qTjsKq8lE3ugn"
     *       },
     *       "founder_quote": "\"Our mission at Maiden is simple: to make fun, quality gifts accessible to everyone.\"",
     *       "description": "First established in 2009 by Noah Crutchfield, Maiden has become a legendary fixture in Shoreditch's creative independent community. Noah's empire has since expanded to two wonderful shops at Boxpark Shoreditch; THE GIFT BOX & THE PLAY BOX both stocking the different and ever updated bright, eclectic range of gifts that Maiden has become renowned for. A destination for those seeking an original gift, Maiden also plays host to design-led homewares with a humorous twist. ",
     *       "slug": "maiden-in-e16hu",
     *       "name": "MAIDEN",
     *       "google_places_id": "52338109999999"
     *     }
     *
     */
    router.post('/boutiques', handlers.boutiqueAdd.bind(undefined, {models}));


    /**
     * @api {put} /v1/boutiques/:id Return the updated boutique
     * @apiName BoutiqueList
     * @apiGroup Boutiques
     * @apiVersion 1.0.0
     *
     * @apiDescription Return the updated boutique
     *
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "location": {
     *         "lon": -0.0757307,
     *         "lat": 51.52338109999999
     *       },
     *       "_id": "5234d2b244e937489c00011c",
     *       "logo": {
     *         "url": "https://res.cloudinary.com/streethub/image/upload/brand/530df3dc6aa953000000014d/nqHF2T7qTjsKq8lE3ugn"
     *       },
     *       "founder_quote": "\"Our mission at Maiden is simple: to make fun, quality gifts accessible to everyone.\"",
     *       "description": "First established in 2009 by Noah Crutchfield, Maiden has become a legendary fixture in Shoreditch's creative independent community. Noah's empire has since expanded to two wonderful shops at Boxpark Shoreditch; THE GIFT BOX & THE PLAY BOX both stocking the different and ever updated bright, eclectic range of gifts that Maiden has become renowned for. A destination for those seeking an original gift, Maiden also plays host to design-led homewares with a humorous twist. ",
     *       "slug": "maiden-in-e16hu",
     *       "name": "MAIDEN",
     *       "google_places_id": "52338109999999"
     *     }
     *
     */
    router.put('/boutiques/:id', handlers.boutiqueAdd.bind(undefined, {models}));

}
