import { RequestContext } from './request-context';
export declare class RequestContextProvider {
    currentContext(): RequestContext;
    get(key: string): any;
    set(context: {
        [key: string]: any;
    }): void;
}
//# sourceMappingURL=request-context.provider.d.ts.map