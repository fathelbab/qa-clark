import Route from '@ember/routing/route';

export default class QuestionRoute extends Route {
  async model() {
    let response = await fetch('/questionnaire.json');
    let { questionnaire } = await response.json();

    return questionnaire.questions;
  }
}
