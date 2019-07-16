const express = require('express');
const request = require('supertest');

describe('Express server', () => {

  test('Respond to a valid GET request to /api/menu/1', async () => {
    const response = await request('http://localhost:3000/1').get('/api/menu/1');
    expect(response.statusCode).toBe(202);
  });

  test('Respond to a valid GET request to /api/menu/59', async () => {
    const response = await request('http://localhost:3000/59').get('/api/menu/59');
    expect(response.statusCode).toBe(202);
  });

  test('should NOT respond to a valid GET request to /api/menu/200', async () => {
    const response = await request('http://localhost:3000/200').get('/api/menu/200');
    expect(response.statusCode).toBe(404);
  });

});
