const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    isMarried: true,
  }
  console.log(person)
  console.log(person.firstName);
  console.log(person['lastName']);
  person.skills.push('Mentor');
  person.skills.pop();
  person.isMarried = false;
  person.userid = 'Jaye';
  console.log(person);
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)
  
  let dog = {};
  console.log(dog);
  dog.legs = 4;
  dog.color = 'brown';
  dog.name = 'Tom';
  dog.disability = false;
  dog.skills = ['run','learn', 'honest', 'Cute'];
  dog.age = 2;
  console.log(dog);
  dog.skills.push('Militrary Dog');
  dog.livingArea = 'inGarden';
  dog.skills.unshift('Brave');
  dog.color = 'black & brown';
  console.log(dog.skills);
  let dogSkills = dog.skills.join(' ,');
  console.log(`my Dog skills are ${dogSkills}`)
  console.log(dogSkills);
  console.log(dog);


  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let py = users.John.skills.filter((mov)=> {
    (mov === 'HTML') ? console.log(mov) : console.log('we are finding');
  })

console.log(users);