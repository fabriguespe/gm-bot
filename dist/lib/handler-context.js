export default class HandlerContext {
    message;
    constructor(message) {
        this.message = message;
    }
    async reply(content) {
        await this.message.conversation.send(content);
    }
}
//# sourceMappingURL=handler-context.js.map