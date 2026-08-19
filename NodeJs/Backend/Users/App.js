// import http from "http";

// import env from "dotenv";
// env.config();

// const users = [
//   { name: "Ali Khan", city: "Islamabad", age: 24, job: "Software Engineer" },
//   { name: "Ahmed Raza", city: "Lahore", age: 28, job: "Web Developer" },
//   { name: "Usman Malik", city: "Karachi", age: 31, job: "Accountant" },
//   { name: "Hamza Ahmed", city: "Rawalpindi", age: 26, job: "Graphic Designer" },
//   { name: "Bilal Hussain", city: "Peshawar", age: 29, job: "Civil Engineer" },
//   { name: "Hassan Ali", city: "Faisalabad", age: 23, job: "Teacher" },
//   { name: "Saad Khan", city: "Multan", age: 27, job: "Data Analyst" },
//   { name: "Talha Sheikh", city: "Quetta", age: 32, job: "Business Analyst" },
//   { name: "Usama Iqbal", city: "Sialkot", age: 25, job: "UI Designer" },
//   { name: "Ahsan Javed", city: "Gujranwala", age: 30, job: "Mechanical Engineer" },

//   { name: "Hamza Shah", city: "Islamabad", age: 22, job: "Frontend Developer" },
//   { name: "Danish Ali", city: "Lahore", age: 34, job: "Project Manager" },
//   { name: "Fahad Khan", city: "Karachi", age: 27, job: "Backend Developer" },
//   { name: "Zain Ahmed", city: "Rawalpindi", age: 24, job: "Mobile Developer" },
//   { name: "Owais Malik", city: "Peshawar", age: 29, job: "Doctor" },
//   { name: "Waleed Hussain", city: "Faisalabad", age: 33, job: "Lawyer" },
//   { name: "Arslan Raza", city: "Multan", age: 26, job: "Marketing Manager" },
//   { name: "Shahzaib Khan", city: "Quetta", age: 28, job: "Network Engineer" },
//   { name: "Haris Ahmed", city: "Sialkot", age: 23, job: "Content Writer" },
//   { name: "Muneeb Iqbal", city: "Gujranwala", age: 31, job: "Sales Executive" },

//   { name: "Areeb Khan", city: "Islamabad", age: 25, job: "Software Engineer" },
//   { name: "Rehan Ahmed", city: "Lahore", age: 30, job: "Accountant" },
//   { name: "Kashif Ali", city: "Karachi", age: 35, job: "Architect" },
//   { name: "Rayan Malik", city: "Rawalpindi", age: 21, job: "Student" },
//   { name: "Abdullah Hussain", city: "Peshawar", age: 27, job: "Pharmacist" },
//   { name: "Taimoor Raza", city: "Faisalabad", age: 32, job: "Electrical Engineer" },
//   { name: "Shayan Khan", city: "Multan", age: 24, job: "SEO Specialist" },
//   { name: "Adeel Ahmed", city: "Quetta", age: 29, job: "Business Consultant" },
//   { name: "Noman Ali", city: "Sialkot", age: 26, job: "Graphic Designer" },
//   { name: "Ibrahim Sheikh", city: "Gujranwala", age: 33, job: "HR Manager" },

//   { name: "Maham Khan", city: "Islamabad", age: 25, job: "Software Developer" },
//   { name: "Ayesha Ahmed", city: "Lahore", age: 27, job: "Doctor" },
//   { name: "Fatima Ali", city: "Karachi", age: 24, job: "Teacher" },
//   { name: "Hira Malik", city: "Rawalpindi", age: 29, job: "UI Designer" },
//   { name: "Sana Hussain", city: "Peshawar", age: 31, job: "Nurse" },
//   { name: "Zoya Raza", city: "Faisalabad", age: 23, job: "Web Developer" },
//   { name: "Iqra Khan", city: "Multan", age: 26, job: "Content Writer" },
//   { name: "Maryam Ahmed", city: "Quetta", age: 30, job: "Lawyer" },
//   { name: "Laiba Ali", city: "Sialkot", age: 22, job: "Marketing Executive" },
//   { name: "Mehwish Sheikh", city: "Gujranwala", age: 28, job: "Accountant" },

