# Basic Redis Message Queue Example

This repository contains a minimalistic redis message queue. There is one publisher written in javascript (`publisher`) and there are 2 subscribers. One written in rust (`rust-sub`) and one written in javascript (`subscriber`);

In order for these to work you will have to:

- Install cargo / rustup
- Install NodeJS and npm
- Run `npm install` inside of `publisher` and `subscriber`
- Have set a `REDIS_URL` environment variable with a URL pointing towards your redis instance

Then you can run them.
