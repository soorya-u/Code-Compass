# Angular Reference

## Introduction

Angular is an open-source, JavaScript framework written in TypeScript and its primary purpose is to develop Single-Page Application. As a framework, Angular has clear Advantages while also providing a Standard Structure for developers to work with.

### Contents

1. [Angular CLI](#angular-cli)

   - [Installation](#installation---command)

   - [Creating Angular Project](#creating-an-angular-project---command)

   - [Creating a Component](#creating-a-component---command)

   - [Creating a Service](#creating-a-service---command)

   - [Creating a Directive](#creating-a-directive---command)

   - [Creating a Pipe](#creating-a-pipe---command)

2. [Structure of Angular Project](#structure-of-angular-project)

   - [Basic Files](#basic-files)

   - [_angular.json_](#angularjson)

   - [_app.module.ts_](#appmodulets)

3. [Components](#components)

   - [Creating a Component](#creating-a-component)

   - [Component File Structure](#component-file-structure)

   - [Script within Template](#script-within-template)

4. [Directives](#directives)

   - [ngStyle Directive](#ngstyle-directive)

   - [ngClass Directive](#ngclass-directive)

   - [ngIf Directive](#ngif-directive)

   - [ngSwitch Directive](#ngswitch-directive)

   - [ngFor Directive](#ngfor-directive)

5. [Communication between Relational Components](#communication-between-relational-components)

   - [Input Decorator](#input-decorator)

   - [Output Decorator](#output-decorator)

   - [ViewChild Decorator](#viewchild-decorator)

6. [Service](#service)

   - [Creating a Service](#creating-a-service)

   - [Service Files](#service-file)

7. [Routing](#routing)

   - [Rouer Outlet Element](#router-outlet-element)

   - [Adding Paths](#adding-paths)

   - [Router Link Directive](#router-link-directive)

   - [Child Routes](#child-routes)

   - [Routing using Router Class](#routing-using-router-class)

8. [Extras](#extras)

   - [Styling](#styling)

9. [References](#references)

---

## Angular CLI

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.

### Installation - Command

Angular CLI can be installed using `npm`.

```bash
npm install -g @angular/cli
```

### Creating an Angular Project - Command

A new [Angular Project](#structure-of-angular-project) can be created using `new` command.

```bash
ng new project_name
```

#### Creating a Component - Command

A [Component](#components) can be Created using the `generate` Command.

```bash
ng generate component directory/component_name
```

```bash
ng g c directory/component_name
```

#### Creating a Service - Command

A [Service](#service) can be Created using the `generate` Command.

```bash
ng generate service directory/service_name
```

```bash
ng g s directory/service_name
```

#### Creating a Directive - Command

A [Directive](#directives) can be Created using the `generate` Command.

```bash
ng generate directive directory/directive_name
```

```bash
ng g d directory/directive_name
```

#### Creating a Pipe - Command

A Pipe can be Created using the `generate` Command.

```bash
ng generate pipe directory/pipe_name
```

```bash
ng g p directory/pipe_name
```

### Building an Angular Project - Command

An Angular Project can be built for Production using `build` command.

```bash
ng build --configuration="production" --base-href "https://base_url.com/"
```

---

## Structure of Angular Project

The Main Files and Directories in Angular Project are:

```tree
project
  ├── src
  │    ├── app
  │    │    │
  │    │    ├── app-routing.module.ts
  │    │    ├── app.component.html
  │    │    ├── app.component.css
  │    │    ├── app.component.ts
  │    │    └── app.module.ts
  │    │
  │    ├── assets
  │    │
  │    ├── index.html
  │    ├── styles.css
  │    └── main.ts
  │
  └── angular.json
```

### Basic Files

- _src_ : It is a Directory that contains All the Source Files.

  - _app_ : It Contains All the Components and Services required by the Webpage. It also contains The Routing Modules.

  - _assets_ : The Directory which contains the Assets which are Publicly Accessable.

  - _index.html_ : The Starting HTML File.

  - _styles.css_ : The CSS File which is Globally Applicable to all Components.

  - _main.ts_ : The Global Typescript File.

### _angular.json_

This JSON Files contains necessary Information about our Project. The Path of External Styles, Scripts Files and Assets must be Added here.

The Path of External Styles and Scripts are Added in the Given Snippet below:

```json
{
  "projects": {
    "project_name": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              "src/assets"
              // External Assets Path
            ],
            "styles": [
              "src/styles.css"
              // External Styles Path
            ],
            "scripts": [
              // External Scripts Path
            ]
          }
        }
      }
    }
  }
}
```

### _app.module.ts_

_app.module.ts_ is the Root of the Application and any module registered at the Root will be Made Available to the Entire Application. It contains all the Imported Modules as well as the Declared Components within the Project.

_Example:_

```ts
// Imported Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Declared Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({

  // Specifying Declared Components
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent
  ],

  // Specifying Imported Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
})
```

---

## Components

Components are Sub-divisions of Code which can be Rendered whenever Desired.

Each Components has its own Style Sheet and Scripts.

### Creating a Component

A Component can be Created using Angular CLI.

```bash
ng generate component components/header
```

All the Components are Created within _app_ Directory. So the _components_ is a Directory created within the _app_ Directory.

### Component File Structure

The Files Structure of a Component is as Follows:

```tree
components
    │
    └── header (component_name)
          │
          ├── header.component.html
          ├── header.component.css
          └── header.component.ts
```

The HTML and CSS Files are the Same as Usual.

The Template of TypeScript File is:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {}
```

The Component Decorator Spcifies the Selector, the Template and Style Files.

The Selector is the Tag name of That Aprticular Component. This Component can be used in another component using its Tag.

_Example:_

```html
<!-- Other Component -->

<app-header></app-header>
```

### Script within Template

Any Variables declared in the TypeScript file can be used in the HTML Template.

This can be Achieved by Double Braces **( {'{{ }}'} )**.

The Double Braces helps us Enter the Variables or Expressions that is Evaluated using TypeScript.

_Example:_

```ts
// header.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HomeComponent {
  name: string = "Nathan";
}
```

```html
<!-- header.component.html -->

<h1>Name: {{name}}</h1>
```

Whenever the value of the Variable _name_ is updated, it is Immediately Reflected in the Page.

---

## Directives

These are Special Attributes which helps in adding Attributes by Computing an Expression and also reduces the Code Significantly.

### _ngStyle_ Directive

This is enhanced version of `style` attribute used to style an element after the Computation of some Expression.

_Example:_

```html
<td [ngStyle]="marks===100?'color:gold':'color:white'">{{marks}}</td>
```

In the above Example, the Style of Table Data is set based on the Value of the Variable _marks_.

`ngStyle` can also accept an Object to set Muliple Style Properties.

```html
<a
  [ngStyle]="{
  'font-size': '1.2rem',
  'text-decoration': 'none',
  }"
>
  ...
</a>
```

### ngClass Directive

This is enhanced version of `class` attribute used to assign a class to an element after the Computation of some Expression.

_Example:_

```html
<p [ngClass]="isCode ? 'jetbrains-font':''">{{paragraph}}</p>
```

In the above Example, the Class _jetbrains-font_ is set only if the Variable _isCode_ is `true`.

### ngIf Directive

This is used to render the Elements based on the Result of Computation.

#### ngIf

If the Condition given to the Directive is True, only then the Children Elements are Rendered.

_Example:_

```html
<ng-container *ngIf="isLogin">
  <h1>Hello {{user}}</h1>
</ng-container>
```

The Above Heading is Displayed only When the _isLogin_ Variable is True.

#### ngIf-then-else

Multiple Elements can be Rendered based on the `if` Conditions of a Different Element.

_Example:_

```html
<div *ngIf="isNewUser;then signUp else SignIn">here is ignored</div>
<ng-template #signUp>
  <h1>Sign Up Page</h1>
</ng-template>
<ng-template #signIn>
  <h1>Sign Up Page</h1>
</ng-template>
```

Based on the condition of Variable `isNewUser`, either the `signUp` or the `signIn` Contents are Rendered.

### ngSwitch Directive

ngSwitch Directive acts similar to that of Switch Statement.

_Example:_

```html
<ng-container [ngSwitch]="siteTheme">
  <ng-container *ngSwitchCase="light"> ... </ng-container>
  <ng-container *ngSwitchCase="dark"> ... </ng-container>
  <ng-template *ngSwitchCase="custom"> ... </ng-template>
  <ng-container *ngSwitchCase="custom">
    <!-- The Children are also rendered when the case value Matches. -->
    <h1>Your Selection</h1>
    <p>...</p>
  </ng-container>
  <ng-container *ngSwitchDefault> ... </ng-container>
</ng-container>
```

Based on the Value of _siteTheme_, the Following Element and their Children are Rendered.

### ngFor Directive

ngFor Directive is used to Repeat a Piece of Code for Each Item in an Iteratable Variable.

_Example:_

```html
<table *ngFor="let student of students; let i = index">
  <tr>
    <td>{{i+1}}</td>
    <td>{{student}}</td>
  </tr>
</table>
```

In the Above Example, the Code inside the Table Element is Repeated for All the Elements in the _students_ Variale.

---

## Communication between Relational Components

The Communication of Components can be achieved by exchanging the Data.

The Relational Communication Usually occurs between Parent and Child Component.

The Decorators used to Communicate are:

- @Input Decorator

- @Output Decorator

### Input Decorator

Input Decorators are Used to Transfer Data from Parent to Child Component.

The Data to be Passed to Child Component is passed as an Attribute.

_Example:_

```html
<!-- Parent Component HTML -->

<app-child [parentData]="Hello Child"></app-child>
```

The Passed Attribute can be Accessed in Child Component by using Input Decorator as Follows:

```ts
// Child Component TypeScript

import { Component, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  // The Passed Attribute is fetched using Input Decorator
  @Input() parentData: string;

  constructor() {
    console.log(this.parentData);
  }
}
```

### Output Decorator

Input Decorators are Used to Transfer Data from Child to Parent Component.

The Data to be Passed to Parent Component is passed as an Event using Event Emitter.

The Output to be sent to Parent Component by using Input Decoratoe as Follows:

```ts
// Child Component TypeScript

import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  // The Output is Passed as an Event
  @Output() OutputEmitter: EventEmitter<string> = new EventEmitter();
  childData: string = "Hello Parent";

  // Function to Send Data from Child to Parent
  sendData() {
    this.OutputEmitter.emit(this.childData);
  }
}
```

```html
<!-- Child Component HTML -->

<button (click)="sendData()">Click to send Data</button>
```

Once the Button is clicked, the Data is Transferred to the Parent Component.

Back in Parent Component, the Event emitted by Child Component is associated to one of the Functions in Parent Component.

```html
<!-- Parent Component HTML -->

<app-child (myOutput)="getChildData($event)"></app-child>
```

```ts
// Parent Component TypeScript

import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent {
  getChildData(childData) {
    console.log(childData);
  }
}
```

### ViewChild Decorator

ViewChild Decorators are Used to Access Data of Child by Parent Component.

```ts
// Child Component TypeScript

import { Component } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  childVariable: string;

  childFunction() {
    return computation(childVariable);
  }
}
```

The Parent can access all the Variables and Functions of a Child Component.

```ts
// Parent Component TypeScript

import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: "app-paren",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements AfterViewInit {
  // Object through which Child Data can be Accessed.
  @ViewChild(ChildComponent) child;

  childData: string;
  childFunctionData: number;

  ngAfterViewInit() {
    // Assgning Child Data
    this.childData = this.child.childVariable;
    this.childFunctionData = this.child.childFunction();
  }
}
```

---

## Service

Service is used for Communication between Any Components.

The Data can be Read and Modified by any Component.

Service makes sure that each component gets the updated Data.

### Creating a Service

A Service can be Created using Angular CLI.

```bash
ng generate service services/data
```

All the Services are Created within _app_ Directory. So the _services_ is a Directory created within the _app_ Directory.

### Service File

The Data to be shared between the Components is Declared anth the Functions which change the Data are Defined in the _service.ts_ File.

```ts
// data.service.ts File

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // Shared Data that is Declared.
  private dataSource = new BehaviorSubject<string>("Message");
  currentData = this.dataSource.asObservable();

  constructor() {}

  // Function that modifies Shared Data.
  changeData(modifiedData: string) {
    this.dataSource.next(modifiedData);
  }
}
```

The Service can be Used in any Component by importing and initializing the Service in Constructor.

```ts
// Any Component TypeScript File

import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-any",
  templateUrl: "./any.component.html",
  styleUrls: ["./any.component.css"],
})
export class AnyComponent {
  anyCompData: string;

  // Receiving Data From Service
  constructor(private dataService: DataService) {
    this.dataService.currentData.subscribe((message) => {
      this.message = message;
    });
  }

  // Changing the Data
  changeToAnyData() {
    this.dataService.changeData(anyCompData);
  }
}
```

The Function to change the Data is Called as a Event Handler.

```html
<!-- Any Component HTML File -->

<button (click)="changeToAnyData()">Change Data</button>
```

---

## Routing

Routing in Angular allows the users to Navigate between Components using URL Paths without losing the Application State and Properties.

### Router Outlet Element

Router Outlet specifies where the Components should be Rendered in the DOM.

_Example:_

```html
<header>...</header>

<router-outlet></router-outlet>

<footer>...</footer>
```

### Adding Paths

The Component to be rendered is decided based on the URL. The URL Path and its respective Component is defined in the _app-routing.module.ts_ File.

_Example:_

```ts
// app-routing.module.ts File

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/main/home.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  // Paths are added here.
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

In the Above Example, the URL _base_url_ renders _Home Component_ and _base_url/about_ renders _About Component_.

### Router Link Directive

If the `href` Attribute is used, it Reloads the Page. Hence, we use `routerLink` Directive to Specify the Path. The specified Path renders its respective Component.

```html
<a routerLink="/about">About Us</a>
```

### Child Routes

Child Routes are Subroutes that Exist within a Route like _base_url/about/ceo_.

This can be Implemented within _app-routing.module.ts_ File.

_Example:_

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent,
    children: [{ path: "ceo", component: CEOComponent }],
  },
];
```

In the above Example, the _CEOComponent_ is Rendered for the URL _base_url/about/ceo_.

There can be Muliple URL which should render the Same Component.In that case, we use **colon ( : )** to specify it.

_Example:_

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent,
    children: [{ path: ":contributor", component: ContributorComponent }],
  },
];
```

### Routing using Router Class

We can also Navigate within by Calling a Function rather than going with the Traditional Anchor Tag. This is usually done using Event Handlers.

```html
<!-- HTML File -->

<button (click)="navigateCEO()">Navigate to CEO Component</button>
```

```ts
// TypeScript File

import { Router } from "@angular/router";

export class AboutComponent {
  // Initializing Router
  constructor(private router: Router) {}

  navigateCEO() {
    this.router.navigate(["/about", "/ceo"]);
  }
}
```

---

## Extras

### Styling

There are many Sites which Provide Custom and Interactive Components that can be Used in Angular Applications.

1. [Nebular](https://akveo.github.io/nebular/)

2. [Angular Material](https://material.angular.io/)

3. [Ionic](https://ionicframework.com/docs/angular/overview)

4. [ng-Bootstrap](https://ng-bootstrap.github.io/#/home)

5. [Tailwind CSS](https://tailwindcss.com/docs/guides/angular)

---

## References

1. [_Official Angular Documentation_](https://angular.io/docs)

---
