import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | score-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('name', 'Harry');
    this.set('score', 52);

    await render(hbs`{{score-card name=name score=score}}`);

    assert.equal(this.element.querySelector('.card-title').textContent.trim(), 'Harry');
    assert.equal(this.element.querySelector('p').textContent.trim(), 'Score: 52');
  });
});
