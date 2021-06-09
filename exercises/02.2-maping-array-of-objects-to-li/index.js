import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
var nombre = planets.map((n1, index) => {
	return <li key = {index}className="list-group-item">{n1}</li>;
});

// 2) add the array planetsInHTML inside the innerHTML of this ul
const content = <ul className="list-group m-5">{nombre}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