//   { name: "Anum Khan", city: "Islamabad", age: 32, job: "Project Manager" },
//   { name: "Rabia Ahmed", city: "Lahore", age: 25, job: "Data Analyst" },
//   { name: "Minal Ali", city: "Karachi", age: 27, job: "Software Engineer" },
//   { name: "Eman Malik", city: "Rawalpindi", age: 24, job: "Graphic Designer" },
//   { name: "Aiman Hussain", city: "Peshawar", age: 29, job: "Teacher" },
//   { name: "Noor Raza", city: "Faisalabad", age: 33, job: "Civil Engineer" },
//   { name: "Komal Khan", city: "Multan", age: 26, job: "HR Executive" },
//   { name: "Sadia Ahmed", city: "Quetta", age: 30, job: "Business Analyst" },
//   { name: "Aleena Ali", city: "Sialkot", age: 23, job: "Frontend Developer" },
//   { name: "Kiran Sheikh", city: "Gujranwala", age: 28, job: "Bank Officer" },

//   { name: "Farhan Khan", city: "Islamabad", age: 29, job: "Backend Developer" },
//   { name: "Imran Ahmed", city: "Lahore", age: 36, job: "Civil Engineer" },
//   { name: "Kamran Ali", city: "Karachi", age: 33, job: "Business Manager" },
//   { name: "Junaid Malik", city: "Rawalpindi", age: 28, job: "Software Engineer" },
//   { name: "Shahzad Hussain", city: "Peshawar", age: 41, job: "Doctor" },
//   { name: "Naveed Raza", city: "Faisalabad", age: 35, job: "Accountant" },
//   { name: "Asad Khan", city: "Multan", age: 27, job: "Network Engineer" },
//   { name: "Rashid Ahmed", city: "Quetta", age: 39, job: "Architect" },
//   { name: "Adnan Ali", city: "Sialkot", age: 31, job: "Mechanical Engineer" },
//   { name: "Sohail Sheikh", city: "Gujranwala", age: 34, job: "Sales Manager" },

//   { name: "Murtaza Khan", city: "Islamabad", age: 26, job: "DevOps Engineer" },
//   { name: "Yasir Ahmed", city: "Lahore", age: 32, job: "Software Developer" },
//   { name: "Zubair Ali", city: "Karachi", age: 38, job: "Project Manager" },
//   { name: "Faisal Malik", city: "Rawalpindi", age: 30, job: "Database Administrator" },
//   { name: "Asif Hussain", city: "Peshawar", age: 37, job: "Teacher" },
//   { name: "Naeem Raza", city: "Faisalabad", age: 42, job: "Business Consultant" },
//   { name: "Waqas Khan", city: "Multan", age: 25, job: "Web Developer" },
//   { name: "Rizwan Ahmed", city: "Quetta", age: 35, job: "Electrical Engineer" },
//   { name: "Saqib Ali", city: "Sialkot", age: 29, job: "Data Analyst" },
//   { name: "Javed Sheikh", city: "Gujranwala", age: 40, job: "Accountant" },

//   { name: "Usman Khan", city: "Islamabad", age: 28, job: "Full Stack Developer" },
//   { name: "Arif Ahmed", city: "Lahore", age: 45, job: "Professor" },
//   { name: "Rauf Ali", city: "Karachi", age: 37, job: "Marketing Manager" },
//   { name: "Irfan Malik", city: "Rawalpindi", age: 34, job: "Software Engineer" },
//   { name: "Nisar Hussain", city: "Peshawar", age: 43, job: "Lawyer" },
//   { name: "Majid Raza", city: "Faisalabad", age: 31, job: "Civil Engineer" },
//   { name: "Salman Khan", city: "Multan", age: 29, job: "Mobile Developer" },
//   { name: "Tariq Ahmed", city: "Quetta", age: 46, job: "Business Owner" },
//   { name: "Akram Ali", city: "Sialkot", age: 39, job: "Mechanical Engineer" },
//   { name: "Shafiq Sheikh", city: "Gujranwala", age: 44, job: "Bank Manager" },

