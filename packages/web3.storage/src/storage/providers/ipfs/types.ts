/**
 * Configuration for the IPFS layer.
 * Must sepcify a node, but can also specify a cluster to pin data to.
 */
export type IPFSConfiguration = {
  node: IPFSNodeConfiguration
  cluster?: IPFSClusterConfiguration
  hashAlg?: string
}

/**
 * Singel node configuration
 */
export type IPFSNodeConfiguration = {
  /**
   * Uri for the ipfs node
   */
  url: string
  /**
   * Should it also pin when adding.
   * @default true
   */
  pin?: boolean
}

/**
 * Cluster configuration
 */
export type IPFSClusterConfiguration = {
  /**
   * Uri for the ipfs cluster
   */
  url: string
  /**
   * Authentication for the ipfs cluster REST api
   */
  auth?: { username: string; password: string }
}
