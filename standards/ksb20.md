**What do we refer to as mandatory "GET endpoints"?**

The GET endpoint enables the PISP to check the status of the payment consent resource.

The GET endpoints listed below are considered mandatory for implementation. This would be applicable irrespective of whether the response in both POST and the GET remains the same.

* GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}
* GET /domestic-standing-orders/{DomesticStandingOrderId}
* GET /international-scheduled-payments/{InternationalScheduledPayment}
* GET /international-standing-orders/{InternationalStandingOrderPaymentId}
