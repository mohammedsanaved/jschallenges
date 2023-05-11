let webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
console.log(webTechs);
let webTechs2 = ['PHP','Python','Java','SQL','Graph'];
let arr1 = webTechs.push('GraphQl');
console.log(arr1);
console.log(webTechs);
let arr2 = webTechs2.pop();
console.log(arr2);
let str = webTechs2.join();
console.log(str);
let strtoarr = 'we are going to play soccer';
console.log(strtoarr.split(' '));
console.log(webTechs.unshift('Hall'));
console.log(webTechs.sort());
console.log(webTechs.slice(0,5))
console.log(webTechs.splice(2, 1));

let tech = webTechs.concat(webTechs2); 

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  const [frontEnd, backEnd] = fullStack
  console.log(frontEnd, backEnd);
  fullStack[0].push('Java');
  console.log(fullStack);
  
  const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
  ]
  let [gem, fra, , ...nordicCountries] = countries
  // const ['India', 'China', 'Portugal', 'Egypt',...countries] = countries;
  // console.log(count);
  console.log(gem, fra, nordicCountries);
  let world = [...countries,'India', 'China', 'Portugal', 'Egypt'];
  console.log(world);
  
