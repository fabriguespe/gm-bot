import { DecodedMessage } from "@xmtp/xmtp-js";
export default class HandlerContext {
    message: DecodedMessage;
    constructor(message: DecodedMessage);
    reply(content: any): Promise<void>;
}
//# sourceMappingURL=handler-context.d.ts.map