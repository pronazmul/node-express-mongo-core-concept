<p align="center"><a href="http://pronazmul.com" target="_blank"><img src="https://i.ibb.co/t3QrXvM/1-c-QAZ2-Yr-Xqmmrs-KMFM4-o-Mw.jpg" width="600"></a></p>

 <h1 align="center">NODE | EXPRESSJS | MONGODB CRUD</h1> 

>## Definition: 

* NodeJS: Representational Source Transfer.
* ExpressJS: Application Programming interface.
* MongoDB: To use single database in various platforms IOT (internet of things) Devices. Transfer or use data from one software to another software. 

<p align="center"><a href="#" ><img src="https://i.ibb.co/xqgDfFX/A75-F0359-2-BED-4-B42-A562-12-E5-D044-DF2-F.png" width="500"></a></p> 

>## Properties: 
* Client-server: Works Between Client & SERVER.
* Stateless / Rest: Never Store any Data inside API Script.
* Cacheable: Device Can Store Cache but API not.
* Uniform interface: Various methods can operate from a single URL/Route. 

>## Tools for Start Working: 
* 	xampp: For Apache & MySQL Support;
* 	composer: Php Package Manager;
* 	Sequence: First XAMPP then composer, composer depends on XAMPP php.
* 	Postman: For Working with various request method, browser only works with get() method.

## Expression To check Name
>Conditions:
* Only Uppercase, LowerCase & Spaces Are allowed
* Length Should be between 5 to 20

```sh 
Expression = /^([a-zA-Z ]){5,20}$/

Check:
if(!Expression.test(name)){
      alert("invalid Name")
   }
```

## Expression To check Password
>Conditions:
* Required Number, Uppercase, Lowercase & Special char
* Length Must be 6 to 15 

```sh
Expression = /^(?=.*[0-9])(?=(?:[^A-Z]*[A-Z]){1})(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/

Check:
if(!Expression.test(password)){
      alert("invalid password")
   }
```

## Expression To check Email
>Conditions:
* Required Special Char: @ . 
* Required tex@text.text

```sh
Expression = /\S+@\S+\.\S+/

Check:
if(!Expression.test(email)){
      alert("invalid email")
   }
```
## Expression To check Number & Set Number Range
>Conditions:
* Required only number
* Length Must be 2 to 12

```sh
Expression = /^([0-9 ]){2,12}$/

Check:
if(!Expression.test(number)){
      alert("invalid Number")
   }
```
