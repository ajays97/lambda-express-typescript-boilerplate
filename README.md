## Why am I not using serverless framework?

I don't need configuring my endpoints and all other awesome features that serverless offers since this is a proxy API, the reason we are using express is to create a proxy so that routes and other stuff are all defined and configured as part of the express application. Claudia is just about sufficient to get it done.

# Running Express apps in AWS Lambda

This is a simple example that shows how to deploy an existing [Express](http://expressjs.com/) application, with minimal changes, to AWS Lambda.

## Running the example (I am a fan of yarn, hence.)

1. run `yarn` or `yarn install` to grab the dependencies
2. run `yarn generate-proxy` to create a simple proxy API for the express app
3. run `yarn deploy` to send everything up to AWS Lambda

The third step will print out a URL you can use to access the express app.

## Updating the app (Everything is in sweet sweet TypeScript.)

### Never change `module.exports = app` to something like `export default app`

1. Change [`app.ts`](src/app.ts)
2. (Optionally) use `npm install <PACKAGE NAME> -S` to install additional dependencies (always save them to `package.json` using `-S`)
3. Run `yarn update` to send the new version up to AWS. No need to generate the proxy again
4. Note: The package name will be the name of the role created in your aws IAM. (e.g., claudia-express-executor in this boilerplate.)

## More information and limitations

See the [Running Express Apps in AWS Lambda](https://claudiajs.com/tutorials/serverless-express.html) tutorial.
