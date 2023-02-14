## Docker

To rus this project first you have to have docker installed on your machine.

to get docker follow this link: https://docs.docker.com/get-docker/

after you have docker installed you need to pull the postgres image from docker hub:

➜ docker pull postgres:latest

now that you have postgres installed you can run the following command to start the database:

➜ docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DATABASE=my_database -d postgres

## pnpm

in order to install the dependencies you need to have pnpm installed on your machine.

to get pnpm follow this link: https://pnpm.io/installation

after installing pnpm and having docker running with the postgres image you can run the following command to install the dependencies:

➜ pnpm install

## Running the project

after installing the dependencies you can run the following command to start the project:

➜ pnpm start:dev

### warning

if your database is not running you will get an error like this:

`error: database "my_database" does not exist`

you need to create the database manually by using some database manager like pgAdmin or DBeaver, in my case i use DBeaver.
you just have to click in databases and then create a new database with the name of the database you specified in the docker command.
