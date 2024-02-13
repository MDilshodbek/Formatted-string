var people = {
  person1: {
    name: "Dilshodbek",
    age: 25,
    gender: "Male",
  },
  person2: {
    name: "Maqsadbek",
    age: 25,
    gender: "Male",
  },
  person3: {
    name: "Ahad",
    age: 25,
    gender: "Male",
  },
};

var keys = Object.keys(people);

function formatted_string(name) {
  for (let i = 0; i < keys.length; i++) {
    let person = people[keys[i]];
    if (person.name === name) {
      console.log(
        `Name -> ${person.name} Age -> ${person.age} Gender -> ${person.gender}`
      );
    }
  }
}
formatted_string("Dilshodbek");
