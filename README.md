# Using this to learn some Angular, nothing complex.

Demo: https://electronics-shop-angular.vercel.app/

After creating a few projects with React I wanted to try other JavaScript frameworks. I chose Angular and created this simple app with landing, store, and about pages. Users can filter items by categories and add or remove items from the cart. Overall pretty straightforward app, nothing complex.

So here are some thoughts:

- At first, the file structure and syntax were a bit overwhelming. Every component has 4 files if you use the generate CLI command, which makes it a bit confusing when you want to find something specific. I got used to it later on and got better though. Also made a few components without the generate command and tested writing HTML templates inside .ts files which reduced it to 2 files per component. If I had used Tailwind I could reduce it to one file.

- There are a lot of special characters used everywhere (!, @, $, etc) for declaring components, inputs, variables, and more. @ is used for some declarations, like Components, Inputs, or Outputs. $ is used for observable variables. ! is for TypeScript, I think, it allows you to declare a variable without initializing it,

- Usage of module methods (ngFor, ngIfOf, etc) feels a bit clunky, especially if coupled with NgRx state streams, definitely something to get used it,

- When subscribing to store value in NgRx you don't get an actual value, instead, you receive an observable stream (if I understood correctly) so when you want to render something based on that value you have to pipe it asynchronously first. Value is observable which means that the component will rerender when the value changes.

- For a small application like this it felt pretty similar to React, there are some differences here and there, but in the end, it's the same stuff with different syntax. It probably becomes more interesting with more complex applications, but that's for later :)

- Overall it was fun, something new learned. I'll work on it a bit more and make it look nicer and prettier.

So far what I have learned:

- Creating standalone and reusable components
- Routing
- Looping and conditional rendering
- State management with NgRx
- Filtering data from state
- Store selectors
- Event emitting to parent components
- Simple animations using Angulars animations module

<br>

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
