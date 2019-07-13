# PROPERTYCHAIN

## DOCUMENTATION

### USER

1. Once the project is up and running, you find find a login page in the start.

2. Open a new terminal and run
```
sudo docker exec -it validator bash
```

3. Create keys for the users and validators and give the permissioning for the validators using the command given in README.md

4. Use the user's private key, aadhar card number and name to login to he user's console.

5. Once inside the console, you will find a form to submit the request for a new peroperty registration along with uploading the document.

6. To view all the registered properties, enter all the details once again and click on dashboard to view all the registered properties which are saved onto the state.

7. To transfer the ownerhip of a land, fill the details from the dashboard and click on submit.

### VALIDATOR

1. Login to the validator's dashboard using their private key.

2. The request for property registration will be displayed in a tabular format.

3. To retrieve the hash value of a document, enter the corresponding aadhar card number and click on "retrieve hash" and refresh the page.

4. After offline verification, to add the data to a block, enter the aadhar card number of the user and enter the validator's private key to add the data to the block.

5. After offline verification, to reject the request, enter the aadhar card number and click on reject.

6. To view all the data stored in the state, click on "view data" button.

7. To view all the transfer ownership requests, click on transfer button and enter the required details to transfer the property ownership.
