# Gm Bot

Simple Gm bot

## Usage

```jsx
import "dotenv/config";
import run from "./lib/runner.js";
import HandlerContext from "./lib/handler-context.js";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender
  const { content, senderAddress } = context.message;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`gm`);
});
```

## Running the bot

> ⚠️ Bot kit is not compatible with `bun`. Use `npm` or `yarn`

```bash
# install dependencies
yarn install

# running the bot
yarn build
yarn start

# to run with hot-reload
yarn build:watch
yarn start:watch
```

## Variables

```bash
KEY= # 0x... the private key of the bot (with the 0x prefix)
XMTP_ENV=production # or `dev`
```
