import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | question', function (hooks) {
  setupTest(hooks);

  test('index initial value', function (assert) {
    let controller = this.owner.lookup('controller:question');
    assert.equal(controller.index, 0);
  });

  test('text', function (assert) {
    let controller = this.owner.lookup('controller:question');
    assert.equal(controller.text, '');
  });

  test('decrement', function (assert) {
    let controller = this.owner.lookup('controller:question');
    controller.decrement();
    assert.equal(controller.index, 0);
  });
});
