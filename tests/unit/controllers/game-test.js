import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | game', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    const controller = this.owner.lookup('controller:game');
    const model = [
      {
        name: 'Executor',
        model: 'Executor-class star dreadnought',
        manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
        cost_in_credits: 1143350000,
        length: 19000,
        max_atmosphering_speed: 0,
        crew: 279144,
        passengers: 38000,
        cargo_capacity: 250000000,
        consumables: '6 years',
        hyperdrive_rating: 2,
        MGLT: '40',
        starship_class: 'Star dreadnought',
        pilots: [],
        parsed:  {
          cargo_capacity: 250000000,
          cost_in_credits: 1143350000,
          crew: 279144,
          hyperdrive_rating: 2,
          length: 19000,
          max_atmosphering_speed: 0,
          passengers: 38000,
        },
      },
      {
        name: 'Sentinel-class landing craft',
        model: 'Sentinel-class landing craft',
        manufacturer: 'Sienar Fleet Systems,  Cyngus Spaceworks',
        cost_in_credits: 240000,
        length: 38,
        max_atmosphering_speed: 1000,
        crew: 5,
        passengers: 75,
        cargo_capacity: 180000,
        consumables: '1 month',
        hyperdrive_rating: 1,
        MGLT: '70',
        starship_class: 'landing craft',
        pilots: [],
        parsed:
        {
          cargo_capacity: 180000,
          cost_in_credits: 240000,
          crew: 5,
          hyperdrive_rating: 1,
          length: 38,
          max_atmosphering_speed: 1000,
          passengers: 75,
        },
      },
    ];

    controller.set('model', model);
  });

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:game');

    assert.ok(controller);
  });

  test('should start a new round', function(assert) {
    const controller = this.owner.lookup('controller:game');

    assert.notOk(controller.get('round'));

    controller.send('newGame');

    assert.ok(controller.get('round'));
  });
});
