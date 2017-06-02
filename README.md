# Todo App
Simple Todo App on Spring Boot and React
Running on Heroku: [Todo App](https://young-wave-83610.herokuapp.com/)

Need login for adding Todos, default users
* user:user
* admin:admin

## Dependencies
* Java 8
* Maven

For deveploment of UI 
* node v7.10.0
* yarn v0.24.6

## Development
### Running the backend (recommended)
The recommended way to launch the apps for development - it will download dependecies for build back end a tools for build frontend
`mvn spring-boot:run`

on `http://localhost:8080`
     
### Running the frontend (recommended)

`Maven` will be building UI, but for Hot reloading of frontend and development state of react. It need BE server be running for proxing requests.

`cd src/main/frontend`
`yarn start`

on `http://localhost:9090/`


 
