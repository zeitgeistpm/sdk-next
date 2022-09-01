/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 *
 * @generic T - the type of the metadata
 * @returns MetadataCodec<T, string>
 */
export const JsonCodec = () => ({
    encode: data => JSON.parse(data),
    decode: data => JSON.stringify(data),
});
//# sourceMappingURL=json.js.map