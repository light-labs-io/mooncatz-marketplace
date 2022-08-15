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
      createdAt
      updatedAt
    }
  }
`;
