function toCamelCase(str) {
    const words = str.split(/\W+/);
    let result = words[0].toLowerCase();
  
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  
    return result;
  }
  
  // Example usage:
  const inputString = "this is an example string";
  const camelCaseResult = toCamelCase(inputString);
  console.log(camelCaseResult);