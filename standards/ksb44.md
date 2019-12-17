**What error code should an ASPSP send back to a TPP if a wrong x-fapi-financial-id was sent in the request?**

The x-fapi-financial-id header was required up until Version 3.1.1 of the OBIE Read-write API profile. ASPSPs that implement this version must reject an invalid request with a 403 (Forbidden).

The requirement for providing x-fapi-financial-id in the request header was removed from FAPI and subsequently removed from Version 3.1.2 of the Read/Write API Specification. 
