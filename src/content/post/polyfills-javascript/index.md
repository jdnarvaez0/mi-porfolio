---
title: "Desmitificando los Polyfills: Potencia tu JavaScript"
description: "Los polyfills son tus héroes secretos en JavaScript. Su misión es hacer que tu código funcione en todos lados, incluso en los rincones más oscuros de la web"
publishDate: "31 Oct 2023"
coverImage:
  src: "./banner.png"
  alt: "polyfills img"
tags: ["Javascript"]
---

## Introducción

El JavaScript moderno es una maravilla, pero a veces nos encontramos con navegadores antiguos que simplemente no pueden seguir el ritmo. Es ahí donde entran en juego los "polyfills," salvadores de desarrolladores web. En este artículo, desmitificaremos los polyfills y exploraremos cómo crear tus propios polyfills para los métodos .map, .forEach, .reduce y .filter.

Si buscas trabajo como desarrollador web, prepárate para entrevistas que evalúen tu conocimiento de JavaScript. Los métodos .map, .forEach, .reduce, y .filter son temas candentes. Los entrevistadores quieren saber si no solo los usas, sino si entiendes cómo funcionan. Ahí es donde los polyfills entran en juego.

## ¿Qué son los Polyfills?

Los polyfills son pequeños fragmentos de código JavaScript que se utilizan para llenar los vacíos de funcionalidad en navegadores que no admiten ciertas características de JavaScript o API. En otras palabras, son la forma en que hacemos que el nuevo JavaScript funcione en los navegadores antiguos. ¡Son tus amigos cuando estás lidiando con la compatibilidad entre navegadores!

## .map

El método `.map()` es utilizado para crear una nueva matriz con los resultados de aplicar una función a cada elemento de otra matriz. Aquí hay un polyfill para el método `.map()`:

```js
Array.prototype.myMap = function (cb) {
	let result = [];

	for (let i = 0; i < this.length; i++) {
		const value = cb(this[i], i, this);
		result.push(value);
	}

	return result;
};
```

### Output:

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.myMap((el) => el * 2);

console.log(result);
// output: [2, 4, 6, 8, 10];
```

## .forEach()

El método `.forEach()` ejecuta una función en cada elemento de una matriz. Aquí tienes un polyfill para este método:

```js
Array.prototype.myForEach = function (cb) {
	for (let i = 0; i < this.length; i++) {
		if (typeof this[i] !== "undefined") {
			cb(this[i], i, this);
		}
	}
};
```

### Output:

```js
// Test case 1:
const arr = ["a", "b", "c"];

arr.myForEach((element, index) => console.log({ [index]: element }));
// output:
// {0: 'a'}
// {1: 'b'}
// {2: 'c'}

// Test case 2:
const arr1 = ["a", , "c"];

arr1.myForEach((element, index) => console.log({ [index]: element }));
// output:
// {0: 'a'}
// {2: 'c'}
```

## .reduce()

El método `.reduce()` se utiliza para reducir una matriz a un solo valor. Aquí tienes un polyfill para `.reduce()`:

```js
Array.prototype.myReduce = function (cb, initialValue) {
	let result;
	let startIndex = 0;

	if (arguments.length <= 1) {
		result = this[0];
		startIndex = 1;
	}

	if (arguments.length >= 2) {
		result = initialValue;
	}

	for (let i = startIndex; i < this.length; i++) {
		result = cb(result, this[i]);
	}

	return result;
};
```

### Output:

```js
const arr = [1, 2, 3, 4, 5];

// Test case 1:
const sum = arr.myReduce((prev, curr) => prev + curr);
console.log(sum);
// output: 15

// Test case 2:
const oddEvenCount = arr.myReduce(
	(prev, curr) =>
		curr % 2 == 0 ? { ...prev, even: prev.even + 1 } : { ...prev, odd: prev.odd + 1 },
	{ even: 0, odd: 0 },
);
console.log(oddEvenCount);
// output: {even: 2, odd: 3};
```

## .filter()

El método `.filter()` crea una nueva matriz con todos los elementos que pasan una prueba. Aquí tienes un polyfill para .`filter()`:

```js
Array.prototype.myFilter = function (cb) {
	let result = [];

	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			result.push(this[i]);
		}
	}

	return result;
};
```

### Output:

```js
const arr = [1, 2, 3, 4, 5];

const result = arr.myFilter((el) => el % 2 === 0);

console.log(result);
// output: [2, 4];
```

## includes()

includes() comprueba si el elemento dado está presente en el array si está presente, el método devuelve true, en caso contrario false.

```js
Array.prototype.myIncludes = function (element, fromIndex = 0) {
	for (let i = fromIndex; i < this.length; i++) {
		if (this[i] === element) {
			return true;
		}
	}
	return false;
};
```

### Output:

```js
const arr = ["a", "b", "c", "d", "e", "a"];

// Test case 1:
const result1 = arr.myIncludes("a");
console.log(result1);
// output: true

// Test case 2:
const result2 = arr.myIncludes("z");
console.log(result2);
// output: false
```

## Conclusión

Los polyfills son herramientas poderosas que te permiten escribir código JavaScript moderno y aún así mantener la compatibilidad con navegadores antiguos. Al aprender a crear tus propios polyfills, puedes aumentar tus habilidades como desarrollador y estar mejor preparado para pruebas técnicas en entrevistas de trabajo. Así que no temas a la compatibilidad del navegador; ¡los polyfills son tus aliados!
