# Variable Recurring Payments FAQs

[[toc]]

## **Sweeping**

### **Where can we find the definition of sweeping?**
Refer to CEG - [VRPs for sweeping](https://standards.openbanking.org.uk/other-guidelines/vrp-for-sweeping-guidelines/latest/#sweeping)

### **Where can we find Sweeping requirements?**
Refer to Proposition - [Proposition - Variable Recurring Payments (VRPs) | 9.-Requirements-for-VRP-Sweeping-Access](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1939243099/Proposition+-+Variable+Recurring+Payments+VRPs#9.-Requirements-for-VRP-Sweeping-Access)

### **Where can we find VRP for Sweeping Access Journey?**

Refer to CEG - [VRP Payments under Sweeping Access](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp/vrp-payments-under-sweeping-access/latest/)

### **Where can we find latest VRP specifications for sweeping?**

Refer to Specifications - [Variable Recurring Payments API Profile](https://openbankinguk.github.io/read-write-api-site3/v3.1.10/profiles/vrp-profile.html) 

### **Where can we find more guidelines for sweeping?**

Refer to Implementation guidelines in CEG [VRPs for sweeping](https://standards.openbanking.org.uk/other-guidelines/vrp-for-sweeping-guidelines/latest/)

<!--- These are sweeping related FAQs based on new defintion from RM. Need to review and publish at a later stage

### **Would paying a utility bill fall under the definition of Sweeping?**

No.  When funds reach the destination account, they no longer belong to the customer, so this is not moving a customer’s own funds between account’s owned by them, but rather is a means of paying for goods and services which is explicitly excluded from the definition.

### **Can I pay into an investment account if funds are collected into a virtual account and distributed into different investment funds?**

If the funds remain under the ownership of the payer at all times and the destination accounts confer beneficial ownership to the payer then the transaction is likely to be considered to be the movement of a customer’s own funds between accounts owned by them and so qualifies as Sweeping. 

### **Can VRPs under Sweeping Access be used to fund my online wallet/account?**

This depends on the specific nature of the transaction.  

If the VRP is being initiated to pay for a transaction(s) that has been completed (e.g. the purchase of goods using a prepaid card or a closed-loop payment system) then the transaction is unlikely to meet the criterion of moving a customer’s own funds between accounts owned by them but is being used to pay for goods and services which is explicitly excluded from the definition.  It should be noted that this constraint is independent of the residual balance on the purchasing instrument.  

(e.g. if a PSU opted to hold a £100 balance on a prepaid card used for internet shopping and set up a VRP to top up the card back to £100 after every purchase/ at the end of each day, this would not be considered sweeping as the funds are being used to pay for a specific transaction(s)).    

If the VRP is being initiated to fund a specific transaction that will be completed subject to successful VRP initiation (e.g. an online gambling wallet which allows a customer to place a bet if the VRP initiation is successful), this is unlikely to meet the criterion of moving a customer’s own funds between accounts owned by them as the funds have been committed already and so do not belong to the customer on arrival.   

If the VRP is used to move funds to the online wallet which is used to store funds (e.g. e-money) which the payer could later choose to use to make purchases, or return funds back to their PCA/BCA, that is likely to meet the criterion of moving a customer’s own funds between accounts owned by them as the transfer of value is not linked to a specific transaction(s) (E.g., a Sweeping Service Provider may offer a service where surplus funds are moved into a “leisure spending” account and the payer may then choose how to use those funds to spend at a later date, and the payer retains ownership of the funds).   

### **Can VRPs under sweeping access be used to repay my credit card?**

If the movement of funds is used to pay down the debt on an account in the payer’s name and as soon as the payment is made those funds are allocated to the payer’s account, thereby reducing the amount owed, then the transaction is likely to meet the criterion of moving a customer’s own funds between accounts owned by them.   

Paying off a credit card is paying down a debt that is regulated under the Consumer Credit Act rather than paying for the transactions that created that debt and therefore is within the definition of Sweeping.  

### **Could VRPs be used to pay for a buy now pay later purchase?**

This depends on the nature of the transaction.
If the payer has signed a credit agreement, that is regulated under the Consumer Credit Act and there is an account in their name with a debit balance and as soon as the payment is made those funds are allocated to the payer’s account, thereby reducing the amount owed, then the transaction is likely to meet the criterion of moving a customer’s own funds between accounts owned by them.   

If the payer has signed an agreement, that is not regulated under the Consumer Credit Act then it is likely that the purpose of the sweep would be deemed to be paying for goods and services, rather than the repayment of a debt and so is unlikely to meet the definition of Sweeping. 

### **Can I pay into a pension account?**  

If the funds remain under the ownership of the payer at all times and the destination pension account confers beneficial ownership to the payer then the transaction is likely to be considered to be the movement of a customer’s own funds between accounts owned by them and so qualifies as Sweeping. 

### **Can I use Sweeping to fund my international money transfer service?** 

It depends on the nature of the transfer service. If funds are sent into a sterling account and the funds transferred into foreign currency and reside in an account in the customer’s name then the transfer is likely to meet the definition of moving a customer’s own funds between accounts owned by them. 

If the funds, after conversion, are transferred to another party then the transfer is unlikely to meet the definition of moving a customer’s own funds between accounts owned by them, as the purpose of the VRP transfer was to facilitate the transfer of foreign currency to another individual. 

### **Can you provide a few use cases that explain whether they are included in the definition of sweeping?**

| **Use Case**                                   | **Definitely included** | **Probably included** | **Probably excluded** | **Definitely excluded** | **Comments**                                                                                                                                   |
| ---------------------------------------------- | ----------------------- | --------------------- | --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Paying off my own credit card                  | Yes                     |                       |                       |                         |                                                                                                                                                |
| Paying off someone else’s credit card          |                         |                       |                       | Yes                     |                                                                                                                                                |
| Paying for a utility bill                      |                         |                       |                       | Yes                     |                                                                                                                                                |
| Paying council tax                             |                         |                       |                       | Yes                     |                                                                                                                                                |
| Moving funds into my investment account        | Yes                     |                       |                       |                         | Assuming PSU has beneficial ownership                                                                                                          |
| Moving funds into my pension                   | Yes                     |                       |                       |                         |
| Paying off my loan account                     | Yes                     |                       |                       |                         |                                                                                                                                                |
| Paying off a BNPL account                      |                         |                       | Yes                   |                         | Depending on the nature of the BNPL offering                                                                                                   |
| Paying of an alternative overdraft             | Yes                     |                       |                       |                         | If credit agreement in the customer's name                                                                                                     |
| Paying into an international payments facility |                         |                       | Yes                   |                         | It is possible for there to be exceptions that meet the definition (see Q-Can I use Sweeping to fund my international money transfer service?) |
| Paying into an e-commerce wallet               |                         |                       |                       | Yes                     | If wallet/ account’s sole purpose is e-commerce then it is not sweeping                                                                        |
| Paying off a mortgage                          |                         |                       | Yes                   |                         | If debt account has to be regulated under the CCA then mortgages and other secured loans would be excluded from sweeping.                      |
-->
### **Where can we find a sweeping journey?**

Refer to CEG - [VRP Payments under Sweeping Access](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp/vrp-payments-under-sweeping-access/latest/)

### **Where can we find more information on dashboards for VRP/sweeping**

- Refer to CEG - [PIS-VRP Consent Dashboard](https://standards.openbanking.org.uk/customer-experience-guidelines/dashboards/vrp-consent-dashboard-revocation/latest/)
- Refer to CEG - [PIS-VRP Access Dashboard](https://standards.openbanking.org.uk/customer-experience-guidelines/dashboards/pis-vrp-access-dashboard-revocation/latest/)

### **Who is responsible to prove that the consent is sweeping consent and payment is made to the same customer or legal entity as the initiating account?**

The PISP asserts it is sweeping and so would need to be able to prove that it is if questioned.

### **Is event notification mandatory for sweeping when the linked account is no longer available either temporarily or permanently??**

This is optional under the current versions of the specifications. However, the functionality can be supported.

### **What if an account linked to a VRP consent is no longer available (temporarily or permanently)?**

It is recommended that the ASPSP inform the TPP using events.

### **Can ASPSP define their specific list of VRP types for sweeping?**

Yes, as per current specifications two default enumerations are enabled - `sweeping` and `others`. The ASPSPs may define more specific enumerations related to sweeping and make this information available to the PISPs.

### **Can ASPSP allow only `Sweeping` VRP type if they implement only sweeping?**

The specification supports the selection of both `sweeping` and `others` in the VRP type field. However, if an ASPSP is only implementing `sweeping` then they only need to accept sweeping.  

### **Does a PISP need to display T&Cs as part of a sweeping consent journey?**

Yes, there is a CEG checklist requirement where the PISP must ensure that the PSU sees the T&Cs while giving sweeping consent.

### **Is Creditor account details mandatory to be part of the VRP consent for sweeping?**

Yes, creditor account details must be specified and cannot be changed.

### **Should a PISP ask the PSU to re-consent or re-authenticate if no payments have been taken for a period of time?** 

PISP may ask the PSU to re-authenticate at any time if required but if there is a long-lived consent given by the PSU to the PISP then the token should be valid until the validity of the consent.

### **Can an ASPSP revoke access token if there are no payments made for a period of time?**

No, the ASPSP should not revoke access tokens given to a PISP for the sole reason that no payments have been made using the VRP consent for a set amount of time.  It is the responsibility of the PISP to ensure that they have the appropriate consent from the PSU to initiate a payment order within a VRP consent (see "Setting the appropriate consent parameters" section in VRPS for Sweeping Guidance document). Ensuring appropriate management of potentially dormant VRP consents should form part of the PISPs operational risk management processes."

### **Do we need any additional checks or handling for payments to hopper accounts such as credit card accounts and/or PayPal accounts to reduce payment failures or reversals?**

This should be treated similar to any Open banking SIP payment via PISP.


## **VRP**
### **What is VRP?**

VRP means Variable Recurring Payment. For more refer to the Proposition paper- [Definition of VRP](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1939243099/Proposition+-+Variable+Recurring+Payments+VRPs#3.1-Definition-of-Variable-Recurring-Payments-(VRPs))

### **Where can we find VRP requirements?**

Refer to Proposition - [Proposition - Variable Recurring Payments (VRPs) | 8.-Requirements-for-the-VRP-Standards](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1939243099/Proposition+-+Variable+Recurring+Payments+VRPs#8.-Requirements-for-the-VRP-Standards) 

### **Where can we find VRP Specifications?**

Refer to Specifications -  https://openbankinguk.github.io/read-write-api-site3/v3.1.9/profiles/vrp-profile.html

### **Can PSU revoke VRP consent at the PISP?**

Yes. The PISP is expected to provide a mechanism within their domain to enable the PSU to revoke their consent for initiation of any future payment orders, by revoking the authorisation of VRP consent. 

### **Does a PISP need to mark the consent status as ‘Revoked’ once the PSU has revoked consent at the PISP?**

Once the PSU revokes consent at the PISP, the PISP will use the DELETE endpoint to inform the ASPSP that consent is revoked. The ASPSP must delete the resource and respond to subsequent GET requests with an HTPP status of 400.

### **Can a PSU re-authenticate the same consent after revoking at the PISP?**

No. The PSU will have to give new consent to the PISP and go through a new authentication journey at their ASPSP in order to set up a new VRP consent.

### **Can a PSU re-authenticate the same consent after revoking access at the ASPSP?**

Yes. The PISP will have to take the PSU to the ASPSP to re-authenticate the same consent, however, the PISP/PSU must not change any parameters previously agreed upon within the consent.

### **Can PSU revoke the VRP payment order once it has been initiated by the PISP?**

No, the specifications do not support the revocation of a payment order once it has been initiated by the PISP (as contemplated in PSR 83(2))  Note that this is different from revoking a VRP consent - this can be done at any point in time by the PSU. When a VRP consent is revoked, payments that are in-flight (ie initiated but not yet completed) may still get paid. The exact behaviour of such payments may differ between ASPSPs.

### **Can PSU revoke VRP access at ASPSP?**

ASPSPs are expected to provide a mechanism within their domain to enable the PSU to revoke their VRP consent access. This will not revoke any inflight VRP payments orders that have already been initiated by the PISP but will preclude the initiation of future payment orders within the VRP consent.

### **Can an ASPSP revoke VRP consent for any reason?**
ASPSP must not revoke VRP consent given by the PSU to the PISP. They must not change the status of the consent either. They must, however, take necessary action to revoke access e.g. by revoking/expiring the access token provided to the PISP or any other action that will stop the PISP from accessing the PSU’s account and making payment using the specific VRP consent, when requested to by the PSU.

### **Does 90-day re-authentication apply to VRP?**
The “90-day rule” arises from Article 10 of the RTS. This applies specifically to account information services only and VRPs consents are not in the scope of this.

### **Can a PSU re-authenticate use an existing VRP consent and what would be the trigger situations for these?**
There may be exceptional circumstances (e.g. suspect risk or fraud situations) where the PSU will be required to undergo strong customer authentication at their ASPSP, following the initial VRP consent set up. In instances where the ASPSP has revoked the access token, the PSU will need to go through a re-authentication journey.

### **Where can the PSU select their debtor account at ASPSP for the VRP consent?**
There are two ways in which PSU can provide their debtor account. The debtor account can firstly be provided in the domain of the PISP as part of the consent journey or alternatively in the domain of the ASPSP as part of the authentication journey, where the ASPSP will present the PSU with an option to select an account.

### **How does PISP ensure that the source and destination account belong to the same PSU while performing a sweeping activity?**
PISP must ensure that they have satisfied themselves that source and destination accounts belong to the same PSU, and this includes instances where account selection happens at the ASPSP. It is in the competitive space of each PISP to ensure that they have created the appropriate mechanism to achieve this based on their service offering. PISPs must ensure that they attest that the activity is sweeping when making VRP payments in this context.

### **Can the ASPSP apply ‘Transfer to Self’ exemption over ‘Trusted Beneficiary’ SCA exemption when the PSU is transferring funds between their own accounts at the same ASPSP?**

Yes, the ASPSP may apply ‘Transfer to Self’ over ‘Trusted Beneficiary’ or any other relevant SCA exemption if it is more appropriate.

Note: The [VRP payments under sweeping access](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp/vrp-payments-under-sweeping-access/latest/) journey in CEG, demonstrates an example where sweeping is happening between two accounts of the same PSU but at different ASPSP and hence Trusted Beneficiary SCA exemption is demonstrated.

### **What proof do ASPSPs need to provide to PISP in order to claim money back from customer disputes?**

The regulatory requirements relating to ASPSP and PISP disputes, including the burden of proof are outlined in the PSRs. While OBIE is unable to provide advice on this issue, there is useful information on this in the June 2019 [FCA Approach document, specifically in paragraphs (8.189 -8.330)](https://www.fca.org.uk/publication/finalised-guidance/fca-approach-payment-services-electronic-money-2017.pdf) 

### **Do ASPSPs need to differentiate between sweeping VRPs and non-sweeping VRPs from a customer perspective?**

No, as long as the requirements for sweeping and non-sweeping are met.

### **Can an ASPSP issue an open-ended access token or should they also issue a refresh token?**

ASPSP could issue a long-lived access token that expires along with the consent expiry in which case a refresh token is not required.

ASPSP could also issue a refresh token that is long-lived (expires with the consent expiry) where the PISP can use it to request an access token, in case the access tokens are short lived.

### **Is event notification mandatory for non-sweeping when the linked account is no longer available either temporarily or permanently?**

This is optional under the current versions of the specifications. However, the functionality can be supported.

### **What if an account linked to a VRP consent is no longer available (temporarily or permanently)?**

It is only a recommendation that the ASPSP inform the TPP using events.

### **Are there different authentication methods that a TPP can indicate as part of VRP consent?**

TPP may specify one more PSU authentication method within the VRP consent. The TPP must specify the specific ‘PSU authentication method’ applied for each individual payment.

<ul><li>Authentication not required - indicates authentication is not required for individual payments and payments can be made without the PSU being present. This is useful for sweeping but may be used for other situations.</li>

<li>SCA by TPP - This indicates SCA is carried out by the TPP. However, the ASPSP and TPP are expected to have a contract in place to accept this method.</li></ul>

### **How does PISP attest that the VRP consent is sweeping or non-sweeping?**

The specifications are open to enable both sweeping and non-sweeping as part of one consent. The PISP can indicate all the types of payments that can be made under a specific VRP consent including sweeping payment or other payments. However, the ASPSP and TPP will likely need to have a contract in place to accept sweeping and non-sweeping in one consent.

### **Can ASPSP define their specific list of VRP types for non-sweeping?**

Yes, as per current specifications two default enumerations are enabled - `sweeping` and `others` where `others` is for non-sweeping. The ASPSPs may define enumerations that are more specific and make this information available to the PISPs.

### **Can PISP specify a list of authentication methods that could be acceptable for VRP payments made under a specific VRP consent?**

Yes, PISP can specify more than one PSU authentication method along with each VRP consent.

e.g. Authentication not required, SCA by TPP etc.

### **Can PISP specify a list of authentication methods for a single VRP payment?**

No, PISP must provide one authentication method from the acceptable list of authentication methods that the PISP indicated at the VRP consent level. 

### **Does a PISP need to display T&Cs as part of the VRP consent journey?**

Yes, there is a CEG checklist requirement where the PISP must ensure that the PSU sees the T&Cs while giving VRP consent.

### **Are the creditor account details mandatory as part of the VRP consent for non-sweeping?**

For VRP there are two ways in which a VRP can be set up. that are proposed in the VRP Proposition and the specification is enabled to handle these types

1. [VRP Payments with an SCA exemption](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp/vrp-payments-with-an-sca-exemption/latest/)  - creditor (payee) details are fixed in the VRP consent

2. [VRP Payments with delegated SCA](https://standards.openbanking.org.uk/customer-experience-guidelines/pis-core-journeys/vrp-payments-with-delegated-sca/latest/) - creditor (payee) details are not part of the VRP consent but have to be specified each time VRP payment is initiated by the PISP.  

### **Can an ASPSP reject a VRP consent request from PISP if the creditor details are not provided and there is no appropriate contract in place between the PISP and the ASPSP?**

Yes.

### **Can a PSU give multiple VRP/sweeping consent to pay the same beneficiary?**

Yes, there is no limit on the number of consents a PSU can give to a PISP to pay the same beneficiary.  There is also no limit on the PSU paying the same beneficiary via multiple PISPs.

### **What if a PSU has given multiple consents to a PISP to pay the same beneficiary with different periodic limits (e.g. one with `Max amount per consent year` and other with `Max amount per calendar month`)?**

Each consent should be treated as a separate consent and not in conjunction.  It should be noted that a single consent may contain more than one periodic limit (e.g. a daily value limit and a weekly value limit and a monthly value limit) 

### **Are VRP and sweeping payments, domestic single immediate payments?**

Yes

### **What is the maximum number of transactions expected to show on the Access Dashboard History?**

It is up to the ASPSP. However, it would be recommended to keep it consistent with how many transactions the PSU would see on their online portal.

### **Will VRP be extended to BACS/CHAPS for non-FPS enabled accounts?**

There are no plans at present to extend VRP capability to non-FPS enabled accounts.

### **If no payment is made using a VRP/sweeping consent for over 13 months, is it appropriate that the consent remains active and who is expected to monitor?**

There is no 13-month dormancy rule applicable for PISP payments (including VRPs). The consent must remain active unless `ValidToDateTime` has expired. 

### **How can ASPSPs and PISPs communicate in case of a dispute?**

We encourage you to use DMS (Dispute Management System). For more refer to [Dispute Management System - Open Banking](https://www.openbanking.org.uk/dispute-management-system/)

### **When a VRP payment is refunded (total amount or partial amount), should the ASPSP or PISP recalculate the pending amount per period limits?

No

### **If VRP consent is revoked OR account access revoked OR consent expired, can the PISP check the status of a payment that was initiated when the consent was still active?

Yes, the PISP may use the GET endpoint to check the status of the payment, enabling the PISP to get the information using the client credentials grant.

### **Can an ASPSP ask the PSU to re-authenticate if the trusted beneficiary was removed and need to be added back to the PSU’s trusted list?

Yes, the creation of or amendment of a trusted beneficiary list will require SCA.  If the PSU has removed the payee from their trusted beneficiary (payee) list on their online channel after setting up a VRP/sweeping consent, the ASPSP will need the PSU to re-authenticate in order to enable future VRPs to that trusted beneficiary.

## **Consent Parameters**
### **What is VRP consent parameters?**

It provides details around a set of controls that are associated with a VRP consent that the PSU is authorising the PISP to initiate payments on their behalf.

### **Whose responsibility is it to agree on the parameters?**

It is the responsibility of the PISP to ensure the PSU explicitly agrees to the limit imposed by the consent parameters.

e.g. A VRP consent may have one parameter as `Max Individual amount` which is set to £100 which means the PISP can initiate payments up to £100 at a given time.

A VRP consent may have another parameter of `Max amount per calendar month` which is set to £1000 which means the PISP can initiate payments that total up to not more than £1000 in a calendar month.

### **Whose responsibility is it to ensure payments are within the consent parameters?**

It is the responsibility of the PISP to ensure that VRP payments are initiated within the consent parameters. It is the responsibility of the ASPSP to ensure that it does not execute VRP payment orders outside of the consent parameters. 

### **Can a PISP specify ‘Maximum cumulative amount per month /day/year etc’?**

Yes, the specifications are flexible to set dynamic consent parameters as below:

<ul><li>Max cumulative amount per calendar day
<li>Max cumulative amount per consent day
<li>Max cumulative amount per calendar week
<li>Max cumulative amount per consent week
<li>Max cumulative amount per consent fortnight
<li>Max cumulative amount per calendar month
<li>Max cumulative amount per consent month
<li>Max cumulative amount per calendar halfyear
<li>Max cumulative amount per consent halfyear
<li>Max cumulative amount per calendar year
<li>Max cumulative amount per consent year</li></ul>

### **Do ASPSPs need to support all periodic limits for VRP/sweeping consent?**

Yes, ASPSPs must support all the periodic limits (day, week, fortnight, month, half-year, year) and all periodic alignment (consent and calendar).

Note: `Maximum cumulative amount per calendar fortnight` is not recommended as the ISO calendar does not support or provide any guidance on when a fortnight should start.

### **Do PISPs need to support all periodic limits for VRP/sweeping consent?**

Yes, PISPs can use all the periodic limits (day, week, fortnight, month, half-year, year) and all periodic alignment (consent and calendar). 

### **Do ASPSPs need to support all periodic limits as part of a single VRP/sweeping consent?**

ASPSPs must support all the periodic limits and be capable to handle multiple periodic limits in a single consent.  

The ASPSPs may restrict to one-period alignment (i.e. consent or calendar) for a single periodic limit in a single consent.  

e.g.: `Max cumulative amount per calendar year` and `Max cumulative amount per consent year` may not be an acceptable combination in one VRP consent however, `Max cumulative amount per calendar year` and `Max cumulative amount per consent month` is acceptable. 

### **Is the ASPSP able to limit the number of periodic limits in a single consent?**

No, the ASPSP must be able to support the number of periodic limits that the PISP includes in a VRP consent.  The maximum number of periodic limits that a PISP could include is 6 (one for each time period).<BR/>
The rationale for this is that allowing ASPSPs to set a limit risks ASPSPs adopting different interpretations of the Standard and the lowest number of concurrent supported periodic limits would become the effective industry standard (it would be a race to the bottom).  PISPs would have to develop propositions that are accepted at all ASPSPS and so would have to only offer the lowest number of concurrent periodic limits which effectively limits the control PSUs have over future payments.  

### **Where can I find examples on periodic limits and periodic type?**

Examples of both consent and calendar types are in the specifications - [Domestic VRP consents - v3.1.9](https://openbankinguk.github.io/read-write-api-site3/v3.1.9/resources-and-data-models/vrp/domestic-vrp-consents.html#examples-of-periodic-limits) 

### **Who should specify the consent parameter limits - PSU or PISP?**

PISPs should ensure that the consent parameters they agree with the PSU are appropriate for use cases and PSU’s individual circumstances. 

PISPs must either allow PSUs to specify consent parameters or pre-populate them for the PSUs enabling the PSU to amend any of them as required. 

### **Can the periodic alignments be mixed and matched?**

Yes.

e.g.: `Max cumulative amount per calendar year` and `Max cumulative amount per consent month` may be set in one VRP consent. 

### **Does the PISP need explicit permission i.e. consent from the PSU on all the consent parameters?**

Yes, in order for the PSU to provide their explicit consent to set up a VRP/sweeping payment, the PISP must present all the required consent parameters to ensure that they obtain explicit consent from the PSU and any subsequent payments are initiated within those consent parameters. The PISP must also ensure that the consent parameters are ‘sufficiently narrow’ and in line with the service offering. 

### **Does the ASPSP need to ensure each VRP/sweeping payment is within the consent parameters linked to the PSU’s consent?**

Yes, ASPSP must ensure that it does not execute VRP/sweeping payment orders outside of the payment parameters.

### **Does the PISP need to ensure each VRP/sweeping payment is within the consent parameters linked to the PSU’s consent?**

Yes, the PISP must not submit payment orders that are outside of the consent parameters. 

### **Can an ASPSP define additional control parameters for non-sweeping?**

The standard provides a set of control parameters that may be specified as part of the VRP consent. These control parameters set limits for the payment orders that can be created by the PISP for a given VRP.

In addition to the control parameters defined in this standard ASPSPs may implement additional control parameters, limits and restrictions for non-sweeping VRPs.

These restrictions should be documented on ASPSP's developer portal.

### **Can an ASPSP define additional control parameters for sweeping?**

No, not for sweeping.

### **Where VRP consent does not start on the first day of the calendar date, is it expected to calculate first-period payment as pro-rata?**

Yes. Pro-rata for the remaining period must be calculated for Max amount per time window.

e.g. `Max amount per calendar month` is set to £31 and `ValidFromDateTime` is 15/10/2020, then max allowable limit for the month of Oct will be £17

### **Can ASPSP reject a VRP/sweeping consent request, if the `MaximumIndividualAmount` exceeds the individual transaction limit on their online channels?**

The ASPSP should not put restrictions when the consent is set up but should apply account restrictions when the payment order is submitted and not process that payment if it exceeds the limit on their online channels.

### **Whose responsibility is it to set a limit on the length of the consent - PSU, TPP or ASPSP?**

All the consent parameters have to be agreed upon between the PISP and the PSU and the PSU has to give explicit consent.

### ** While calculating the periodic limit amount, do we need to exclude the payments that have Rejected status?**

Yes, you should exclude those with `Rejected` status.