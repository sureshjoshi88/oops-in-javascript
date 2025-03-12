console.log("jai shree ram");

// function User(username,islogin, issgin){
//     this.username = username;
//     this.islogin = islogin;
//     this.issgin = issgin;
//     return this;
// }

// const user1 = new User("suresh",5,true);
// const user2 = new User("joshi",7,false);
// console.log(user1);
// console.log(user2);

// function cars(model,carnname,price){
//     this.model = model;
//     this.carnname = carnname;
//     this.price = price;
// }
// const user  = new cars("2025","scorpio s11","2200000")
// const user1  = new cars("2025","scorpio classic","2300000")
// console.log(user);
// console.log(user1);


// function bus(name,model,price){
//     this.name = name;
//     this.model = model;
//     this.price = price;
// } 
// const user = new bus("volvo",2025,10000000)
// console.log(user);


// class cars{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
// }
// let values = new cars("scorpio",2000000)
// console.log(values.name);



// class fruites{
//     constructor(name,wet){
//         this.name = name;
//         this.wet = wet;
//     }
// }

// const fruite = new fruites("banana","4kg")
// console.log(fruite);


// const students = {
//     fullName:"suresh joshi",
//     marks:97.5,
//     printMath : function (){
//         console.log("jai shree ram");

//     }
// }


// const employ ={
//     caltax(){
//         console.log("tax rate is 10%");

//     }
// }
// const karnarjun = {
//     salery:100000
// }

// karnarjun.__proto__ = employ




// class toyota{
//     constructor(brand,millage){
//         this.brand = brand;
//         this.millage = millage;
//         console.log("creating a new object");

//     }
//     start(){
//         console.log("start");

//     }
//     stop(){
//         console.log("stop");

//     }
//     setbrand(brand){
//         this.brand = brand
//     }
// }

// const fortun = new toyota("fortuner",16)
// console.log(fortun);

// // console.log(newcar.stop());
// let newcar = new toyota
// newcar.setbrand("scorpio classic")
// console.log(newcar);







// class parent{
//     hello(){
//         console.log("jai shree ram ");

//     }
// }

// class child extends parent{

// }
// let obj = new child;
// console.log(obj.hello());



// class person{
//     constructor(name){
//         this.spices="to see"
//         this.name = name
//     }
//     eat(){
//         console.log("yes eat");

//     }
//     sleep(){
//         console.log("yes sleep")
//     }
//     work(){
//         console.log("do nothing");

//     }
// }
// class engineer extends person{
//     constructor(branch){
//         console.log("the child constructor");
//         super(name);
//         this.branch = branch;
//         console.log("exit child consturtor");

//     }
//     work(){
//         console.log("to solve the problem");

//     }
// }
// class doctor extends person{
//     work(){
//         console.log("treat pacent");

//     }
// }
// let sureshobj = new engineer;




// let data = "infomation ";

// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewdata(){
//         console.log("data",data);
//     }
// }

// class admin extends user{
//     edittask(){
//         data = "some new vlaue"
//     }
// }   
// let student1 = new user("suresh","suresh@gmail.com")
// let student2 = new user("joshi","joshi@gmail.com")
// console.log(student1);


// let teacher1 = new user("aadtiya","add@hmail.com")

// let admin1 = new admin("suresh ji","king@gmail.com")


// class crateobj {
//     constructor(name,age){
//         this.name=name;
//         this.age= age;
//     }
//     printdetials(){
//         console.log(`name:-> ${this.name} , age :->${this.age}`);

//     }
// }
// let instance1 = new crateobj("suresh",20)
// instance1.printdetials()

// let instance2 = new crateobj("ankit",17)
// instance2.printdetials()



// class obj1 {
//     constructor(name,age,course,city){
//         this.name= name;
//         this.age= age;
//         this.course= course;
//         this.city= city;
//     }
//     printvalue(){
//         console.log(`Name :- ${this.name}`);
//         console.log(`Age :- ${this.age}`);
//         console.log(`Course :- ${this.course}`);
//         console.log(`City :- ${this.city}`);
//     }
// }
// const instanc1  = new obj1("suresh joshi",20,"software engineer","jaipur")
// instanc1.printvalue();

