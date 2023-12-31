# Using this to learn some Angular, nothing complex.

So far I have learned (kinda):

- creating standalone components
- routing
- looping and conditional rendering
- state management with ngRx
- adding/remove items to/from state cart

Thoughts <s>(and prayers)</s>:
Coming from React initially Angular is quite overwhelming.

A lot more files (4 per component with generate componenct via CLI) which gets a bit confusing.

Syntax and ng methods aren't very intuitive at first, lots of special symbols (@, !, $, etc.) used everywhere.

When subcribing to store value in ngRx you don't get an actual value, instead you receive a stream (if i understood correctly) so when you want to render something based on that value
you have to pipe (?) it asynchronously first.

<br><br><br><br>

# ElectronicsShopAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
