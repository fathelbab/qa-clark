import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fade from 'ember-animated/transitions/fade';
import _ from 'lodash';

export default class QuestionController extends Controller {
  transition = fade;

  @tracked index = 0;
  @tracked questions_clone = [];
  @tracked text = '';

  get questions() {
    // const ques = this.model[this.index];
    this.questions_clone = this.model;
    console.log('clone', this.questions_clone);

    return this.questions_clone[this.index];
  }
  @action
  increment() {
    if (this.index < this.model.length - 1) {
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
  @action
  formHandler(question, event) {
    event.preventDefault();
    console.log('form', question);
    const updated_clone = (question.description = this.text);
    this.questions_clone = [...this.questions_clone, updated_clone];
    console.log('after edit', this.questions_clone);
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }
  @action
  onRadioButtonChange(question, choice) {
    const updated_clone = question.choices.map((c) => {
      if (c.value === choice) {
        return { ...c, selected: true };
      } else {
        return { ...c, selected: false };
      }
    });
    const final = (question.choices = updated_clone);
    console.log('map', final);

    console.log('after edit', this.questions_clone);
  }
}
