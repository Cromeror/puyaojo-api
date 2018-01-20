const assert = require('assert');
const app = require('../../src/app');

describe('\'puestos\' service', () => {
  it('registered the service', () => {
    const service = app.service('puestos');

    assert.ok(service, 'Registered the service');
  });
});
