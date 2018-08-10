import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-attribute', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', 'some_underscored_name');

    await render(hbs`{{format-attribute inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Some Underscored Name');
  });
});
