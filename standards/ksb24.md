**What if a PISP does not provide the optional 'ChargeBearer' field?**

If the PISP does not provide a charge bearer value in the payment consent request payload, and if this cannot be determined (e.g. in case of SEPA payment) then the ASPSP should not reject the payment, but it should seek to get this information from the PSU via the supplementary information screen as part of authentication journey.
