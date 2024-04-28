apple

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const isEven = num => num % 2 === 0;
const getUniqueValues = array => [...new Set(array)];
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
0,98,16,30,24,44,52,87,67,15,26 / 37,79,92,68,71,70,70,82,69,77,21,44,49,94,28
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const capitalizeString = str => str.toUpperCase();

orange

let array = getRandomArray(); array.forEach(item => console.log(item));
true + false

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
