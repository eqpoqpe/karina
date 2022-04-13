/**
 * data/index.js - karina
 */

// topics
// to.directory

// key -> value

// const table = {};

// Object.defineProperty(table, "getTo", {
//   writable: false,
//   enumerable: true,
//   value: function () { console.log(this.tb); }
// });

/**
 * 
 * @param {*} query 
 * @param {React.Dispatch<React.SetStateAction<number>>|
 * React.Dispatch<React.SetStateAction<number>>[]} setter 
 */
async function fetchData(query, setter) {
  fetch(query)
    .then((response) => response.json())
    .then((result) => {
      if (setter instanceof Array) {
        [...setter].forEach((setter) => { setter(result); });
      } else { setter(result); }
    });
}

export { fetchData };