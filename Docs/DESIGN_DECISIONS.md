# PROPERTYCHAIN

## DESIGN_DECISIONS

1. The namespace used for storing the data is by hashing the family_name and the user's aadhar card number because in our application, the aadhar card number is the only unique data.

2. The data entered by the users gets written in a file and stored locally. This is done because the validator might view the requests a couple of days after the request is placed. Hence, there should be some way for data persistence. Even the file is stored in the same way for this puspose.

3. While adding the data to the block, the validator has to unput the aadhar card number of the user and validator's private key to ensure that only the validator who has logged in can be able to do the transaction.

4. The transfer of ownership is done by the validator after passing the buyer's and seller's details is because only the validator will get to know the public key of both the parties and not themselves.
