export const isFullContext = (config) => isApiContext(config) && isIndexerContext(config);
export const isApiContext = (config) => Boolean('api' in config && typeof config.api === 'object');
export const isIndexerContext = (config) => Boolean('indexer' in config && typeof config.indexer === 'object');
export var SupportedParachain;
(function (SupportedParachain) {
    SupportedParachain["KUSAMA"] = "kusama";
    SupportedParachain["ROCOCO"] = "rococo";
    SupportedParachain["BSR"] = "bsr";
    SupportedParachain["LOCAL"] = "local";
})(SupportedParachain || (SupportedParachain = {}));
//# sourceMappingURL=types.js.map