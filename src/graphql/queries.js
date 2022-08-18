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
      items {
        items {
          id
          userID
          itemID
          createdAt
          updatedAt
        }
        nextToken
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      price
      description
      traits
      quantity
      users {
        items {
          id
          userID
          itemID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
        traits
        quantity
        createdAt
        updatedAt
          users(limit: 10000) {
              items {
                  user {
                      id
                      tokens
                      discordId
                  }
              }
          }
      }
      nextToken
    }
  }
`;
export const getUserItem = /* GraphQL */ `
  query GetUserItem($id: ID!) {
    getUserItem(id: $id) {
      id
      userID
      itemID
      user {
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
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      item {
        id
        name
        price
        description
        traits
        quantity
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserItems = /* GraphQL */ `
  query ListUserItems(
    $filter: ModelUserItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        itemID
        user {
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
          createdAt
          updatedAt
        }
        item {
          id
          name
          price
          description
          traits
          quantity
          createdAt
          updatedAt
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
        items(limit: 10000) {
            items {
                item {
                    description
                    id
                    name
                    price
                    quantity
                    traits
                }
            }
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
        items(limit: 10000) {
            items {
                item {
                    description
                    id
                    name
                    price
                    quantity
                    traits
                }
            }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
