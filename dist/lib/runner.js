import xmtpClient from "./client.js";
import HandlerContext from "./handler-context.js";
export default async function run(handler, newBotConfig) {
    const client = await xmtpClient(newBotConfig);
    for await (const message of await client.conversations.streamAllMessages()) {
        try {
            if (message.senderAddress === client.address) {
                continue;
            }
            const context = new HandlerContext(message);
            await handler(context);
        }
        catch (e) {
            console.log(`error`, e);
        }
    }
}
//# sourceMappingURL=runner.js.map