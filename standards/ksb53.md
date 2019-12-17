**What is the correct way of creating and passing ConsentId?**

The PISP **must** begin a payment-order request by creating a **payment-order consent** resource through a **POST** operation. This will confirm the parameters of the consent agreed between the PSU and the PISP.  At this stage, the consent is considered "staged" as the PSU would need to authenticate with their ASPSP. The ASPSP responds with a ConsentId. This is the intent-id used when initiating the authorisation code grant.
