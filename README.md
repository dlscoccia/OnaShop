# Ona Shop

[Ona | Shop](https://onashop.herokuapp.com/)

![Homepage](https://res.cloudinary.com/dlscoccia/image/upload/v1651256041/gpcknq6bti4iov1qf4vy.png)
![Login](https://res.cloudinary.com/dlscoccia/image/upload/v1651256041/csik9ii4xedltmwt673z.png)
![Order](https://res.cloudinary.com/dlscoccia/image/upload/v1651256041/dte9zi2dzqcevcfwjr2l.png)
![Menu](https://res.cloudinary.com/dlscoccia/image/upload/v1651256041/iwpu0lma0dhmfsigmjhg.png)
![Admin Dashboard](https://res.cloudinary.com/dlscoccia/image/upload/v1651256041/alzpfi2dpqq15xlhcppx.png)
![Products Page](https://res.cloudinary.com/dlscoccia/image/upload/v1651256041/gypmybqthqvgkbztjixr.png)

To run locally, the database is needed.
```
docker-compose up -d
```

## Set environment variables
Rename the file __.env.template__ to __.env__

* MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/onadb
```

* Rebuild node modules and run Next
* 
```
yarn install
yarn dev
```


## Populate the database with test data

```
http://localhost:3000/api/seed
```

[API Documentation](https://documenter.getpostman.com/view/20726039/UyrEgEiD)
