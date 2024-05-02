import HandlerContext from "./handler-context.js";
type Handler = (context: HandlerContext) => Promise<void>;
export default function run(handler: Handler, newBotConfig?: any): Promise<void>;
export {};
//# sourceMappingURL=runner.d.ts.map