## Read Write Data Specification <!-- omit in toc -->

- [What is the Read/Write API Specification?](#what-is-the-readwrite-api-specification)
- [Where can I find the latest version of API specifications?](#where-can-i-find-the-latest-version-of-api-specifications)
- [Where can I find the timings for Implementing Open Banking Roadmap?](#where-can-i-find-the-timings-for-implementing-open-banking-roadmap)
- [Are there any known issues in the latest version of Specifications?](#are-there-any-known-issues-in-the-latest-version-of-specifications)
- [Where can I find the latest version of Swagger Specifications?](#where-can-i-find-the-latest-version-of-swagger-specifications)
- [What APIs can an AISP access?](#what-apis-can-an-aisp-access)
- [What APIs can an CBPII access?](#what-apis-can-an-cbpii-access)
- [How can the ASPSP inform the AISP that access has been revoked?](#how-can-the-aspsp-inform-the-aisp-that-access-has-been-revoked)
- [What APIs can an PISP access?](#what-apis-can-an-pisp-access)
- [Which payment-order types are supported by the PIS API?](#which-payment-order-types-are-supported-by-the-pis-api)
- [Are there different signing policies for Event Notifications?](#are-there-different-signing-policies-for-event-notifications)
- [What is the Event Notification API?](#what-is-the-event-notification-api)
- [How can a TPP register with the ASPSP to receive event notifications?](#how-can-a-tpp-register-with-the-aspsp-to-receive-event-notifications)
- [How can a TPP register with the ASPSP to receive event notifications?](#how-can-a-tpp-register-with-the-aspsp-to-receive-event-notifications-1)
- [Are there separate swagger specifications for Real-time (push) notifications and aggregated polling?](#are-there-separate-swagger-specifications-for-real-time-push-notifications-and-aggregated-polling)
- [How should my redirect URIs be encoded?](#how-should-my-redirect-uris-be-encoded)
- [What length of URIs should be allowed for redirect](#what-length-of-uris-should-be-allowed-for-redirect)
- [What do we refer to as mandatory GET endpoints?](#what-do-we-refer-to-as-mandatory-get-endpoints)
- [How can ASPSPs provide relevant charges to a PISP?](#how-can-aspsps-provide-relevant-charges-to-a-pisp)
- [Can a PISP display an ASPSP's charges to the PSU?](#can-a-pisp-display-an-aspsps-charges-to-the-psu)
- [Can an ASPSP display their charges to the PSU during authentication?](#can-an-aspsp-display-their-charges-to-the-psu-during-authentication)
- [What if a PISP does not provide the optional 'ChargeBearer' field?](#what-if-a-pisp-does-not-provide-the-optional-chargebearer-field)
- [Which ChargeTypes would be used for a SEPA Credit Transfer or SWIFT payment?](#which-chargetypes-would-be-used-for-a-sepa-credit-transfer-or-swift-payment)
- [Can an ASPSP provide statements to an AISPs in non-JSON file format?](#can-an-aspsp-provide-statements-to-an-aisps-in-non-json-file-format)
- [What are the implementation timelines for a newly published specification or guidelines?](#what-are-the-implementation-timelines-for-a-newly-published-specification-or-guidelines)
- [Do TPPs have to implement the Consent Dashboard?](#do-tpps-have-to-implement-the-consent-dashboard)
- [Is OBErrorResponse1/Errors/Message mandatory, and what level of detail is expected?](#is-oberrorresponse1errorsmessage-mandatory-and-what-level-of-detail-is-expected)
- [When should ASPSPs mark 'payment consent resource' as 'Rejected'?](#when-should-aspsps-mark-payment-consent-resource-as-rejected)
- [When should ASPSPs reject a Payment-Order?](#when-should-aspsps-reject-a-payment-order)
- [Can AISPs change the permission language?](#can-aisps-change-the-permission-language)
- [Is it mandatory to implement refresh_token-expires_at?](#is-it-mandatory-to-implement-refreshtoken-expiresat)
- [Does an ASPSP need to delete Client related consents once TPP has deleted Client?](#does-an-aspsp-need-to-delete-client-related-consents-once-tpp-has-deleted-client)
- [Is it possible to amend or revoke a standing order (SO) or scheduled payment (FDP)?](#is-it-possible-to-amend-or-revoke-a-standing-order-so-or-scheduled-payment-fdp)
- [What types and lengths of account identification are supported?](#what-types-and-lengths-of-account-identification-are-supported)
- [Does the ASPSP always have to redirect back to the TPP?](#does-the-aspsp-always-have-to-redirect-back-to-the-tpp)
- [What message should an ASPSP return when a TPP requests permissions to an endpoint that is not implemented?](#what-message-should-an-aspsp-return-when-a-tpp-requests-permissions-to-an-endpoint-that-is-not-implemented)
- [When a TPP calls the Party or Parties endpoint, will they always receive the PartyType attribute?](#when-a-tpp-calls-the-party-or-parties-endpoint-will-they-always-receive-the-partytype-attribute)
- [Is there a list of all ASPSPs participating in the Open Banking Ecosystem?](#is-there-a-list-of-all-aspsps-participating-in-the-open-banking-ecosystem)
- [What error code should an ASPSP send back to a TPP if a wrong x-fapi-financial-id was sent in the request?](#what-error-code-should-an-aspsp-send-back-to-a-tpp-if-a-wrong-x-fapi-financial-id-was-sent-in-the-request)
- [Are File Payments supported in the Standard for both personal and business accounts?](#are-file-payments-supported-in-the-standard-for-both-personal-and-business-accounts)
- [How can we know if an ASPSP supports File Payment endpoint?](#how-can-we-know-if-an-aspsp-supports-file-payment-endpoint)
- [Can ASPSPs create their own enumeration when required?](#can-aspsps-create-their-own-enumeration-when-required)
- [Have any ASPSPs requested new values to be added to enumeration?](#have-any-aspsps-requested-new-values-to-be-added-to-enumeration)
- [Which field should ASPSPs map to the TPP's name to show the PSU in the Consent UI?](#which-field-should-aspsps-map-to-the-tpps-name-to-show-the-psu-in-the-consent-ui)
- [Does an AISP need to display OBIE defined data clusters and permission language in the UI?](#does-an-aisp-need-to-display-obie-defined-data-clusters-and-permission-language-in-the-ui)
- [How can the ASPSP inform the AISP that access has been revoked?](#how-can-the-aspsp-inform-the-aisp-that-access-has-been-revoked-1)
- [What Resource URI Path Structure should be used while implementing the Read Write API Specification v3.1.2?](#what-resource-uri-path-structure-should-be-used-while-implementing-the-read-write-api-specification-v312)
- [What is the correct way of creating and passing ConsentId?](#what-is-the-correct-way-of-creating-and-passing-consentid)
- [What error should be returned if an account is in derogatory status (e.g. Fraud Stop)?](#what-error-should-be-returned-if-an-account-is-in-derogatory-status-eg-fraud-stop)
- [Can a PISP create consent in a previous version and a payment order resources in a newer version?](#can-a-pisp-create-consent-in-a-previous-version-and-a-payment-order-resources-in-a-newer-version)
- [Can a PISP create consent in a new version and a payment order resource using an older version?](#can-a-pisp-create-consent-in-a-new-version-and-a-payment-order-resource-using-an-older-version)
- [Which error codes should be used when a TPP submits incorrect JSON (e.g. extra quotes, invalid date and time, etc)?](#which-error-codes-should-be-used-when-a-tpp-submits-incorrect-json-eg-extra-quotes-invalid-date-and-time-etc)
- [Does a TPP need to return id_token_signed_response_alg if they only support code as response type?](#does-a-tpp-need-to-return-idtokensignedresponsealg-if-they-only-support-code-as-response-type)

### **What is the Read/Write API Specification?**

The Read/Write API specification describes a collection of RESTful APIs that enable authorised TPPs to access online payment accounts held at ASPSPs, securely, efficiently and with customer consent.

### **Where can I find the latest version of API specifications?**

Please see <a href="https://openbankinguk.github.io/read-write-api-site3/" class="external-link" rel="nofollow">Read Write API Specifications</a>

### **Where can I find the timings for Implementing Open Banking Roadmap?**

The timings are defined in the Open Banking Roadmap [Open-Banking-Revised-Roadmap-July-2018.pdf](https://www.openbanking.org.uk/wp-content/uploads/Open-Banking-Revised-Roadmap-July-2018.pdf).

These implementation timings apply to the CMA9, as required by the CMA Order. The implementation timings for all other ASPSPs are defined separately by the respective NCA in each member state.

### **Are there any known issues in the latest version of Specifications?**

Yes, there are and it is recommended to read the specifications in conjunction with the
<a href="https://openbanking.atlassian.net/wiki/spaces/DZ/pages/47546479/Known+Specification+Issues/" class="external-link" rel="nofollow">Known Specification Issues</a>

### **Where can I find the latest version of Swagger Specifications?**

The Swagger Specification for Read/Write APIs can be downloaded from the following GitHub Repository:

<a style="text-decoration: none;" href="https://github.com/OpenBankingUK/read-write-api-specs" class="external-link" rel="nofollow">https://github.com/OpenBankingUK/read-write-api-specs</a>

### **What APIs can an AISP access?**

The Account and Transaction API Profile describes the flows and common functionality for the Accounts and Transaction API, which allows an Account Information Service Provider ('AISP') to:

* Register an intent to retrieve account information by creating an "account access consent". This registers the data "permissions", expiration and historical period allowed for transactions/statements - that the customer (PSU) has consented to provide to the AISP; and

* Subsequently, retrieve account and transaction data.

The links to the list of Account &amp; Transaction APIs :
<a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/account-and-transaction-api-profile.html/" class="external-link" rel="nofollow">Account &amp; Transaction APIs</a>

### **What APIs can an CBPII access?**

The Confirmation of Funds API Profile describes the flows and common functionality for the Confirmation of Funds API, which allows a Card Based Payment Instrument Issuer ('CBPII') to:

* Register an intent to confirm funds by creating a "funds confirmation consent" resource with an ASPSP, for agreement between the PSU and ASPSP. This consent is a long lived consent, and contains the length of time (expiration date) the customer (PSU) would like to provide to the CBPII; and
* Subsequently, make a request to confirm funds are available.
* Funds can only be confirmed against the currency of the account.

This profile should be read in conjunction with a compatible Read/Write Data API Profile which provides a description of the elements that are common across all the Read/Write Data APIs, and compatible individual resources.

For more details refer to :
<a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/confirmation-of-funds-api-profile.html" class="external-link" rel="nofollow">Account &amp; Confirmation of Funds API Profile</a>

### **How can the ASPSP inform the AISP that access has been revoked?**

The OB solution supports the revocation of consent at the TPP dashboard and the revocation of access at the ASPSP dashboard.

When access is revoked at the ASPSP access dashboard by the PSU, the TPP can be notified as follows:-

* Real-time/ Push Notifications: The functionality enables ASPSPs to notify AISPs in real-time (i.e. immediately) when a PSU revokes their access at their ASPSP dashboard or other account access changes events take place.
* Aggregated polling / Pull Notifications: This enables the provision of notification of revocations from ASPSPs to AISPs, upon AISP request. It allows an AISP to request an aggregated set of access revocations and other account access events related to multiple access consents from multiple PSUs during a specific period.

For more details refer to: [customer-experience-guidelines/ais-core-journeys/access-status-notifications-by-aspsps](https://standards.openbanking.org.uk/customer-experience-guidelines/ais-core-journeys/access-status-notifications-by-aspsps/latest/)

### **What APIs can an PISP access?**

The Payment Initiation API Profile describes the flows and common functionality for the Payment Initiation API, which allows a Payment Initiation Service Provider ('PISP') to:

* Register an intent to **stage** a payment-order consent.

* Optionally confirm available funds for a payment-order (domestic immediate, international immediate and international scheduled (immediate debit) payments only.

* Subsequently **submit** the payment-order for processing.

* Optionally retrieve the status of a payment-order **consent** or payment-order **resource** .

For more details refer to :
<a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/payment-initiation-api-profile.html" class="external-link" rel="nofollow">Payment Initiation API Profile</a>

### **Which payment-order types are supported by the PIS API?**

* Domestic payments.
* Domestic scheduled payments.
* Domestic standing orders.
* International payments.
* International scheduled payments.

### **Are there different signing policies for Event Notifications?**

The signing policy for any resource isn't dependent on the Swagger File. It is up to the ASPSP's implementation of the Events resource, e.g. <a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/event-notification-api-profile.html#event-notification-message-signing" class="external-link" rel="nofollow">Event Notification Message Signing</a> and is similar to any other Read/Write API specification, other than the JWT's signature (JWS) which is sent in the HTTP body of the request, as opposed to a detached JWS sent in the HTTP header.

### **What is the Event Notification API?**

The Event Notification API Profile describes the flows and common functionality to allow a TPP to receive event notifications.

This covers a number of use cases, including:

* Updates to the status of a payment initiation (e.g. when there are multiple authorisations required in the ASPSP interface).
* Revocation of AISP access by the PSU in the ASPSP interface.

For more details refer to :
<a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/event-notification-api-profile" class="external-link" rel="nofollow">event-notification-api-profile</a>

### **How can a TPP register with the ASPSP to receive event notifications?**

The  <a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/event-notification-subscription-api-profile.html" class="external-link" rel="nofollow">Event Notification Subscription API Profile</a> and the  <a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/callback-url-api-profile.html" class="external-link" rel="nofollow">Callback URL API Profile</a> provide alternative mechanisms for TPPs to register for event notifications.
* The Event Notification Subscription API allows TPPs to register to receive all or specific event types via the Real-Time Event Notification API and/or the Aggregated Polling API
* The Callback URL API allows TPPs to register to receive `aurn:uk:org:openbanking:events:resource-updateevent` notification via the Real-Time Event Notification API.

### **How can a TPP register with the ASPSP to receive event notifications?**

The  <a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/event-notification-subscription-api-profile.html" class="external-link" rel="nofollow">Event Notification Subscription API Profile</a> and the  <a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/callback-url-api-profile.html" class="external-link" rel="nofollow">Callback URL API Profile</a> provide alternative mechanisms for TPPs to register for event notifications.
* The Event Notification Subscription API allows TPPs to register to receive all or specific event types via the Real-Time Event Notification API and/or the Aggregated Polling API
* The Callback URL API allows TPPs to register to receive `aurn:uk:org:openbanking:events:resource-updateevent` notification via the Real-Time Event Notification API.

### **Are there separate swagger specifications for Real-time (push) notifications and aggregated polling?**

Event Subscription, CallbackURLregistration and Aggregated Polling specifications are all hosted by the ASPSP, while the TPP hosts the endpoint to receivereal-time push notifications.

As of v3.1.3, there are four Swagger specification files, one for each Events Resource:

* [event-subscriptions-openapi](https://github.com/OpenBankingUK/read-write-api-specs/blob/v3.1.3/dist/event-subscriptions-openapi.yaml)
* [read-write-api-specs](https://github.com/OpenBankingUK/read-write-api-specs/blob/v3.1.3/dist/callback-urls-openapi.yaml)
* [aggregated-polling-openapi](https://github.com/OpenBankingUK/read-write-api-specs/blob/v3.1.3/dist/aggregated-polling-openapi.yaml)
* [event-notifications-openapi](https://github.com/OpenBankingUK/read-write-api-specs/blob/v3.1.3/dist/event-notifications-openapi.yaml)


### **How should my redirect URIs be encoded?**

Both ASPSPs and TPPs should format all URIs using URL encoding. Participants should accept all URLs which have been URL encoded. (see [here](https://www.w3schools.com/tags/ref_urlencode.asp)).

### **What length of URIs should be allowed for redirect**

OBIE does not define a maximum URI length.

The URI limit is something that is enforced by your server and client. It is reasonable to assume URIs could be as much as 2048 characters, which is the lowest limit of any of the major, modern browsers.

Participants should be able to handle the URIs of unbounded length if they provide GET-based forms that could generate such URIs. In the event where the TPP has exceeded the maximum supported length, the ASPSP must return a 414 (Request-URI Too Long).

### **What do we refer to as mandatory GET endpoints?**

The GET endpoint enables the PISP to check the status of the payment consent resource.

The GET endpoints listed below are considered mandatory for implementation. This would be applicable irrespective of whether the response in both POST and the GET remains the same.

* GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}
* GET /domestic-standing-orders/{DomesticStandingOrderId}
* GET /international-scheduled-payments/{InternationalScheduledPayment}
* GET /international-standing-orders/{InternationalStandingOrderPaymentId}

### **How can ASPSPs provide relevant charges to a PISP?**

The Open Banking Write specification enables the ASPSP to provide any relevant charges related to the payment order to the PISP in two ways:-

(a) When the PISP sets up the payment order, the ASPSP can populate relevant charges (including a breakdown) as part of the payment consent response (name of response which is returned to the PISP.

(b) When the PISP submits the payment order, the ASPSP can respond by including any relevant charges (including a breakdown) as part of the payment response, which is returned to the PISP.

For more details refer to : [api-specifications/red-write-specs/latest/](https://standards.openbanking.org.uk/api-specifications/red-write-specs/latest/)

<a href="https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1077805881/Domestic+Payments+v3.1.2">Domestic Payments v3.1.2</a>
* Domestic Payment Consent - Response (xpath - OBWriteDomesticConsentResponse3/Data/Charges).
* Domestic Payment - Response (xpath - OBWriteDomesticResponse3/Data/Charges).

<a href="https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1077806166/International+Payments+v3.1.2">International Payments v3.1.2</a>
* International Payment Consent - Response (xpath - OBWriteInternationalConsentResponse3/Data/Charges).
* International Payment - Response (xpath - OBWriteInternationalResponse3/Data/Charges).

### **Can a PISP display an ASPSP's charges to the PSU?**

The PISP could display any relevant ASPSP charges related to the payment order during the consent stage of their journey, however, this will be dependent on whether the ASPSP has shared these charges with the PISP as part of the payment consent response.

### **Can an ASPSP display their charges to the PSU during authentication?**

Yes, the ASPSP can provide any supplementary information related to the payment, like charges (if applicable) to the PSU as part of their authentication journey.

Please refer to the following example journeys in CEG:

* International Payment Journey - CEG Checklist #9.
* Domestic Payments - a/c selection @PISP (Supplementary Info) - Additional Information.

### **What if a PISP does not provide the optional 'ChargeBearer' field?**

If the PISP does not provide a charge bearer value in the payment consent request payload, and if this cannot be determined (e.g. in case of SEPA payment) then the ASPSP should not reject the payment, but it should seek to get this information from the PSU via the supplementary information screen as part of authentication journey.

### **Which ChargeTypes would be used for a SEPA Credit Transfer or SWIFT payment?**

Within the specified OBExternalPaymentChargeType1Code enum, the namespaced enumeration for charge types is not intended to be exhaustive, and ASPSPs can add their own enumerations.

### **Can an ASPSP provide statements to an AISPs in non-JSON file format?**

Yes, an ASPSP can provide a statement to the AISP using non JSON file format. The link to access this statement using a non JSON file format:

<a href="https://openbankinguk.github.io/read-write-api-site3/v3.1.3/resources-and-data-models/aisp/Statements.html#get-accounts-accountid-statements-statementid-file/" class="external-link" rel="nofollow">GET /accounts/{AccountId}/statements/{StatementId}/file
</a>

### **What are the implementation timelines for a newly published specification or guidelines?**

Please refer to the Operational Guidelines: <a href="https://standards.openbanking.org.uk/operational-guidelines/change-and-communication-management/implementation-of-a-new-obie-standard/latest/" class="external-link" rel="nofollow">Implementation of a new OBIE Standard</a>

* It is up to ASPSPs to take their own position of which version of each component of the Standard they chose to implement in order to meet both regulatory and commercial requirements.
* OBIE recommends that where an ASPSP chooses to implement a new version of any component of the Standard, they should implement each new major version within six months, and each new minor version within three months of the Standard being published by OBIE.

ASPSPs should provide notification of any changes to TPPs at least three months prior to those changes taking effect.

### **Do TPPs have to implement the Consent Dashboard?**

While there is no regulatory requirement for the provision of a consent dashboard by TPPs, OBIE strongly encourages all TPPs to provide a consent dashboard to their customers to enable view and revoke on-going consents.

### **Is OBErrorResponse1/Errors/Message mandatory, and what level of detail is expected?**

This is considered a mandatory field and ASPSPs must include a description of the error that occurred. E.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'

OBIE does not standardise this field and it is up to each ASPSP to determine the appropriate level of detail to provide an adequate description of the error that has taken place to the TPP.

TPPs will need to determine which error codes to implement depending on the relevant error code(s) applicable to them and their service offerings.

### **When should ASPSPs mark 'payment consent resource' as 'Rejected'?**

The ASPSP must mark the consent as 'Rejected' when the PSU does not complete the consent-authorisation flow.

The ASPSP must also set the status of the payment-order consent to Rejected, if the AuthorisationType requested by the PISP cannot be satisfied, after PSU Authentication. The ASPSP must respond back with an OAuth error response fields error specified as invalid_request and ***error_description*** containing an appropriate message.

### **When should ASPSPs reject a Payment-Order?**

An ASPSP must reject an authorization request when the underlying intent object is associated with a CutoffDateTime that has elapsed. The ASPSP must not issue an access token in such a situation. The ASPSP must set the status of the payment-order consent resource to “Rejected”.

### **Can AISPs change the permission language?**

The AISP must ensure they have business rules that manage the relationship between data clusters and product type. They must omit access to data clusters that are irrelevant to a product type, as well as their service offering. If an AISP requests a cluster of data that is irrelevant to the product type associated with the payment account e.g. Direct Debit cluster requested for a Savings Account product type, the ASPSP may provide that cluster as empty.

For more guidance, refer to [customer-experience-guidelines/account-information-services/permissions-and-data-clusters/latest/](https://standards.openbanking.org.uk/customer-experience-guidelines/account-information-services/permissions-and-data-clusters/latest/)

### **Is it mandatory to implement refresh_token-expires_at?**

If the ASPSP issues a refresh token, the ASPSP must indicate the date-time at which the refresh token will expire in a claim named http://openbanking.org.uk/refresh_token_expires_at in the Id token (returned by the token end-point or user info end-point). Its value MUST be a number containing a NumericDate value, as specified in https://tools.ietf.org/html/rfc7519#section-2

If the ASPSP does not issue a refresh token, the ASPSP **must not** populate the http://openbanking.org.uk/refresh_token_expires_at the claim in the Id token.

If the ASPSP issues a refresh token that does not expire, the ASPSP **must** populate the claim named http://openbanking.org.uk/refresh_token_expires_at in the Id token with a value representing the number of seconds to 03:14:07 UTC on 19 January 2038 (end of UNIX epoch).

For more details refer to: [read-write-data-api-profile.html#token-expiry-time](https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/read-write-data-api-profile.html#token-expiry-time)

### **Does an ASPSP need to delete Client related consents once TPP has deleted Client?**

This relates to client registration that the TPP does with each ASPSP.

The OBIE Standard is silent on Client registration and De-registration. It is up to ASPSPs to decide their approach in alignment with FAPI and OpenId Connect.

### **Is it possible to amend or revoke a standing order (SO) or scheduled payment (FDP)?**

If a PSU has given consent to a PISP to initiate a SO or FDP, then the SO and FDP cannot be amended or cancelled via a PISP directly following payment initiation. However, it is expected that customers should be able to amend or cancel a SO or FDP in the domain of their ASPSP, provided that this functionality is available in the direct online channels.

### **What types and lengths of account identification are supported?**

UK.OBIE.SortCodeAccountNumber is specific to UK. The SchemeName field is namespaced, meaning the ASPSP/PISP may use a different scheme name, if it is not already defined in OBIE specifications.

The identification field is 256 characters long so you can add more than 14 characters if required.

### **Does the ASPSP always have to redirect back to the TPP?**

The OBIE Standard supports 2 methods of authentication: redirection and decoupled.

For redirection, OBIE's research has suggested that redirection screens are a useful part of the process, providing customer trust. The following reasons are noted:

They help customers navigate their online journey and inform them of what is going to happen next.
They help create a clear sense of separation between the TPP’s domain and the ASPSP’s domain.
For more details, please refer to Customer Experience Guidelines:

  * <a href="https://standards.openbanking.org.uk/customer-experience-guidelines/authentication-methods/latest/#Redirection_based/" class="external-link" rel="nofollow">Redirection based authentication</a>

* <a href="https://standards.openbanking.org.uk/customer-experience-guidelines/authentication-methods/redirection/section-b/latest#Effective-use-redirection-screens" class="external-link" rel="nofollow">Effective use of redirection screens</a>

### **What message should an ASPSP return when a TPP requests permissions to an endpoint that is not implemented?**

The standards do not specify the response in this situation. ASPSPs may:

* reject the account-access-consent with a status code of 400 and error code of `UK.OBIE.Field.Invalid` OR
* process the request successfully.

ASPSPs **must** make documentation available to TPPs (e.g. on their developer portals) which should specify which 'Conditional' / 'Optional' endpoints and fields have been implemented.

### **When a TPP calls the Party or Parties endpoint, will they always receive the PartyType attribute?**

It is optional for the ASPSPs to provide the PartyType field as part of the Party or Parties endpoint.

ASPSPs **must** make documentation available to TPPs (e.g. on their developer portals) which should specify which 'Conditional' / 'Optional' endpoints and fields have been implemented.

### **Is there a list of all ASPSPs participating in the Open Banking Ecosystem?**

Together with UK Finance and FDATA, OBIE has developed and maintains a list of ASPSPs here: <a href="https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1145209627/Transparency+Calendar/" class="external-link" rel="nofollow">Transparency Calendar</a>

This shows key information including: contact details, which directory is being used, and a link to a page maintained by each ASPSP showing further details of the APIs being implemented by each. While this list does not guarantee to include all UK ASPSPs, it is intended to be as comprehensive as possible.

### **What error code should an ASPSP send back to a TPP if a wrong x-fapi-financial-id was sent in the request?**

The `x-fapi-financial-id` header was required up until Version 3.1.1 of the OBIE Read-write API profile. ASPSPs that implement this version must reject an invalid request with a 403 (Forbidden).

The requirement for providing `x-fapi-financial-id` in the request header was removed from FAPI and subsequently removed from Version 3.1.2 of the Read/Write API Specification.

### **Are File Payments supported in the Standard for both personal and business accounts?**

File Payments allow a file of payment requests to be uploaded to an ASPSP for payment initiation. Implementation of this endpoint is 'Conditional' which means the ASPSP must implement if the same functionality is supported for their PSUs (which could be for Business and/or Personal accounts) on their existing online channels.

### **How can we know if an ASPSP supports File Payment endpoint?**

ASPSPs must make documentation available to TPPs (e.g. on their developer portals) to which 'Conditional' / 'Optional' endpoints and fields are implemented for any given implementation of the specification.

### **Can ASPSPs create their own enumeration when required?**

Yes, ASPSPs can create their own enumerations.

The OBIE Specification includes various fields of Enumerated data types, where either the values are fixed to an OBIE defined set of alternatives (i.e. Static Enumerations), or flexible with an initial OBIE defined set of alternatives, and ASPSPs can use/extend these alternatives (i.e. Namespaced Enumerations).

See : [namespaced-enumerations](https://openbankinguk.github.io/read-write-api-site3/v3.1.3/references/namespaced-enumerations.html)

### **Have any ASPSPs requested new values to be added to enumeration?**

ASPSPs do not need to approach OBIE before adding new enumerated values. They are free to do so, when necessary.

### **Which field should ASPSPs map to the TPP's name to show the PSU in the Consent UI?**

ASPSPs should display the name of the authorised TPP and additionally, if relevant, the name of the any agent acting on behalf of the TPP. This should be displayed during the consent journey and in any access dashboards as indicated in the Customer Experience Guidelines.

Where an ASPSP is relying on a Software Statement Assertion (for example via the Open Banking Directory), the name of the TPP is the value of the org_name field, and the agent is the value of the software_on_behalf_of_org field. For more details, please see: [directory-api-specs](https://github.com/OpenBankingUK/directory-api-specs)

### **Does an AISP need to display OBIE defined data clusters and permission language in the UI?**

While not a specific regulatory requirement, AISPs are strongly encouraged to clearly display the OBIE data clusters and permission language to the PSU as part of their consent journey.

### **How can the ASPSP inform the AISP that access has been revoked?**

The OB solution supports the revocation of consent at the TPP dashboard and the revocation of access at the ASPSP dashboard.
When access is revoked at the ASPSP access dashboard by the PSU, the TPP can be notified as follows:-
* Real-time/ Push Notifications: The functionality enables ASPSPs to notify AISPs in real-time (i.e. immediately) when a PSU revokes their access at their ASPSP dashboard or other account access changes events take place.
* Aggregated polling / Pull Notifications: This enables the provision of notification of revocations from ASPSPs to AISPs, upon AISP request. It allows an AISP to request an aggregated set of access revocations and other account access events related to multiple access consents from multiple PSUs during a specific period.

For more details refer to :
<a href="https://standards.openbanking.org.uk/customer-experience-guidelines/ais-core-journeys/access-status-notifications-by-aspsps/latest/" class="external-link" rel="nofollow">Customer Experience Guidelines - Access Status notifications by ASPSPs</a>

### **What Resource URI Path Structure should be used while implementing the Read Write API Specification v3.1.2?**

If implementing Version 3.1.2, the major version is 3 and the minor version is 1. The last .2 indicates a patch release and must not be present in the URI path. In this case, the implementer must define the resource URI path as 3.1.

### **What is the correct way of creating and passing ConsentId?**

The PISP **must** begin a payment-order request by creating a **payment-order consent** resource through a **POST** operation. This will confirm the parameters of the consent agreed between the PSU and the PISP.  At this stage, the consent is considered "staged" as the PSU would need to authenticate with their ASPSP. The ASPSP responds with a ConsentId. This is the intent-id used when initiating the authorisation code grant.

### **What error should be returned if an account is in derogatory status (e.g. Fraud Stop)?**

It is up to each ASPSP to decide whether to send a 403 or a 200 with an empty response, in consideration to relevant regulatory obligations e.g AML, where applicable.

### **Can a PISP create consent in a previous version and a payment order resources in a newer version?**

A PISP **must not** create a payment-order consent ConsentId on a previous version and use it to create a payment-order resource in a newer version.

* E.g., A PaymentId created in v1, must not be used to create a v3 DomesticPaymentId.

### **Can a PISP create consent in a new version and a payment order resource using an older version?**

A PISP **must not** create a payment-order consent ConsentId on a newer version and use it to create a payment-order resource in a previous version.

* E.g., A ConsentId created in v3, must not be used to create a v1 PaymentSubmissionId.

### **Which error codes should be used when a TPP submits incorrect JSON (e.g. extra quotes, invalid date and time, etc)?**

The ASPSP should respond with 400 (Bad Request) and the relevant Namespaced Enumeration.

Please see [incomplete-or-malformed-request-payload](https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/read-write-data-api-profile.html#incomplete-or-malformed-request-payload) and [namespaced-enumerations](https://openbankinguk.github.io/read-write-api-site3/v3.1.3/references/namespaced-enumerations.html)

### **Does a TPP need to return id_token_signed_response_alg if they only support code as response type?**

No. The TPP need to return `id_token_signed_response_alg` only when the response type is `code id_token`. This is the algorithm that the TPP expects to sign the id_token if an id_token is returned.