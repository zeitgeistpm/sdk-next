import { ping } from './ping';
export const augments = (gql) => {
    return {
        ping: () => ping(gql),
    };
};
//# sourceMappingURL=index.js.map