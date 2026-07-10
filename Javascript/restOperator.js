//rest operator destructrues the objects and arrays


// function that recieves an obj and destructures it 

const destructurObj = (Obj) => {
    const {name,address, ...remaning}= Obj
    console.log(`name: ${name}, contact: ${contact}, remanning:`,remaning)
}

// destructuring on parameters list 
const destructurObject = ({name,contact, ...remaning}) => {
    console.log(`name: ${name}, contact: ${contact}, remanning:`,remaning)
}

// function that recieves an arry and destructures it 
const destructureArry = (arry) => {
    const [x,y,...rest]= numbers
    console.log(x,y,rest)
}

const Person = {
    "name": "haris",
    "email": "haris@gmail.com",
    "contact": "03477777777",
    "isEmployed": true,
    "sallery": 15000.00,
    "address": {
        "city": "Rawalpindi",
        "area": "Satellite Town",
        "postel code": 46000,
        "country": "Pakistan"
    }
}

const {name,contact, ...remaning}= Person
//console.log (name,contact,remaning)
//console.log(`name: ${name}, contact: ${contact}, remanning:`,remaning)

const numbers = [1,2,3,4,5]

const [first,,third,...rest]= numbers

//console.log(first,third, rest)
// destructurObj(Person)
// destructureArry(numbers)
//destructurObject(Person)





const persons = [
  {
    name: "Haris",
    email: "haris@gmail.com",
    contact: "03477777777",
    isEmployed: true,
    salary: 15000.00,
    address: {
      city: "Rawalpindi",
      area: "Satellite Town",
      postalCode: 46000,
      country: "Pakistan"
    }
  },
  {
    name: "Ali",
    email: "ali@gmail.com",
    contact: "03001234567",
    isEmployed: false,
    salary: 0.00,
    address: {
      city: "Lahore",
      area: "Johar Town",
      postalCode: 54000,
      country: "Pakistan"
    }
  },
  {
    name: "Ahmed",
    email: "ahmed@gmail.com",
    contact: "03112223344",
    isEmployed: true,
    salary: 45000.00,
    address: {
      city: "Karachi",
      area: "Gulshan-e-Iqbal",
      postalCode: 75300,
      country: "Pakistan"
    }
  },
  {
    name: "Fatima",
    email: "fatima@gmail.com",
    contact: "03215556677",
    isEmployed: true,
    salary: 65000.00,
    address: {
      city: "Islamabad",
      area: "F-10",
      postalCode: 44000,
      country: "Pakistan"
    }
  },
  {
    name: "Ayesha",
    email: "ayesha@gmail.com",
    contact: "03334445566",
    isEmployed: false,
    salary: 0.00,
    address: {
      city: "Peshawar",
      area: "Hayatabad",
      postalCode: 25000,
      country: "Pakistan"
    }
  }
];

const destructurePersons = (persons) => {
    for(const i of persons){
        const {name,address: {city}, ...remaning}= i
        console.log (name,city,remaning)
    }
}

//destructurePersons(persons)

function destructurePersonsByParameter(persons) {
    for (const { name, address: { city }, ...remaining } of persons) {
        console.log("Name:", name);
        console.log("City:", city);
        console.log("Remaining:", remaining);
        console.log("----------------");
    }
}

destructurePersonsByParameter(persons);