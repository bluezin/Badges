// let element = document.createElement("h1")
// element.innerHTML = "Hello React :)"

// let div = document.getElementById("app")
// div.appendChild(element)

// const p = <h1>Hello React again!!!!!!!!!!</h1>
// const div = document.getElementById("app")

// ReactDom.render(__que__donde__)
// ReactDom.render(p, div)

//jsx
//expreciones

//const h1 = <h1>How is everthing?</h1>
//const div = document.getElementById("app")

//React create.elemnet
// const pi = React.createElement("a", {href: 'https://platzi.com'},"initialice in platzi" )
// const div = document.getElementById("app")

//second example
// const pe = <h1>How is everthing {name}?</h1>
// //templates
// const name = "Yadira";
// const pe = React.createElement('p', {}, `How is everthing ${name}?`);
//const div = document.getElementById("app");

//example with functions
// const sum = () => 2 + 2;
// const p = <h1>Mi name secret is {undefined}</h1>;

// const pi = (
//   <div>
//   <h1>Hello of again</h1>
//   <p>HERE (:) </p>
//   </div>
// )

// const pi = React.createElement(
//   "div",
//   {},
//   "",
//   React.createElement("p", {}, "I am sorry"),

//   React.createElement("p", {}, "I am sorry")
// );

// const div = document.getElementById("app");

// ReactDom.render(pi, div);

import React from "react";
import ReactDom from "react-dom";
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from "./components/App";
const div = document.getElementById("app");

ReactDom.render(<App />, div);
//cuando no tiene un </> se entiende como un componente
