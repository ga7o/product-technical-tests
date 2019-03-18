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

    it('should return near boutiques', () => {
        return supertest(api)
            .get('/v1/boutiques/near?longitude=0.1887275&latitude=51.3131365&distance=100000&limit=20')
            .expect(200)
            .then(response => {
                expect(response).to.be.ok;
            });
    });
});
