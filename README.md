# E-Commerce Backend [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshot
<img width="1377" alt="E-Commerce Screenshot" src="https://user-images.githubusercontent.com/70029654/127505547-27b73918-2f7d-4b35-ad5d-46e27ecb4a5a.png">


## Description

An E-Commerce backend app that utilizes Node.js, Sequelize, and Express.js. This app creates custom API endpoints which allow the user to create, read, update, and delete from the E-Commerce MySQL database. The database contains information about the products that the site will sell. The product information is compartmentalized in related tables within the database which were created using the ORM Sequelize.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [License](#License)
- [Collaboration](#Collaboration)

## Installation

### Dependencies: **Requires** **_Node.js_** installed on your computer

\
To install the npm dependencies cd into the main directory and run:

```
npm i

cd db && mysql -u root -p

source schema.sql

exit

cd..

npm run seed
```

## Usage
[<img width="641" alt="E-Commerce YT" src="https://user-images.githubusercontent.com/70029654/127418692-d2cb1d89-3035-4297-b518-7e3b020bb243.png">](https://youtu.be/K8jG-aDC6J8)


[Video Walkthrough](https://youtu.be/K8jG-aDC6J8)

To use this node app, clone the repo down, use the terminal to cd into the root directory. Then run:

```
npm start
```

Use the terminal and start up the server. You can then access the API endpoints througha web browser or Insomnia.

## Tests

To test please run:

```
npm test
```

## License

[MIT License](https://opensource.org/licenses/MIT)

## Collaboration

Please feel free to collaborate with me on this project! Just fork it and submit a well documented pull request.

If you have any questions, please contact me at techx@opayq.com
