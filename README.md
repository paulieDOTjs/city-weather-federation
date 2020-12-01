# apollo-federation-template

## What is this for?

The most basic implementation of Apollo Federation that I could think of to demonstrate what it does. This repo is 2 services one for "cities" and one for "weather" and a gateway that merges them. After starting all 3 you can navigate to localhost:4000/graphql and use either service or both at the same time. Apollo Federation can take as many services as you'd like and combine it to one single schema, this is the basic setup to be used as a template.

## How to use?

```
yarn install
```

When that finishes

```
yarn install-all
```

When that finishes

```
yarn start:s
```

When that finishes

```
yarn start:g
```

or if you want it to run while you work.

```
yarn dev
```
