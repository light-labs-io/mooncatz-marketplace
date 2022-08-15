/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateUserItem = /* GraphQL */ `
  subscription OnCreateUserItem {
    onCreateUserItem {
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
export const onUpdateUserItem = /* GraphQL */ `
  subscription OnUpdateUserItem {
    onUpdateUserItem {
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
export const onDeleteUserItem = /* GraphQL */ `
  subscription OnDeleteUserItem {
    onDeleteUserItem {
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
