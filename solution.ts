
type Values = string | number | boolean
function formatValue (value: Values) : string | number | boolean {

if(typeof value === "string") {
    return value.toUpperCase()
}

if(typeof value === "number") {
    return value * 10
}

if(typeof value === 'boolean') {
return !value
}
    
return value
}


function getLength(value : string | any[]) : number  {
    
if(typeof value === 'string'){
    return value.length
}

if(Array.isArray(value)){
    return value.length
}
 return  0
}


class Person  {
name : string;
age: number;

constructor(name: string, age: number){
    this.name = name
    this.age = age
}
 getDetails() : string {
   return `Name: ${this.name}, Age: ${this.age}`
 }
}
 

type Item = {
title : string;
rating : number
}

function filterByRating (items: Item[]) : Item[] {
   return items.filter(item => item.rating >= 4)
}




type Users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users : Users[]) : Users[] {
return  users.filter(user => user.isActive) 
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails (book : Book) : void {
const availability  = book.isAvailable ? "yes" : "NO";
 console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);




