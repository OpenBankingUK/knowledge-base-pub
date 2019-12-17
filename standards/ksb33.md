**When should ASPSPs reject a Payment-Order?**

An ASPSP must reject an authorization request when the underlying intent object is associated with a CutoffDateTime that has elapsed. The ASPSP must not issue an access token in such a situation. The ASPSP must set the status of the payment-order consent resource to “Rejected”.
