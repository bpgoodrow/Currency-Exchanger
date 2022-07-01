# Galactic Age Calculator
By Ben Goodrow

This is a web application that uses the www.exchangerate-api.com API to return exchange rates of different currencies.

## Link to GitHubPages
* 

## Technololgies Used
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description
This is a web application that uses the www.exchangerate-api.com API to return exchange rates of different currencies.

## Setup/Installation Requirements
* Clone this repository to your desktop.
* Navigate to the root directory.
* Open directory into text-editor.
* Run $ npm run install in root directory in terminal.
* Run $ npm run build in root directory in terminal.
* In browser navigate to https://www.exchangerate-api.com/docs/overview and follow instructions to create AIP key.
* Create .env file in root directory.
* add API key to .env file $ API_KEY=YOUR-API-KEY-HERE without any spaces, backticks or quotes. Its not a string.
* add .env to .gitignore file.
* add API key to API url with ${process.env.API_KEY}.


## Known Bugs
* API key in .env file returns 403 error.

## License
MIT

Copyright <2022> <Benjamin Goodrow>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.