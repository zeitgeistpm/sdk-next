export const isFullContext = (config) => isApiContext(config) && isIndexerContext(config);
export const isApiContext = (config) => Boolean('api' in config && typeof config.api === 'object');
export const isIndexerContext = (config) => Boolean('indexer' in config && typeof config.indexer === 'object');
//# sourceMappingURL=types.js.map