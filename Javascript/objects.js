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

//for(let atributes in Person) console.log(atributes)

//for (let values of Object.values(Person)) console.log(values)

//for (let [key,value] of Object.entries(Person)) console.log(`attributes: ${key}, value: ${value}`)


Person.name="Tayyab"    //updatating attribute

Person["department"] = "Developer"  //adding attribute
Person["city"]={"abc" :"fgh"}   //adding attribute with object
console.log(Person)

