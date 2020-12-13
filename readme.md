<p align="center"><a href="http://pronazmul.com" target="_blank"><img src="https://i.ibb.co/t3QrXvM/1-c-QAZ2-Yr-Xqmmrs-KMFM4-o-Mw.jpg" width="600"></a></p>

 <h1 align="center">NODE | EXPRESSJS | MONGODB CRUD</h1> 

>## Definition: 

* NodeJS: Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.
* ExpressJS: Express, is a back end web application framework for Node.js.
* MongoDB: MongoDB is a cross-platform document-oriented NoSQL database program. 

>## Tools for Start Working: 
*  Install NodeJS your PC.
* 	You Can use any code editor I have used here VS Code.
* 	Postman: For Working with various request method & practice without user interface.

## Installation Commands
```sh
        npm init
        npm install express mongodb body-parser cors dotenv
        npm install nodemon --save-dev
        npm install express-fileupload
```

>## Required Packeges: 
*  <strong>body-parser</strong>: To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser. body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
* 	<strong>cors</strong>: CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources.
* 	<strong>env</strong>: Node. js provides a global variable process. env , an object that contains all environment variables available to the user running the application.
*  <strong>nodemon</strong>: In Node. js, you need to restart the process to make changes take effect. nodemon is a command-line interface (CLI) that wraps your Node app, watches the file system, and automatically restarts the process.
* <strong>express-fileupload</strong>: Express middleware for uploading files. It parses multipart/form-data requests, extracts the files if available, and make them available under req. files property.
