## Dynamic Client Registration <!-- omit in toc -->

- [**Where can I find the latest version of the Dynamic Client Registration?**](#where-can-i-find-the-latest-version-of-the-dynamic-client-registration)
- [**What is Dynamic Client Registration?**](#what-is-dynamic-client-registration)
- [**Is it mandatory for an ASPSP to implement all the operations (POST, PUT, GET, DELETE) specified in DCR?**](#is-it-mandatory-for-an-aspsp-to-implement-all-the-operations-post-put-get-delete-specified-in-dcr)
- [**Does the DCR specification support ASPSPs who do not accept OBIE issued SSAs?**](#does-the-dcr-specification-support-aspsps-who-do-not-accept-obie-issued-ssas)
- [**Can an ASPSP register a TPP client using different parameters than specified?**](#can-an-aspsp-register-a-tpp-client-using-different-parameters-than-specified)
- [**How does a TPP identify the authentication methods, grant types and algorithms that an ASPSP supports?**](#how-does-a-tpp-identify-the-authentication-methods-grant-types-and-algorithms-that-an-aspsp-supports)
- [**For DCR, is there an expiry on the SSA request made by the TPP?**](#for-dcr-is-there-an-expiry-on-the-ssa-request-made-by-the-tpp)
- [**Should TPPs accept only the FAPI compliant claim values in the client registration request for DCR?**](#should-tpps-accept-only-the-fapi-compliant-claim-values-in-the-client-registration-request-for-dcr)


### **Where can I find the latest version of the Dynamic Client Registration?**

Please see [DCR Repository](https://openbankinguk.github.io/dcr-docs-pub/)

### **What is Dynamic Client Registration?**

Dynamic Client Registration (DCR) allows ASPSPs to register TPPs as OIDC clients without the need for a manual process. ASPSPs rely on the certificates and Software Statement Assertions (SSAs) submitted by the TPP.

### **Is it mandatory for an ASPSP to implement all the operations (POST, PUT, GET, DELETE) specified in DCR?**

No

### **Does the DCR specification support ASPSPs who do not accept OBIE issued SSAs?**

The DCR specification provides the extensibility to use an SSA from any trust anchor (not just the Open Banking Directory). However, the specification does not define these extension points. It is up to each ASPSP or Trust Anchor to define how other SSAs should be used in this case.

### **Can an ASPSP register a TPP client using different parameters than specified?**

Yes. The underlying standard that was used for the DCR specification permits this behaviour, without requiring the ASPSP to return an error. As a result, the OBIE profile continues to support this behaviour as well.

### **How does a TPP identify the authentication methods, grant types and algorithms that an ASPSP supports?**

The ASPSP's OpenID Connect discovery endpoint should provide all required parameters.

### **For DCR, is there an expiry on the SSA request made by the TPP?**

Yes, there is an expiry time associated with the request. The time at which the request expires expressed as seconds since the request was made by the TPP. An ASPSP processing the request must reject requests where the current time is greater than the time specified in the claim.

### **Should TPPs accept only the FAPI compliant claim values in the client registration request for DCR?**

The DCR standard is written as a generic standard, independent of the underlying security profile that the ASPSP has used. If the ASPSP is to be FAPI compliant, then it will have to disallow enumeration values that FAPI does not support. Similarly, if an ASPSP supports only `mtls` and not `private_key_jwt`, then it may only permit that one value.