i'm just begining to experiment on concepts like different .env files with different keys and swapping them between scripts, having two local databases one for development one for testing, so please excuse all the unefficient manual setup

## to run tests:

make a .env.test file with a DATABASE_URL key and the connection string of the test database containing it's name

example: DATABASE_URL=postgres://postgres:123456@localhost:5432/repoprovas123testando

make sure file in database/src/database contains the name of the test database, in the example above, repoprovas123testando

run 

```npm run createtestdb```

now you can run 

```npm run test```


## to setup and run the development environment:


make a .env file with a DATABASE_URL key and the connection string of the test database containing it's name

example: DATABASE_URL=postgres://postgres:123456@localhost:5432/repoprovas2

make sure file in database/src/database contains the name of the test database, in the example above, repoprovas2

run 

```npm run createdevdb```

now you can run 

```npm run dev```