const server = require('./server');
const webprod = require('supertest');

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true);
})

describe("Server tests", () => {
  it("[0] server exists and will run", () => {
    expect(server).toBeDefined();
  })
  it("[1] Endpoint GET / returns a server message", async ()=> {
    const res = await webprod(server).get('/');
    const answer = res.body;

    expect(answer).toBeTruthy();
    expect(answer).toMatchObject({ message: 'Welcome to the Jokes server.'});
  })
  it("[2] Attempting to access an undefined endpoint gets a 404", async () => {
    const res = await webprod(server).get('/qwerty');
    const status = res.status;
    const answer = res.body;

    expect(status).toBe(404);
    expect(answer).toMatchObject({ message: "No such endpoint" })
  })
})
