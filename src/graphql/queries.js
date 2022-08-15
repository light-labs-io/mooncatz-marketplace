/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      wallet
      tokens
      redeemed
      redeemDate
      discordId
      image
      username
      discriminator
      ethMintingWallet
      solMintingWallet
      nfts {
        contract
        tokenId
        traits
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wallet
        tokens
        redeemed
        redeemDate
        discordId
        image
        username
        discriminator
        ethMintingWallet
        solMintingWallet
        nfts {
          contract
          tokenId
          traits
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWalletByWalletAddress = /* GraphQL */ `
  query GetWalletByWalletAddress(
    $wallet: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getWalletByWalletAddress(
      wallet: $wallet
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wallet
        tokens
        redeemed
        redeemDate
        discordId
        image
        username
        discriminator
        ethMintingWallet
        solMintingWallet
        nfts {
          contract
          tokenId
          traits
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWalletByDiscordId = /* GraphQL */ `
  query GetWalletByDiscordId(
    $discordId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getWalletByDiscordId(
      discordId: $discordId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wallet
        tokens
        redeemed
        redeemDate
        discordId
        image
        username
        discriminator
        ethMintingWallet
        solMintingWallet
        nfts {
          contract
          tokenId
          traits
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
