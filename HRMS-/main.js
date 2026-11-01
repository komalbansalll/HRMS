const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors')
require('dotenv').config();//used to store sensitive information such as API keys, database passwords
const app = express();
app.use(cors())
app.use(express.json());

app.use('/uploads', express.static('uploads'))

require('./routes/user.route')(app) // we use app here to add routes to the HTTP server object, so that incoming requests can be handled properly.
require('./routes/designation.route')(app)
require('./routes/department.route')(app)
require ('./routes/leave.route')(app)
require('./routes/leave.type.route')(app)
require('./routes/company.route')(app)


mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,//which are used to avoid some deprecation warnings
                            //.option is used to parse the MongoDB connection string using the MongoDB driver's new connection string parser.
    useUnifiedTopology: true, //option is used to enable the new Server Discovery and Monitoring engine in the MongoDB driver.
                             // This engine provides improved performance and better handling of replica sets and sharded clusters. 
  })
  .then(() => {console.log("Database is connected sucessfully")})
  .catch((err) => {console.log("error", err.message)});


const port = process.env.PORT || 9000;
app.listen(port, () => {console.log(`Server is listening on port ${port}`);});


let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((n-i))+str.repeat(i));
}
let name = "Komal";
let reversedName = "";

for (let i = name.length - 1; i >= 0; i--) {
  reversedName += name[i];
}

console.log(reversedName); // Output: lamok
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num === 2) return true; // 2 is the only even prime number

  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false; // If num is divisible by any number other than 1 and itself, it's not prime
      }
  }

  return true; // If no divisors were found, num is prime
}

// Example usage:
console.log(isPrime(6));  // true
console.log(isPrime(10)); // false
