export const encode = (str) => {
    try {
        return btoa(str);
    }
    catch (err) {
        return Buffer.from(str).toString('base64');
    }
};
//# sourceMappingURL=b64.js.map