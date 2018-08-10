import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | trump-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('title', 'X-Fighter');
    this.set('attributes', {
      awesomeness: 52,
      boringness: 2,
    });
    this.set('isWinner', true);

    await render(hbs`{{trump-card title=title attributes=attributes isWinner=isWinner}}`);

    const titleTexts = this.element
      .querySelector('.card-title')
      .textContent
      .trim()
      .replace(/[\s\n]+/g, ' ')
      .split(' ');

    assert.equal(
      titleTexts[0],
      'X-Fighter'
    );

    assert.equal(
      titleTexts[1],
      'Winner'
    );

    assert.equal(this.element.querySelectorAll('p').length, 2);
  });
});
