# Fastify on Zeit Now 2.0

A Fastify project starter ready to be deployed on Zeit Now serverless platform.

### What's included
- Handlebars as templating engine ([others](https://github.com/fastify/point-of-view) are supported as well)
- Milligram (sass) in `/scss` directory

*Note : `api/server.js` is the entry point. You can configure and change in `now.json` file*

## Prerequisites
- Node >= 10
- A Zeit account [> signup](https://zeit.co)
- Now CLI installed globally
- Node-sass installed locally or globally

## Get started
1. Install all dependencies
```
npm install
```
2. Run Node-sass to keep watching for scss files update
```
npm start
```
*Note: Alias to `node-sass --watch`, see `package.json` to edit*

3. Run server locally for testing
```
now dev
```

4. Deploy app when ready
```
now
```

Enjoy !

***

Fastify for Serverless https://www.fastify.io/docs/latest/Serverless/

Zeit Now 2.0 https://zeit.co/now

Licence MIT