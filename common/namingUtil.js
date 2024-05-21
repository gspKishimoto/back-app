function toCamelCaseObject(obj) {
  const result = {}
  Object.keys(obj).forEach(key => {
    result[toCamelCase(key)] = obj[key]
  })
  return result
}

function toSnakeCaseObject(obj) {
  const result = {}
  Object.keys(obj).forEach(key => {
    result[toSneakCase(key)] = obj[key]
  })
  return result
}

function toCamelCase(str) {
  return str.split('_').map(function(word,index){
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

function toSneakCase(str) {
  return str.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "");
}


module.exports = {
    toCamelCaseObject: toCamelCaseObject,
    toSnakeCaseObject: toSnakeCaseObject
}
