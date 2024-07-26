function Book (title, author, pages){
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;


}


const myBooks = [];


addbook("Green Eggs", "John Doe", 200);
addbook("Alice in Wonderland", "Lewis Carroll", 100);
addbook("Black Beauty", "Anna Sewell", 50);


const filterPages = myBooks.filter(pagefilter)

function pagefilter (pages){
    return pages.bookPages < 100;
}


const changeBooks = myBooks.map(book => {
    return {
        bookTitle: "Title:" + book.bookTitle,
        bookAuthor: "Author: " + book.bookAuthor,
        bookPages: book.bookPages,
    };
});
console.log("Modified");
filterPages.forEach(book => {

    console.log (`Book title: ${book.bookTitle}, Author: ${book.bookAuthor}, Pages: ${book.bookPages}`)
});








function addbook (title, author, pages){
    const newBook = new Book (title, author, pages);
    myBooks.push(newBook);
}

function searchBooksByTitle (title){
    return myBooks.filter(function (book){
        return book.bookTitle.toLowerCase().includes(title.toLowerCase());
    });
}

function searchBooksByAuthor (author){
    return myBooks.filter(function (book){
        return book.bookAuthor.toLowerCase().includes(author.toLowerCase());
    });
}
//  addbook("Green Eggs", "John Doe", 200);
//  addbook("Alice in Wonderland", "Lewis Carroll", 100);
//  addbook("Black Beauty", "Anna Sewell", 50);


// const myBooks = [book1, book2, book3];

// let book1 = new Book ("Green Eggs", "John Doe", 200);
// let book2 = new Book ("Alice in Wonderland", "Lewis Carroll", 100);
// let book3 = new Book ("Black Beauty", "Anna Sewell", 50);
// const myBooks = [book1, book2, book3];



console.log("All Books:");
myBooks.forEach( book => {
console.log (`Book title: ${book.bookTitle}, Author: ${book.bookAuthor}, Pages: ${book.bookPages}`)
});

console.log("Search By Titles:");
const titleSearch = searchBooksByTitle("Alice");

titleSearch.forEach (book => {

    console.log (`Book title: ${book.bookTitle}, Author: ${book.bookAuthor}, Pages: ${book.bookPages}`);
} );

console.log("Search By Authors: ")
const searchAuthor = searchBooksByAuthor("Doe");

searchAuthor.forEach(author =>{
    console.log (`Book title: ${author.bookTitle}, Author: ${author.bookAuthor}, Pages: ${author.bookPages}`);
});


console.log("Books with fewer than 100 pages: ")
// const filterPages = myBooks.filter(pagefilter)

// function pagefilter (pages){
//     return pages.bookPages < 100;
// }


filterPages.forEach(book => {

    console.log (`Book title: ${book.bookTitle}, Author: ${book.bookAuthor}, Pages: ${book.bookPages}`);

});

// ===============================================================================

// 2. Exploring Objects and Math in JavaScript

// Create account
// deposit fund
// withdraw
// calculate interest based on specific rates

function Account (accountNumber, balance, owner) {
    this.AccountNumber = accountNumber;
    this.AccountBalance = balance;
    this.AccountOwner = owner;


}


Account.prototype.deposit = function (amount, accountNumber, owner){
    if(this.AccountNumber === accountNumber && this.AccountOwner === owner){
        if (this.AccountBalance > 0) {
            if (amount > 0){
                this.AccountBalance += amount
                console.log(`You Deposited: $${amount}. New balance is ${this.AccountBalance}.`)
                return amount;          
           
            }
            
        } else {
            console.log("Current balance must be more than 0. ");
            return 0;
        }
    } else{
            console.log("Your account information does not match.");
            return 0;
        }
    };

Account.prototype.withdraw = function (amount, accountNumber, owner) {
    if (this.AccountNumber === accountNumber && this.AccountOwner === owner ) {
        if (amount <= this.AccountBalance && amount > 0) {
            this.AccountBalance -= amount;
            console.log(`Withdraw $${amount}. New balance is $${this.AccountBalance}.`);
            return amount;

        } else {
            console.log ('You do not have enough money to withdraw.');
        } 
    } else {
        console.log("Your account information does not match.");
        return 0;
        }
    };



    Account.prototype.calculateCompoundInterest = function(years, interestRate, timesCompounded) {
        const P = this.AccountBalance;
        const r = interestRate / 100;
        const n = timesCompounded;
        const t = years;
        const A = P * Math.pow((1 + r / n), n * t);
        return Math.ceil(A);
    };

const myAccount = new Account("493698", 2000, "John Doe");

myAccount.deposit (500, "493698", "John Doe" );
myAccount.withdraw (200, "493698", "John Doe");
myAccount.withdraw (-1, "493698", "John Doe");
myAccount.deposit (300, "493698", "Sam Doe");

const compoundInterest = myAccount.calculateCompoundInterest(5, 5, 4);
console.log(`Interest after 5 years: $${compoundInterest}`);






