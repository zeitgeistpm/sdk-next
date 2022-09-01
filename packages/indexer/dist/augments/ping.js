export const ping = async (indexer) => {
    const start = Date.now();
    await indexer.pingQuery();
    return Date.now() - start;
};
//# sourceMappingURL=ping.js.map