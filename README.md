# Crowdfunding <!-- omit in toc -->

## Contents <!-- omit in toc -->
- [Prerequisites](#prerequisites)
- [How to run](#how-to-run)
  - [Compile](#compile)
  - [Migrate](#migrate)
  - [Testing](#testing)
- [Resources](#resources)

## Prerequisites

- Node
- npm
- Truffle: you can install it by running `npm install -g truffle` on your terminal if you already have Node and npm

## How to run

### Compile

```sh
truffle compile
```

### Migrate

```sh
truffle develop
```

On the Truffle Develop prompt, run the migrate command:

```sh
truffle(development)> migrate
```

### Testing

Run all the tests by simply typing the next command:

```sh
truffle test ./test/*
```

## Resources

- [Truffle docs](https://trufflesuite.com/docs/truffle/index.html)