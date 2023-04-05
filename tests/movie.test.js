const request = require('supertest');
const app = require('../app');

describe('Movie routes', () => {
    describe('GET /api/v1/movies', () => {
        test('Should return all movies', async() => {
            const res = await request(app)
                  .get('/api/v1/movies')
                  .send()
                  .expect(200)

            expect(res.status).toEqual(200);    
        });
    });

    describe('GET /api/v1/movies/:id',  () => {
        test('Should return a single movie', async () => {
           
            const res = await request(app)
            .get(`/api/v1/movies/4`)
            .send()
            .expect(200)

            expect(res.status).toEqual(200);  
        })
    })
})