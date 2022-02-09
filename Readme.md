# Koinos Nuxt Template

This is a template for a Koinos nuxt dApp.

## Whats inside?
This project is a simple boilerplate. 

It contains Nuxtjs, eslint, axios and koilib. 

To dodge CORS errors when using koilib locally, also fastify has been installed, to provide a local proxy server.


## Getting Started
Install the dependencies
```
yarn 
npm install
```
Start the koilib proxy 
```
node server.js
````
Run the dev environment
``` 
yarn dev
npm run dev
```

This version of the nuxt starterkit includes the current koilib cors workaround.

Check out the [gist](https://github.com/joticajulian/kondor/blob/main/server.js)

## Learn More

check out the following places:

[koinos.io](https://koinos.io)

[docs.koinos.io](https://docs.koinos.io)

[assembly script cdt](https://github.com/roaminroe/koinos-cdt-as)

[nuxtjs](https://nuxtjs.org/examples/routing/hello-world)