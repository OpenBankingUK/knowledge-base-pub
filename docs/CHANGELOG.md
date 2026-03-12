# Version control

## V4.0.1 - 2026-03-12

### Added

- [Why do PCC enums BillPayment, EcommerceGoods, EcommerceServices, PartyToParty, PispPayee and Other appear in the OpenAPI files as part of OBInternalPaymentContext1Code but not the codeset repo?](./standards/read-write.html#why-do-pcc-enums-billpayment-ecommercegoods-ecommerceservices-partytoparty-pisppayee-and-other-appear-in-the-openapi-files-as-part-of-obinternalpaymentcontext1code-but-not-the-codeset-repo)

### Changed
- [What error code should be used if a TPP repeats an Idempotency ID within 24 hours?](./standards/read-write.html#what-error-code-should-be-used-if-a-tpp-repeats-an-idempotency-id-within-24-hours) Corrected answer which was factually incorrect
- [Is the Data.DebtorAccount block to be provided by the ASPSP in the response block optional?](./standards/general/vrp.html#is-the-data-debtoraccount-block-to-be-provided-by-the-aspsp-in-the-response-block-optional)- amended response for additional clarity
- [Can an ASPSP ask the PSU to re-authenticate if the trusted beneficiary was removed and need to be added back to the PSU’s trusted list?](./standards/general/vrp.html#can-an-aspsp-ask-the-psu-to-re-authenticate-if-the-trusted-beneficiary-was-removed-and-need-to-be-added-back-to-the-psu-s-trusted-list). Added sentence to clarify usage of Event Notifications.

### Fixed

- Fixed some minor formatting (putting words like must & should in bold, removing superfluous ** from some questions) to improve readability

## v4.0.1 - 2025-11-20

### Added

- [How should ASPSPs handle VRP payment consents created in v3 when ASPSP is now on v4?](./standards/general/vrp.html#how-should-aspsps-handle-vrp-payment-consents-created-in-v3-when-aspsp-is-now-on-v4)
- [How do ASPSPs apply payment value limits to their online channels, and does this apply to open banking (including VRP) initiated payments?](./standards/read-write.html#how-do-aspsps-apply-payment-value-limits-to-their-online-channels-and-does-this-apply-to-open-banking-including-vrp-initiated-payments)
- [Which payment status codes can be considered as a final status?](./standards/read-write.html#which-payment-status-codes-can-be-considered-as-a-final-status)
- [What error code should be used if a TPP repeats an Idempotency ID within 24 hours?](./standards/read-write.html#what-error-code-should-be-used-if-a-tpp-repeats-an-idempotency-id-within-24-hours)
- [Payload Validation](./standards/read-write.html#payload-validation)
- [Does the PointInTime field support negative values?](./standards/read-write.html#does-the-pointintime-field-support-negative-values)
- [Should TPPs include LEI when initiating FI-FI CHAPS payments?](./standards/read-write.html#should-tpps-include-lei-when-initiating-fi-fi-chaps-payments)

### Changed

- [Is the Data.DebtorAccount block to be provided by the ASPSP in the response block optional?](./standards/general/vrp.html#is-the-data-debtoraccount-block-to-be-provided-by-the-aspsp-in-the-response-block-optional)

## v4.0.1 - 2025-02-11

### Fixed

- Fixed several broken links in R/W, CEG, OG, VRP FAQs, along with very minor typos