//   { name: "Raza Khan", city: "Islamabad", age: 27, job: "Cyber Security Analyst" },
//   { name: "Hammad Ahmed", city: "Lahore", age: 25, job: "Frontend Developer" },
//   { name: "Sarmad Ali", city: "Karachi", age: 30, job: "Backend Developer" },
//   { name: "Daniyal Malik", city: "Rawalpindi", age: 23, job: "Software Developer" },
//   { name: "Ammar Hussain", city: "Peshawar", age: 28, job: "Pharmacist" },
//   { name: "Shahmeer Raza", city: "Faisalabad", age: 26, job: "Graphic Designer" },
//   { name: "Mikaeel Khan", city: "Multan", age: 24, job: "UI Designer" },
//   { name: "Zeeshan Ahmed", city: "Quetta", age: 33, job: "Network Engineer" },
//   { name: "Huzaifa Ali", city: "Sialkot", age: 22, job: "Junior Developer" },
//   { name: "Sameer Sheikh", city: "Gujranwala", age: 29, job: "SEO Specialist" },

//   { name: "Saif Khan", city: "Islamabad", age: 36, job: "Product Manager" },
//   { name: "Moeen Ahmed", city: "Lahore", age: 31, job: "Data Scientist" },
//   { name: "Rameez Ali", city: "Karachi", age: 28, job: "Software Engineer" },
//   { name: "Dawood Malik", city: "Rawalpindi", age: 35, job: "DevOps Engineer" },
//   { name: "Awais Hussain", city: "Peshawar", age: 27, job: "Web Developer" },
//   { name: "Furqan Raza", city: "Faisalabad", age: 32, job: "Project Manager" },
//   { name: "Zarar Khan", city: "Multan", age: 26, job: "Business Analyst" },
//   { name: "Sufyan Ahmed", city: "Quetta", age: 30, job: "Civil Engineer" },
//   { name: "Rayyan Ali", city: "Sialkot", age: 21, job: "Student" },
//   { name: "Abbas Sheikh", city: "Gujranwala", age: 38, job: "Operations Manager" },

//   { name: "Shayan Ahmed", city: "Islamabad", age: 29, job: "Software Engineer" },
//   { name: "Haseeb Khan", city: "Lahore", age: 26, job: "Web Developer" },
//   { name: "Azan Ali", city: "Karachi", age: 24, job: "Mobile Developer" },
//   { name: "Musa Malik", city: "Rawalpindi", age: 22, job: "Frontend Developer" },
//   { name: "Yousuf Hussain", city: "Peshawar", age: 34, job: "Teacher" },
//   { name: "Ilyas Raza", city: "Faisalabad", age: 40, job: "Accountant" },
//   { name: "Noman Khan", city: "Multan", age: 28, job: "Graphic Designer" },
//   { name: "Sami Ahmed", city: "Quetta", age: 25, job: "Data Analyst" },
//   { name: "Azhar Ali", city: "Sialkot", age: 37, job: "Business Consultant" },
//   { name: "Babar Sheikh", city: "Gujranwala", age: 41, job: "Marketing Manager" }
// ];

// const myServer = http.createServer((req, res) => {
//   const url = new URL(req.url, `http://${req.headers.host}`);
//   console.log(`Request Obojects URL is: ${req.url}`);
//   console.log(url);
//   console.log(url.searchParams);

//   //   url.searchParams.forEach((element) => {
//   //     console.log(element);
//   //   });

//   //   for (var [key, value] of url.searchParams.entries()) {
//   //     console.log(`Key: ${key}, value: ${value}`);
//   //     console.log(users[0][`${key}`]);
//   //   }

