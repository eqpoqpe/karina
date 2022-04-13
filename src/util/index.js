function parserAPIObject() { }

/**
 * @returns {string[]}
 */
function getLegalPath(lt) {
  let res = [];
  
  [...lt].map((obj)=>{res.push(`${obj.rid}`)});

  return res;
}

/**
 * @returns {string[]}
 */
function getRIDSets(lt) {
  let res = [];

  [...lt].map((obj)=>{res.push(`${obj.rid}`)});

  return res;
}


export { parserAPIObject, getLegalPath };
