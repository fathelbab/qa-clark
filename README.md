# clark-coding-challenge
Task:
- Write a small web application that enables a user to answer a questionnaire
- Use the given questionnaire.json to derive the definition of a questionnaire
- Use a modern client side MVC Framework like Ember (highly preferred), GlimmerVM(bleeding edge), or
react (although we prefer ember J )
Goals/Priorities
• Show UX skills, use CSS and possibly animate the transition between questions (high priority)
• At least 1 component test (not auto generated) (high priority)
• Clean code and MVC based application structure (high priority)
• There is no need to store results in a database
• Bonus: The design is responsive
General remarks


## Mind Map
- Load questions json object as a model 
- Start creating the HTML markup 
- Load the data in the markup
- Create styles
- Display one question at a time
- Be able to go through the list of questions back and forth
- Display user answers
- Save the user answer in some sort of state 
- Add animation support
- Add test cases

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd clark-coding-challenge`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