//   res.statusCode = 200;
//   if (req.url === "/") {
//     res.end("Welcome to the home page of Server...");
//   } else if (req.url === "/about") {
//     res.end("Welcome to the about page of Server...");
//   } else if (req.url === "/feedback") {
//     res.end("Welcome to the feedback page of Server...");
//   } else if (req.url === "/contact") {
//     switch (req.method) {
//       case "GET": {
//         return res.end("Contact url trigerred using GET Method!!!");
//       }
//       case "POST": {
//         return res.end("Contact url trigerred using POST Method!!!");
//       }
//       case "DELETE": {
//         return res.end("Contact url trigerred using DELETE Method!!!");
//       }
//       case "PUT": {
//         return res.end("Contact url trigerred using PUT Method!!!");
//       }
//       default:
//         return res.end("Unknown Method");
//     }
//   } else if (url.pathname === "/users") {
//     switch (req.method) {
//       case "GET": {
//         let result = users;
//         for (var [key, value] of url.searchParams.entries()) {
//           result = result.filter((user) => user[key].toLocaleLowerCase() = value.toLocaleLowerCase())
//         }
//         console.log(result);
//         return res.end(`${JSON.stringify(result)}`);
//       }
//       case "POST": {
//         let newUser = "";
//         req.on("data", (chunk) => {
//           newUser += chunk;
//         });
//         req.on("end", () => {
//           return res.end(`${newUser}`);
//         });
//         return;
//       }
//       case "DELETE": {
//         return res.end("User url trigerred using DELETE Method!!!");
//       }
//       case "PUT": {
//         return res.end("User url trigerred using PUT Method!!!");
//       }
//       default:
//         return res.end("Unknown Method");
//     }
//   } else {
//     res.statusCode = 404;
//     res.end("Page not found!!!");
//   }
// });

// const port = process.env.SERVER_PORT || 5000;

// myServer.listen(port, () => {
//   console.log(
//     `Congratulations!!! Your server is running at http://localhost:${port}/`,
//   );
// });

import http from "http";

import env from "dotenv";

env.config();

