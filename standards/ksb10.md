**What APIs can an CBPII access?**

The Confirmation of Funds API Profile describes the flows and common functionality for the Confirmation of Funds API, which allows a Card Based Payment Instrument Issuer ('CBPII') to:

* Register an intent to confirm funds by creating a "funds confirmation consent" resource with an ASPSP, for agreement between the PSU and ASPSP. This consent is a long lived consent, and contains the length of time (expiration date) the customer (PSU) would like to provide to the CBPII; and
* Subsequently, make a request to confirm funds are available.
* Funds can only be confirmed against the currency of the account.

This profile should be read in conjunction with a compatible Read/Write Data API Profile which provides a description of the elements that are common across all the Read/Write Data APIs, and compatible individual resources.

For more details refer to :
<a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/confirmation-of-funds-api-profile.html/" class="external-link" rel="nofollow">Account &amp; Confirmation of Funds API Profile</a>
