const supertest = require('supertest');
const chai = require('chai');
const app = require('../src');

const { expect } = chai;

describe('POST /reminders', () => {
  it(`Teste 1`, async () => {
    const res = await supertest(app)
      .post('/reminders')
      .send({ name: 'Lembrete 1', date: '2024-09-10' });

    expect(res.status).to.equal(201);
    expect(res.body[0]).to.have.property('date', '10/09/2024');
    expect(res.body[0].reminders[0]).to.have.property('name', 'Lembrete 1');
  });
});

describe('POST /reminders', () => {
  it(`Teste 2`, async () => {
      const res = await supertest(app)
      .post('/reminders')
      .send({ name: 'Lembrete 2', date: '2024-09-10' });

    expect(res.status).to.equal(201);
    expect(res.body[0]).to.have.property('date', '10/09/2024');
    expect(res.body[0].reminders[0]).to.have.property('name', 'Lembrete 1');
    expect(res.body[0].reminders[1]).to.have.property('name', 'Lembrete 2');
  });
});

describe('POST /reminders', () => {
  it(`Teste 3`, async () => {
      const res = await supertest(app)
      .post('/reminders')
      .send({ name: 'Lembrete 3', date: '2024-09-20' });

    expect(res.status).to.equal(201);
    expect(res.body[0]).to.have.property('date', '20/09/2024');
    expect(res.body[0].reminders[0]).to.have.property('name', 'Lembrete 3');
  });
});

describe('DELETE /reminders', () => {
  it(`Teste 4`, async () => {
      const res = await supertest(app)
      .delete('/reminders/3/day/20240920');

    expect(res.status).to.equal(204);
  });
});

describe('GET /reminders', () => {
  it(`Teste 5`, async () => {
      const res = await supertest(app)
      .get('/reminders');

    expect(res.status).to.equal(200);
  });
});
