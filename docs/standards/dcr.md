# Dynamic Client Registration (DCR)
[[toc]]

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

### **What is the expected `content-type` for a Dynamic Client Registration request?**

There are two “competing” RFCs that define the content type for JWS payload:

* https://tools.ietf.org/html/rfc7515#section-9.2.1 - It should be application/jose

* https://tools.ietf.org/html/rfc7519#section-10.3.1 - It should be application/jwt

An ASPSP may accept either or both `content-type` headers. They should provide clear documentation on their developer portal as to which content-type they support.

### **Why is the `aud` field of a different length from the other fields with a UUIDv4?**

When using OBIE issued SSA, the `aud` field is the value provided by OBIE directory and is 18 characters long.

The field size is limited to that size to accommodate the FPS requirement to send information in Field 122 related to the software statement id and organization id.

### **In DCR v3.3, is it is mandatory to send `iss`, `iat`, `exp`, `aud` and `jti` claims as part of the DCR "response"?**

Refer to the table in this section <a href="
https://openbankinguk.github.io/dcr-docs-pub/v3.3/dynamic-client-registration.html#data-dictionary
" class="external-link" rel="nofollow">DCR v3.3 - Data Dictionary</a>. The column Location specifies whether the field should be included in requests, responses or both. 

### **Does a TPP have to register all their redirect URIs with each bank? How should a TPP handle redirect URIs to direct to a merchant website instead of their website?** 

It is necessary to register the redirect URI with each ASPSP.

If the TPP wants to carry out redirects to a site not owned by the TPP, the TPP would still need to register the redirect URI with the OBIE directory. They would subsequently need to update their client registrations (using DCR PUT requests if supported) with each ASPSP.