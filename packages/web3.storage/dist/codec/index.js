export * from './types';
export * from './impl/json';
export const compose = (codeca, codecb) => ({
    encode: data => codecb.decode(codeca.decode(data)),
    decode: data => codeca.encode(codecb.encode(data)),
});
export const flip = (codec) => ({
    encode: data => codec.decode(data),
    decode: data => codec.encode(data),
});
//# sourceMappingURL=index.js.map