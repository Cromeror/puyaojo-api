const assert = require('assert');
const app = require('../../src/app');

describe('\'votantes\' service', () => {
  it('registered the service', () => {
    const service = app.service('votantes');

    assert.ok(service, 'Registered the service');
  });
});
