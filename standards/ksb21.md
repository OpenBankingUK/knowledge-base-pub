**How can ASPSPs provide relevant charges to a PISP?**

The Open Banking Write specification enables the ASPSP to provide any relevant charges related to the payment order to the PISP in two ways:-

(a) When the PISP sets up the payment order, the ASPSP can populate relevant charges (including a breakdown) as part of the payment consent response (name of response which is returned to the PISP.

(b) When the PISP submits the payment order, the ASPSP can respond by including any relevant charges (including a breakdown) as part of the payment response, which is returned to the PISP.

For more details refer to :https://standards.openbanking.org.uk/api-specifications/red-write-specs/latest/

<a href="https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1077805881/Domestic+Payments+v3.1.2">Domestic Payments v3.1.2</a>
* Domestic Payment Consent - Response (xpath - OBWriteDomesticConsentResponse3/Data/Charges).
* Domestic Payment - Response (xpath - OBWriteDomesticResponse3/Data/Charges).

<a href="https://openbanking.atlassian.net/wiki/spaces/DZ/pages/1077806166/International+Payments+v3.1.2">International Payments v3.1.2</a>
* International Payment Consent - Response (xpath - OBWriteInternationalConsentResponse3/Data/Charges).
* International Payment - Response (xpath - OBWriteInternationalResponse3/Data/Charges).