const users = [
  { name: "Haris", job: "Designer", age: "23", city: "Rawalpindi" },
  { name: "Ali", job: "Developer", age: "28", city: "Islamabad" },
  { name: "Ahmed", job: "Engineer", age: "31", city: "Lahore" },
  { name: "Usman", job: "Manager", age: "35", city: "Karachi" },
  { name: "Hamza", job: "Teacher", age: "26", city: "Peshawar" },
  { name: "Bilal", job: "Writer", age: "29", city: "Multan" },
  { name: "Ahsan", job: "Designer", age: "24", city: "Faisalabad" },
  { name: "Omar", job: "Developer", age: "32", city: "Rawalpindi" },
  { name: "Zain", job: "Engineer", age: "27", city: "Islamabad" },
  { name: "Saad", job: "Manager", age: "38", city: "Lahore" },

  { name: "Danish", job: "Teacher", age: "25", city: "Karachi" },
  { name: "Fahad", job: "Designer", age: "30", city: "Peshawar" },
  { name: "Talha", job: "Developer", age: "22", city: "Multan" },
  { name: "Waleed", job: "Writer", age: "34", city: "Faisalabad" },
  { name: "Hassan", job: "Engineer", age: "28", city: "Rawalpindi" },
  { name: "Huzaifa", job: "Manager", age: "33", city: "Islamabad" },
  { name: "Abdullah", job: "Teacher", age: "21", city: "Lahore" },
  { name: "Muneeb", job: "Designer", age: "26", city: "Karachi" },
  { name: "Shahzaib", job: "Developer", age: "29", city: "Peshawar" },
  { name: "Rayan", job: "Engineer", age: "36", city: "Multan" },

  { name: "Arham", job: "Writer", age: "23", city: "Faisalabad" },
  { name: "Sameer", job: "Manager", age: "40", city: "Rawalpindi" },
  { name: "Yousuf", job: "Teacher", age: "27", city: "Islamabad" },
  { name: "Ibrahim", job: "Designer", age: "31", city: "Lahore" },
  { name: "Rayyan", job: "Developer", age: "24", city: "Karachi" },
  { name: "Adeel", job: "Engineer", age: "30", city: "Peshawar" },
  { name: "Noman", job: "Writer", age: "35", city: "Multan" },
  { name: "Asad", job: "Manager", age: "28", city: "Faisalabad" },
  { name: "Imran", job: "Teacher", age: "42", city: "Rawalpindi" },
  { name: "Kashif", job: "Designer", age: "25", city: "Islamabad" },

  { name: "Sufyan", job: "Developer", age: "27", city: "Lahore" },
  { name: "Adnan", job: "Engineer", age: "33", city: "Karachi" },
  { name: "Rizwan", job: "Manager", age: "39", city: "Peshawar" },
  { name: "Shayan", job: "Writer", age: "22", city: "Multan" },
  { name: "Faisal", job: "Teacher", age: "37", city: "Faisalabad" },
  { name: "Taha", job: "Designer", age: "29", city: "Rawalpindi" },
  { name: "Junaid", job: "Developer", age: "34", city: "Islamabad" },
  { name: "Rehan", job: "Engineer", age: "26", city: "Lahore" },
  { name: "Salman", job: "Manager", age: "41", city: "Karachi" },
  { name: "Musa", job: "Teacher", age: "23", city: "Peshawar" },

  { name: "Abbas", job: "Designer", age: "32", city: "Multan" },
  { name: "Zubair", job: "Developer", age: "28", city: "Faisalabad" },
  { name: "Kamil", job: "Writer", age: "25", city: "Rawalpindi" },
  { name: "Shahbaz", job: "Engineer", age: "36", city: "Islamabad" },
  { name: "Naveed", job: "Manager", age: "43", city: "Lahore" },
  { name: "Irfan", job: "Teacher", age: "30", city: "Karachi" },
  { name: "Kamran", job: "Designer", age: "27", city: "Peshawar" },
  { name: "Rafay", job: "Developer", age: "24", city: "Multan" },
  { name: "Dawood", job: "Engineer", age: "29", city: "Faisalabad" },
  { name: "Sami", job: "Writer", age: "33", city: "Rawalpindi" },

  { name: "Farhan", job: "Manager", age: "38", city: "Islamabad" },
  { name: "Yahya", job: "Teacher", age: "26", city: "Lahore" },
  { name: "Ammar", job: "Designer", age: "23", city: "Karachi" },
  { name: "Murtaza", job: "Developer", age: "31", city: "Peshawar" },
  { name: "Shahmeer", job: "Engineer", age: "35", city: "Multan" },
  { name: "Ayan", job: "Writer", age: "21", city: "Faisalabad" },
  { name: "Moiz", job: "Manager", age: "30", city: "Rawalpindi" },
  { name: "Rameez", job: "Teacher", age: "34", city: "Islamabad" },
  { name: "Shoaib", job: "Designer", age: "28", city: "Lahore" },
  { name: "Arslan", job: "Developer", age: "37", city: "Karachi" },

  { name: "Hammad", job: "Engineer", age: "25", city: "Peshawar" },
  { name: "Qasim", job: "Writer", age: "40", city: "Multan" },
  { name: "Nashit", job: "Manager", age: "29", city: "Faisalabad" },
  { name: "Azan", job: "Teacher", age: "22", city: "Rawalpindi" },
  { name: "Rafay", job: "Designer", age: "26", city: "Islamabad" },
  { name: "Zeeshan", job: "Developer", age: "33", city: "Lahore" },
  { name: "Waqar", job: "Engineer", age: "39", city: "Karachi" },
  { name: "Asim", job: "Writer", age: "27", city: "Peshawar" },
  { name: "Nouman", job: "Manager", age: "36", city: "Multan" },
  { name: "Saqib", job: "Teacher", age: "31", city: "Faisalabad" },

  { name: "Mahir", job: "Designer", age: "24", city: "Rawalpindi" },
  { name: "Aariz", job: "Developer", age: "29", city: "Islamabad" },
  { name: "Sheryar", job: "Engineer", age: "32", city: "Lahore" },
  { name: "Hashir", job: "Manager", age: "27", city: "Karachi" },
  { name: "Mikael", job: "Teacher", age: "35", city: "Peshawar" },
  { name: "Ehsan", job: "Writer", age: "23", city: "Multan" },
  { name: "Awais", job: "Designer", age: "30", city: "Faisalabad" },
  { name: "Rashid", job: "Developer", age: "41", city: "Rawalpindi" },
  { name: "Nabeel", job: "Engineer", age: "28", city: "Islamabad" },
  { name: "Shahid", job: "Manager", age: "44", city: "Lahore" },

  { name: "Waqas", job: "Teacher", age: "26", city: "Karachi" },
  { name: "Sarmad", job: "Designer", age: "34", city: "Peshawar" },
  { name: "Haseeb", job: "Developer", age: "25", city: "Multan" },
  { name: "Zarar", job: "Engineer", age: "37", city: "Faisalabad" },
  { name: "Mansoor", job: "Writer", age: "42", city: "Rawalpindi" },
  { name: "Aqib", job: "Manager", age: "31", city: "Islamabad" },
  { name: "Furqan", job: "Teacher", age: "29", city: "Lahore" },
  { name: "Salar", job: "Designer", age: "22", city: "Karachi" },
  { name: "Hamdan", job: "Developer", age: "36", city: "Peshawar" },
  { name: "Zaid", job: "Engineer", age: "24", city: "Multan" },

  { name: "Rohan", job: "Writer", age: "28", city: "Faisalabad" },
  { name: "Daniyal", job: "Manager", age: "33", city: "Rawalpindi" },
  { name: "Huzefa", job: "Teacher", age: "39", city: "Islamabad" },
  { name: "Areeb", job: "Designer", age: "27", city: "Lahore" },
  { name: "Shahzaib", job: "Developer", age: "30", city: "Karachi" },
  { name: "Momin", job: "Engineer", age: "26", city: "Peshawar" },
  { name: "Raza", job: "Writer", age: "35", city: "Multan" },
  { name: "Haris", job: "Manager", age: "23", city: "Faisalabad" },
  { name: "Aftab", job: "Teacher", age: "40", city: "Rawalpindi" },
  { name: "Kashan", job: "Designer", age: "32", city: "Islamabad" },
];

