export declare type IPFSConfiguration = {
    node: IPFSNodeConfiguration;
    hashAlg?: string;
    cluster?: IPFSClusterConfiguration;
};
export declare type IPFSNodeConfiguration = {
    url: string;
};
export declare type IPFSClusterConfiguration = {
    url: string;
    auth?: {
        username: string;
        password: string;
    };
};
