**Is OBErrorResponse1/Errors/Message mandatory, and what level of detail is expected?**

This is considered a mandatory field and ASPSPs must include a description of the error that occurred. E.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'

OBIE does not standardise this field and it is up to each ASPSP to determine the appropriate level of detail to provide an adequate description of the error that has taken place to the TPP.

TPPs will need to determine which error codes to implement depending on the relevant error code(s) applicable to them and their service offerings.
