import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | game', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:game');

    assert.ok(route);
  });

  test('should parse playable attributes correctly', function(assert) {
    const route = this.owner.lookup('route:game');
    const json = {
      results: [
        {
          name: 'test',
          hyperdrive_rating: '32',
          max_atmosphering_speed: '48km',
          length: 'blue',
          random: 'something',
        },
      ],
    };

    assert.expect(1);

    route.parse(json).then(data => {
      assert.deepEqual(data, [
        {
          name: 'test',
          hyperdrive_rating: 32,
          max_atmosphering_speed: 48,
          length: 0,
          random: 'something',
          cargo_capacity: 0,
          cost_in_credits: 0,
          crew: 0,
          passengers: 0,
          parsed: {
            hyperdrive_rating: 32,
            max_atmosphering_speed: 48,
            length: 0,
            cargo_capacity: 0,
            cost_in_credits: 0,
            crew: 0,
            passengers: 0,
          }
        }
      ]);
    });
  });
});
