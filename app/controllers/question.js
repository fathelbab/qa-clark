import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fade from 'ember-animated/transitions/fade';

export default class QuestionController extends Controller {
  transition = fade;

  @tracked index = 0;
  get questions() {
    const ques = this.model[this.index];
    console.log(ques);
    return ques;
  }
  @action
  increment() {
    if (this.index <= this.model.length) {
      this.index = this.index + 1;
    } else {
      alert('You have reached the end of the questions');
    }
  }
  @action
  decrement() {
    if (this.index !== 0) {
      this.index = this.index - 1;
    }
  }
}
