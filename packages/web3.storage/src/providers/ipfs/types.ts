export type IPFSConfiguration = {
  node: IPFSNodeConfiguration
  hashAlg?: string
  cluster?: IPFSClusterConfiguration
}

export type IPFSNodeConfiguration = { url: string }

export type IPFSClusterConfiguration = {
  url: string
  auth?: { username: string; password: string }
}
