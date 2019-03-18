import supertest from 'supertest';
import {expect} from 'chai';
import boot from '../../../../src/boot';
import {before} from "ava";

describe('Integration tests > httpApi > v1 > boutiques', function(){

    let api;

    before(() => {
        return boot({})
            .then(outputs => {
                api = outputs.api;
            });
    });

    it('should return boutiques', () => {
        return supertest(api)
            .get('/v1/boutiques')
            .expect(200)
            .then(response => {
                expect(response).to.be.ok;
            });
    });

    it('should return the near boutiques', () => {
        return supertest(api)
            .get('/v1/boutiques/near?longitude=0.1887275&latitude=51.3131365&distance=100000&limit=20')
            .expect(200)
            .then(response => {
                expect(response).to.be.ok;
            });
    });

    it('should return the selected boutique', () => {
        return supertest(api)
            .get('/v1/boutiques/52386303c45fb50200000030')
            .expect(200)
            .then(response => {
                expect(response).to.be.ok;
            });
    });

    it('should return a created boutique', () => {
        return supertest(api)
            .post('/v1/boutiques')
            .send({
                "location":
                    {
                        "lat":51.5221254,"lon":-0.119149
                    },
                "description":"Volte Face seeks out design-led gifts, stand-out stationery, artists’ products and books. The emphasis is on interesting objects for everyday use infused with creative thought and some things we think are just fun!",
                "name":"Volte Face",
                "founder_quote":"Wsdasdaea aim to satisfy a range of tastes and stock main brands alongside products from small independent designers and ce Face aims to be contemporary, eclectic, eccentric and exciting!",
                "logo":
                    {
                        "url":"https://res.cloudinary.com/streethub/image/upload/v1427472586/brand/530df3df6aa9530000000641/x9TOY4QNCrLKxAIpkUwb.jpg"
                    },
                "slug":"volte-face-in-wc1n3jb",
                "google_places_id": "EisxMyBNYXJrZXQgU3RyZWV0LCBXaWxtaW5ndG9uLCBOQyAyODQwMSwgVVNB"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response).to.be.ok;
            });
    });


    it('should return the updated boutique', () => {
        return supertest(api)
            .put('/v1/boutiques/5c8c49010f7c3502d449beb4')
            .send({
                "google_places_id": "EisxMyBNYXJrZXQgU3RyZWV0LCBXaWxtaW5ndG9uLCBOQyAyODQwMSwgVVNB"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response).to.be.ok;
            });
    });
});
