import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fade from 'ember-animated/transitions/fade';

export default class QuestionController extends Controller {
  // Animation Ref
  transition = fade;

  //Tracked variables
  @tracked index = 0;
  @tracked questions_clone = [];
  @tracked text = '';

  // Getting questions from model
  get questions() {
    this.questions_clone = this.model;
    return this.questions_clone[this.index];
  }
  //Incrementing the index to switch between questions
  @action
  increment() {
    if (this.index < this.model.length - 1) {
      this.index = this.index + 1;
    } else {
      alert('You have reached the end of the questions');
    }
  }
  //decrementing the index to switch between questions
  @action
  decrement() {
    if (this.index !== 0) {
      this.index = this.index - 1;
    }
  }
  // Form handler
  @action
  formHandler(question, event) {
    event.preventDefault();
    const updated_clone = (question.description = this.text);
    this.questions_clone = [...this.questions_clone, updated_clone];
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
    question.description = choice;
    question.choices = updated_clone;
    this.questions_clone = [...this.questions_clone, question];
  }
}
