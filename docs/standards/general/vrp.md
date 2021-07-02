<!-- TOC -->

- [**What is VRP?**](#what-is-vrp)
- [**Where can we find VRP for Sweeping Access Journey?**](#where-can-we-find-vrp-for-sweeping-access-journey)
- [**Where can we find VRP requirements?**](#where-can-we-find-vrp-requirements)
- [**Where can we find Sweeping requirements?**](#where-can-we-find-sweeping-requirements)
- [**Can PSU revoke VRP consent at the PISP?**](#can-psu-revoke-vrp-consent-at-the-pisp)
- [**Can PSU revoke the VRP payment order once it has been initiated by the PISP?**](#can-psu-revoke-the-vrp-payment-order-once-it-has-been-initiated-by-the-pisp)
- [**Can PSU revoke VRP access at ASPSP?**](#can-psu-revoke-vrp-access-at-aspsp)
- [**Does 90-day re-authentication apply to VRP?**](#does-90-day-re-authentication-apply-to-vrp)
- [**Can a PSU re-authenticate their consent and what would be the trigger situations for these?**](#can-a-psu-re-authenticate-their-consent-and-what-would-be-the-trigger-situations-for-these)
- [**Can PSU select their debtor account at ASPSP before authorising the VRP Consent?**](#can-psu-select-their-debtor-account-at-aspsp-before-authorising-the-vrp-consent)
- [**How does PISP ensure that the source and destination account belong to the same PSU while performing a sweeping activity?**](#how-does-pisp-ensure-that-the-source-and-destination-account-belong-to-the-same-psu-while-performing-a-sweeping-activity)
- [**Can the ASPSP apply ‘Transfer to Self’ exemption over ‘Trusted Beneficiary’ SCA exemption when the PSU is transferring funds between their own accounts at the same ASPSP?**](#can-the-aspsp-apply-transfer-to-self-exemption-over-trusted-beneficiary-sca-exemption-when-the-psu-is-transferring-funds-between-their-own-accounts-at-the-same-aspsp)

<!-- /TOC -->
### **What is VRP?**

VRP means Variable Recurring Payment. For more refer to the Proposition paper- [Definition of VRP](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1939243099/Proposition+-+Variable+Recurring+Payments+VRPs#3.1-Definition-of-Variable-Recurring-Payments-(VRPs))

### **Where can we find VRP for Sweeping Access Journey?**

Refer to CEG - [VRP Payments under Sweeping Access](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp/vrp-payments-under-sweeping-access/latest/)

### **Where can we find VRP requirements?**

Refer to Proposition - [Proposition - Variable Recurring Payments (VRPs) | 8.-Requirements-for-the-VRP-Standards](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1939243099/Proposition+-+Variable+Recurring+Payments+VRPs#8.-Requirements-for-the-VRP-Standards) 

### **Where can we find Sweeping requirements?**

Refer to Proposition - [Proposition - Variable Recurring Payments (VRPs) | 9.-Requirements-for-VRP-Sweeping-Access](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1939243099/Proposition+-+Variable+Recurring+Payments+VRPs#9.-Requirements-for-VRP-Sweeping-Access) 

Where can we find VRP Specifications?

Refer to Specifications -  https://openbankinguk.github.io/read-write-api-site3/v3.1.8/profiles/vrp-profile.html

### **Can PSU revoke VRP consent at the PISP?**

PISPs are expected to provide a mechanism within their domain to enable the PSU to revoke their consent for initiation of any future payment orders, by revoking the authorisation of VRP Consent. 

### **Can PSU revoke the VRP payment order once it has been initiated by the PISP?**

No, the specifications do not support the revocation of a payment order once it has been initiated by the PISP as contemplated in Article 80. 
Note that this is different from revoking a VRP consent - this can be done at any point in time by the PSU. When a VRP Consent is revoked, payments that are in-flight (ie initiated but not yet completed) may still get paid. The exact behaviour of such payments may differ between ASPSPs.

### **Can PSU revoke VRP access at ASPSP?**

ASPSP are expected to provide a mechanism within their domain to enable the PSU to revoke their VRP consent access.  This will not revoke any inflight VRP payments orders that have already been initiated by the PISP but will preclude the initiation of future payment order within the VRP consent,  provided that the ASPSP has revoked the VRP consent resource object.

### **Does 90-day re-authentication apply to VRP?**

The “90-day rule” arises from Article 10 of the RTS. This applies specifically to account information services only and VRPs consents are not in scope of this. 

### **Can a PSU re-authenticate their consent and what would be the trigger situations for these?**

There may be exceptional circumstances where the PSU will be required to undergo strong customer authentication at their ASPSP, following the initial VRP consent set up. In instances where the ASPSP  has revoked the access token, the PSU will need to go through a re-authentication journey. 

### **Can PSU select their debtor account at ASPSP before authorising the VRP Consent?**

Yes, there are two ways in which PSU can provide their debtor account. The debtor account can firstly be provided in the domain of the PISP as part of the consent journey or alternatively in the domain of the ASPSP as part of the authentication journey, where the ASPSP will present the PSU with an option to select an account.

### **How does PISP ensure that the source and destination account belong to the same PSU while performing a sweeping activity?**

PISP must ensure that they have satisfied themselves that source and destination accounts belong to the same PSU, and this includes instances where account selection happens at the ASPSP. It is in the competitive space of each PISP to ensure that they have created the appropriate mechanism to achieve this based on their service offering.  PISPs must ensure that they attest that the activity is sweeping when making VRP payments in this context. 

### **Can the ASPSP apply ‘Transfer to Self’ exemption over ‘Trusted Beneficiary’ SCA exemption when the PSU is transferring funds between their own accounts at the same ASPSP?**

Yes, the ASPSP may apply ‘Transfer to Self’ over ‘Trusted Beneficiary’ or any other relevant SCA exemption if it is more appropriate.

Note: The [VRP payments under sweeping access](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp/vrp-payments-under-sweeping-access/latest/) journey in CEG, demonstrates an example where sweeping is happening between two accounts of the same PSU but at different ASPSP and hence Trusted Beneficiary SCA exemption is demonstrated.