import { isApiContext, isFullContext, isIndexerContext } from './context';
export const sdk = async (context) => {
    ensure(isFullContext(context) || isApiContext(context) || isIndexerContext(context), () => new Error(`@zeitgeistpm/sdk: Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`));
    return { ...context };
};
const ensure = (expression, onError) => {
    if (!expression)
        throw onError();
};
//# sourceMappingURL=index.js.map