// console.log(true);

// let a = 78;
// a = true;
// a = 64;
// console.log(a);

// let num:number = 5;
// let str: string = 'Hello world';
// let bool: boolean = true;

// let a: null = null;
// let b: undefined = undefined;

// let c: number | string = 'text';

// c = 45;

// let a: any = 'hello';
// a = true;
// a = {name: 'Mike'};

// let b: unknown = true;
// console.log(b + 7); error

// let numArr: number[] = [35, 48, 65];
// arr.push = 'Hello'; error

// let strArr: string[] = ['Mike', 'John'];
// let boolArr: boolean[] = [true, false];

// let numOrStrArr: (number | string)[] = [454, 'asdf'];
// let anyArr: any[] = [true, null, undefined, 'String', 64];

// const arr: readonly number[] = [789, 46, 123];
// arr.push(5)

// let obj: {name: string, age: number | string, email: string} = {
//     name: 'Mike',
//     age: 45,
//     email: 'test@mail.ru'
// }

// class User {
//     name: string;
//     age: number;
//     email: string;
//     userName?: string;
//     constructor() {

//     }
// }

// let users: User[] = [
//     {
//         name: 'Mike',
//         age: 5,
//         email: 'Test@mail.ru'
//     },
//     {
//         a: 'Mike',
//         b: 5,
//         c: 'Test@mail.ru'
//     },  error
// ]

// function test(num: number) : void{
//     console.log(num);
// }

// test(45)

// function test(num: number) : void{
//     console.log(num);
//     return 45;
// }

// test(45)

// function test(num: number) : number{
//     console.log(num);
//     return 47;
// }

// console.log(test(45));

// function test(num?: number) : number{
//     console.log(num);
//     return 47;
// }

// console.log(test());

// function test<T, U, E>(a: T, b: U, c: E) : T {
//     let d: T = a;
//     return a;
// }

// test<number, string, boolean>(45, '', true);
// test<number[], string[], boolean[]>([78], [''], [true]);
// test<string, number, string>('', 45, 'text');

// function test<Type>(a: number) : Type{
//     return 45;
// }

// test<number>(78);

// class User {
//     name: string;
//     public l_name: string;
//     protected age: number;
//     private email: string;

//     constructor(_name: string, _l_name: string, _age: number, _email: string) {
//         this.name = _name;
//         this.l_name = _l_name;
//         this.age = _age;
//         this.email = _email
//     }

//     private showName() : number | string{
//         return this.email;
//     }
// }

// let newUser: User = new User('Vahan', 'Hakobyan', 15, 'vahan.hakobyan@exampel.com');
// console.log(newUser.age);
// console.log(newUser.email);

// class User<Type, U>{
//     isMarried: Type;
//     name: string;
//     constructor(name: string, married: Type){
//         this.isMarried = married;
//         this.name = name;
//     }

//     showName(a: U) : U{
//         return a;
//     }
// }

// let user: User = new User<string, number>('Yes', 'Mike')

// class Chidl{
//     name: string,
//     lastName: string,
//     age: number,
//     married: boolean,
//     job: null
// }

// class User{
//     id: number;
//     name: string;
//     lastName: string;
//     age: number;
//     email: string;
//     phone: null;
//     child: Chidl
// }


// let user = {
//     id: 1,
//     name: 'Mike',
//     lastName: 'Smith',
//     age: 78,
//     email: 'test@mail.ru',
//     phone: null,
//     child: {
//         name: 'Joe',
//         lastName: 'Smith',
//         age: 50,
//         married: true,
//         job: null
//     }
// }

// abstract class Book {
//     id: number;
//     name: string;
//     email: string;

//     abstract showName();
//     showEmail(){

//     }
// }

// let book:Book  = new Book();

// class HarryPotter extends Book{
    // constructor(parameters) {
        
    // }
//     showName() {
        
//     }
// }

// interface Book{
//     id: number;
//     name: string;
//     pubYear: number;

//     showName(): string;
// }

// let book: Book{
//     id: 5,
//     name: 'Some',
//     pubYear: 1656,
//     showName: function () {
//         return this.name
//     }
// }


// interface Book{
//     id: number;
//     name: string;
//     pubYear: number;

//     showName(): string;
// }

// class HarryPotter implements Book{
//     id: number;
//     name: string;
//     pubYear: number;
//     constructor(parameters) {
        
//     }

//     showName(){
//         return this.name;
//     }
// }

// let div: HTMLElement = document.getElementById('div')
let el: HTMLCollection = document.getElementsByTagName('div')
