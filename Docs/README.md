# PropertyChain

## Application of the Project

PropertyChain is a solution for storing Land Registry Records in a Permissioned Blockchain. For this purpose, we use Hyperledger Sawtooth developer by Intel Labs as the framework.


## Description

Land Registry using Blockchain is done to ensure that the property related data remains safe and unforged as many people lose their properties due to illegal exploitation of political power and lack of transparency for these systems.
Blockchain play a significant role in solving these problems as the data can be set to be publicly viewable with some access controls. Since, Blockchain is a public, immutable ledger, the data loss and documents forgery can be minimised to a very large extent, thus providing a transparency to these land registry systems which till now has been in control of very few people.

## Getting Started

### Prerequisites

You need to ensure the following prerequisites to run this on your system.

```
sudo apt-get update
```
```
sudo apt get-install nodejs
```
```
sudo apt-get install npm
```

```
sudo apt-get install docker
```


### Running

To run the project open a terminal in the root folder and run the command given below, this will automatically runn other command inside it.

    ```
    cd /PropertyChain
    ```
    ```
    sudo docker-compose up
    ```

This will initialise your project inside a container.

Enter into the Validator Bash using the following command

```
sudo docker exec -it validator bash
```

Below command will help you create a Public key and Private key for a particular user.

```
sawtooth keygen key1
```

To view the Private Key,

```
cat /root/.sawtooth/keys/key1.priv
```

You can use this Private Key to login to the Citizen Portal.


### Permissioning the keys


Again in the previously opened Validator Bash, type the command below to give PERMISSIONING to the keys.


```
sawtooth identity policy create --key ~/.sawtooth/keys/my_key.priv policy_1 "PERMIT_KEY current publickey​" “PERMIT_KEY ​public key of the generated key​” --url http://rest-api:8008
```


### Working

1. Once you run the command,

```
sudo docker-compose up
```
open your Web Browser and go to the URL "http://localhost:3000" .


2. Go to ipfs-uploads folder and run 
```
npm start
```

3. Make sure the folders transferdata, uploads and userdata are empty.