// const instance2 = new obj1("rahul yadav",34,"software engineer","jaipur")
// instance2.printvalue();



// class cars {
//     constructor(name, model, color, price) {
//         this.name = name;
//         this.modle = model;
//         this.color = color;
//         this.price = price;
//     }

//     printvalue() {
//         console.log(`Name: ${this.name}`)
//         console.log(`Model: ${this.modle}`)
//         console.log(`Color: ${this.color}`)
//         console.log(`Price: ${this.price}`)
//     }
// }

// let instance1 = new cars("scorepio", 25, "black", "2,200,000")
// instance1.printvalue()


// class students{
//     constructor(name,course,age,city){
//         this.name = name;
//         this.course = course;
//         this.age = age;
//         this.city = city;
//     }
//     printvlaue (){
//         console.log(`Name : ${this.name}`);
//         console.log(`Course : ${this.course}`);
//         console.log(`Age : ${this.age}`);
//         console.log(`City : ${this.city}`);
//     }
// }

// let instances = new students("suresh joshi","Software engineer",20,"jaipur");
// instances.printvlaue();


// class user{
//     constructor(brand){
//         this.brand = brand
//     }
//     printvalue(){
//         return "i have a " + this.brand
//     }
// }

// class child extends user{
//     constructor(brand,model){
//         super(brand)
//         this.model = model
//     }
//     resultvalue(){
//         console.log( this.printvalue() + " it is a " + this.model  )      
//     }
// }
// const finals = new child("scorpio","2025")
// let result = finals.resultvalue();
// console.log(result);


// class parent{
//     constructor(name){
//         this.name = name;
//     }
//     printvaleu(){
//         return this.name
//     }
// }

// class child extends parent{
// constructor(name,mobile){
//     super(name)
//     this.mobile = mobile;
// }
// finalValue(){
//     console.log(this.printvaleu(),this.mobile);
    
// }
// }

// let instanc1= new child("suresh",8824365208);
// instanc1.finalValue();





//inheritence in js


// class atm {
//     #balance = 0;
//     get displayBalance() {
//         console.log(this.#balance)
//     }
//     set updateBalance(updatedBalance) {
//         this.#balance = updatedBalance;
//     }
// }

// let user1 = new atm();
// console.log("balance before update")
// user1.displayBalance;

// console.log("balance after update")
// user1.updateBalance = 1200
// user1.displayBalance;


// class parent{
//     constructor(name){
//         this.name = name;
//     }
 
// }

// class child extends parent {
// constructor(name,address){
//     super(name)
//     this.address = address;
// }
// dispalyName(){
//     console.log("Name =",this.name,"the address is =",this.address);
    
// }
// }
// let child1 = new child("suresh","gangardi(merta city)")
// child1.dispalyName();


class mainBank{
    constructor(name,mobile,address){
        this.name = name;
        this.mobile = mobile;
        this.address = address;
    }
}
class user1 extends mainBank{
    constructor(name,mobile,address,bankName){
        super(name,mobile,address)
        this.bankName = bankName;
    }
    printValue(){
        console.log(` Name = ${this.name} \n mobile-number = ${this.mobile} \n address = ${this.address} \n bankname = ${this.bankName}`);
        
    }
}
class user2 extends mainBank{
    constructor(name,mobile,address,bankName){
        super(name,mobile,address)
        this.bankName = bankName;
    }
    printValue(){
        console.log(` Name = ${this.name} \n mobile-number = ${this.mobile} \n address = ${this.address} \n bankname = ${this.bankName}`);
        
    }
}
let instance = new user1("suresh","8824365208","gangardi","bank of baroda")
instance.printValue();
let instance1 = new user2("ankit","98280813132","chomu","reserve bank of india")
instance1.printValue();