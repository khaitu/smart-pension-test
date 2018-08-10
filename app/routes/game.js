import Route from '@ember/routing/route';

const ATTRIBUTES = [
  'cargo_capacity',
  'cost_in_credits',
  'crew',
  'hyperdrive_rating',
  'length',
  'max_atmosphering_speed',
  'passengers',
];

export default Route.extend({
  model() {
    return fetch('https://swapi.co/api/starships/')
      .then(response => response.json())
      .then(json => this.parse(json));
  },

  setupController(...args) {
    this._super(...args);

    this.controller.set('attribute', ATTRIBUTES[Math.floor(Math.random() * ATTRIBUTES.length)]);
    this.controller.set('attributes', ATTRIBUTES);
  },

  parse(json) {
    const data = json.results.map(spaceship => {
      const parsed = ATTRIBUTES.reduce((accumulator, attribute) => {
        const value = spaceship[attribute];

        accumulator[attribute] = value !== undefined ? parseInt(value, 10) : 0;

        if (isNaN(accumulator[attribute])) {
          accumulator[attribute] = 0;
        }

        return accumulator;
      }, {});

      Object.assign(spaceship, { parsed }, parsed);

      return spaceship;
    });

    return Promise.resolve(data);
  },
});
