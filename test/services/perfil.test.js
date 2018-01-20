const assert = require('assert');
const app = require('../../src/app');

describe('\'perfil\' service', () => {
  it('registered the service', () => {
    const service = app.service('perfil');

    assert.ok(service, 'Registered the service');
  });
});
