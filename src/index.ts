import "dotenv/config";
import run from "./lib/runner.js";
import HandlerContext from "./lib/handler-context.js";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender
  const { content, senderAddress } = context.message;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`gm`);
});
