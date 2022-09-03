/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      price
      description
      traits
      quantity
      slots
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      price
      description
      traits
      quantity
      slots
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      price
      description
      traits
      quantity
      slots
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
export const createUserItem = /* GraphQL */ `
  mutation CreateUserItem(
    $input: CreateUserItemInput!
    $condition: ModelUserItemConditionInput
  ) {
    createUserItem(input: $input, condition: $condition) {
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
export const updateUserItem = /* GraphQL */ `
  mutation UpdateUserItem(
    $input: UpdateUserItemInput!
    $condition: ModelUserItemConditionInput
  ) {
    updateUserItem(input: $input, condition: $condition) {
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
export const deleteUserItem = /* GraphQL */ `
  mutation DeleteUserItem(
    $input: DeleteUserItemInput!
    $condition: ModelUserItemConditionInput
  ) {
    deleteUserItem(input: $input, condition: $condition) {
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
