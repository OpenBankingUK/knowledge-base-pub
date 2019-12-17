**Can a PISP create consent in a new version and a payment order resource using an older version?**

A PISP **must not** create a payment-order consent ConsentId on a newer version and use it to create a payment-order resource in a previous version.

* E.g., A ConsentId created in v3, must not be used to create a v1 PaymentSubmissionId.
