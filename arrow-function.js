let greet = (user) => {
     console.log('hello' + user);
     return 1 ;
}

// console.log(greet('navin'))

let add = (number, number2) => number + number2;
let result = add(5, 6)
// console.log(result )

let multyply = (num1, num2, num3) => num1 * num2 * num3;

let calculation = multyply(10, 5, 30);
// console.log(calculation)

const howIam = `i am a web developer.
 i love to code.
 i love to eat biryani`;

// console.log(howIam)

//arrow fuction for default paramitar
let defaultParamitar = (num1, num2=10) => num1 + num2;
let cal = defaultParamitar(10);

// console.log(cal)

// const myFriend = ['rohim', 'korim', 'hofike', 'ali'] ;
// // const length = myFriend.length;
// // // console.log(length)

// const getCollection = [... myFriend];

// const checkEven = getCollection.split(" ");
// console.log(checkEven)

//calculate 3 number with arrow function
const multyplyNum = (first, second, thard) => first * second * thard;

const resultTota = multyplyNum(10, 15, 23);
// console.log(resultTota)

const envenFriendName = [];
const myFriendName = ['abul', 'kabuil', 'chabulkalim', 'dabul', 'shofilUddin'];
const friendCollaction = myFriendName.map(friend => friend.length);
const eventname = friendCollaction.filter(friend => friend %2 ===0);
envenFriendName.push(eventname);
// console.log(envenFriendName);

const spuare = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)/spuare.length;

const spuareResult = spuare(20, 20, 20, 20);
// console.log(spuareResult);

//5
const array1 =[34, 52, 85, 10, 10, 56];
const array2 =[20, 650, 12, 89, 13, 20];

const combainArry = [...array1, ...array2];
const maxNumber = Math.max(...combainArry);
// console.log(maxNumber);

//6 
const oddArray = [1, 3, 5, 7, 9].map(n => n + 1);
// console.log(oddArray)

//7
const divisebol =[33, 50, 79, 78, 90, 101, 30];
const divisebolNumber = divisebol.filter(n => n% 10 === 0);
// console.log(divisebolNumber)
//8
const findNumber = divisebol.find(n => n % 10 === 0);
// console.log(findNumber)
 
//9 
const newArray = [1, 9, 17, 22];
const sumNumber = newArray.reduce((priveous, current) => priveous + current, 0);
// console.log(sumNumber)

const people = [
     {name: 'Meena', age:20},
     {name: 'Mina', age:15},
     {name: 'Suchorita', age:22},
     {name: 'kabul', age:20}
]


const getAges = people.map(n => n.age)
const getTotal = getAges.reduce((priveous, current) => priveous + current, 0)

// console.log(getTotal)

//10
const student = {
     name: 'Fredie',
     age: 26,
}

const accessname = student.age
// console.log(accessname)

let data = {
     location:[{
          latitude:'34.5, 37.8',
          longitude: '98.77, 58.7',
          city: 'bangladest',
          country: 'highland'
     }
     ]
};

const cityname = data.location[0].city;
// console.log(cityname);

//11
const user = {
     id: 1,
     name: 'Leanne Graham',
     userName :'Brert',
     email: 'sing@gmail.com',
     address:{
          street:'kaula LIgt',
          suite: 'Apt. 556',
          city: 'Gewnborough',
          zipcode: '96565431',
          geo:{
               lat: '-37.33554',
               lng: '81.14654'
          }
     },
     phone: '3211984521 x6545',
     website: 'hildgere.org',
     company:{
          name:'Romagus-cron',
          catchPhrase: 'multi-layer clint neural-net',
          bs:'haness real-time e-marks'
     }

}

// console.log(user.email);
// console.log(user.address);
// console.log(user.address.city)
// console.log(user.address.geo.lng)
// console.log(user.company.name)

const {email} = user;