const myServer = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  //   console.log(url.pathname);
  res.statusCode = 200;
  if (url.pathname === "/") {
    res.end("Welcome to the home page of Server...");
  } else if (url.pathname === "/about") {
    res.end("Welcome to the about page of Server...");
  } else if (url.pathname === "/feedback") {
    res.end("Welcome to the feedback page of Server...");
  } else if (url.pathname === "/contact") {
    switch (req.method) {
      case "GET": {
        return res.end("Contact url trigerred using GET Method!!!");
      }
      case "POST": {
        return res.end("Contact url trigerred using POST Method!!!");
      }
      case "DELETE": {
        return res.end("Contact url trigerred using DELETE Method!!!");
      }
      case "PUT": {
        return res.end("Contact url trigerred using PUT Method!!!");
      }
      default:
        return res.end("Unknown Method");
    }
  } else if (url.pathname === "/users") {
    switch (req.method) {
      case "GET": {
        let result = users;
        for (var [key, value] of url.searchParams.entries()) {
          const keyReceived = key.toString();
          if (key === "minAge") {
            result = result.filter((user) => Number(user.age) >= Number(value));
          } else {
            result = result.filter(
              (user) =>
                user[key].toLocaleLowerCase() === value.toLocaleLowerCase(),
            );
          }
        }
        return res.end(JSON.stringify(result));
      }
      case "POST": {
        req.on("data", (chunk) => {
          console.log(chunk);
        });
        req.on("end", () => {
          console.log("Data receive done!!!");
        });
        return res.end("User url trigerred using POST Method!!!");
      }
      case "DELETE": {
        return res.end("User url trigerred using DELETE Method!!!");
      }
      case "PUT": {
        return res.end("User url trigerred using PUT Method!!!");
      }
      default:
        return res.end("Unknown Method");
    }
  } else {
    res.statusCode = 404;
    res.end("Page not found!!!");
  }
});

const port = process.env.SERVER_PORT || 5000;

myServer.listen(port, () => {
  console.log(
    `Congratulations!!! Your server is running at http://localhost:${port}/`,
  );
});
