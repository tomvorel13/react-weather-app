'use strict';

//JSX - Javascript XML


var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? "Here are your options:" : "No options",
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  ),
  React.createElement(
    'form',
    null,
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      null,
      'Add Option'
    )
  )
);

ReactDOM.render(templateTwo, document.getElementById("app"));
