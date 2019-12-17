**When should ASPSPs mark 'payment consent resource' as 'Rejected'?**

The ASPSP must mark the consent as 'Rejected' when the PSU does not complete the consent-authorisation flow.

The ASPSP must also set the status of the payment-order consent to Rejected, if the AuthorisationType requested by the PISP cannot be satisfied, after PSU Authentication. The ASPSP must respond back with an OAuth error response fields error specified as invalid_request and ***error_description*** containing an appropriate message.
