import Controller from '@ember/controller';

export default Controller.extend({
  attributes: null,
  attribute: null,
  round: null,
  scores: null,

  init(...args) {
    this._super(...args);

    this.set('scores', { player1: 0, player2: 0 });
  },

  actions: {
    newGame() {
      const spaceships = this.get('model');
      const attribute = this.get('attribute');
      const scores = this.get('scores');
      const selected = [];

      selected[0] = spaceships[Math.floor(Math.random() * spaceships.length)];

      do {
        selected[1] = spaceships[Math.floor(Math.random() * spaceships.length)];
      } while (selected[1] === selected[0]);

      const round = {
        player1: {
          title: selected[0].name,
          attributes: selected[0].parsed,
          isWinner: selected[0][attribute] >= selected[1][attribute],
        },
        player2: {
          title: selected[1].name,
          attributes: selected[1].parsed,
          isWinner: selected[1][attribute] >= selected[0][attribute],
        }
      }

      if (selected[0][attribute] >= selected[1][attribute]) {
        this.set('scores.player1', scores.player1 + 1);
      }

      if (selected[1][attribute] >= selected[0][attribute]) {
        this.set('scores.player2', scores.player2 + 1);
      }

      this.set('round', round);
      this.set('scores', scores);
    }
  }
});
