**Can a PISP create consent in a previous version and a payment order resources in a newer version?**

A PISP **must not** create a payment-order consent ConsentId on a previous version and use it to create a payment-order resource in a newer version.

* E.g., A PaymentId created in v1, must not be used to create a v3 DomesticPaymentId.
