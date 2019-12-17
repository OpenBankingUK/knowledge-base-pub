**What message should an ASPSP return when a TPP requests permissions to an endpoint that is not implemented?**

The standards do not specify the response in this situation. ASPSPs may:

* reject the account-access-consent with a status code of 400 and error code of `UK.OBIE.Field.Invalid` OR
* process the request successfully.

ASPSPs **must** make documentation available to TPPs (e.g. on their developer portals) which should specify which 'Conditional' / 'Optional' endpoints and fields have been implemented.

