const assert = require('assert');
const app = require('../../src/app');

describe('\'personas\' service', () => {
  it('registered the service', () => {
    const service = app.service('personas');

    assert.ok(service, 'Registered the service');
  });
});
