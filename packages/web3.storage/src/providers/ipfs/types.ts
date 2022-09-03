/**
 * Configuration for the IPFS layer.
 * Must sepcify a node, but can also specify a cluster to pin data to.
 */
export type IPFSConfiguration = {
  node: IPFSNodeConfiguration
  hashAlg?: string
  cluster?: IPFSClusterConfiguration
}

/**
 * Singel node configuration
 */
export type IPFSNodeConfiguration = { url: string }

/**
 * Cluster configuration
 */
export type IPFSClusterConfiguration = {
  url: string
  auth?: { username: string; password: string }
}
