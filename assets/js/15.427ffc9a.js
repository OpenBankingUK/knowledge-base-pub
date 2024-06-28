(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{200:function(t,e,i){"use strict";i.r(e);var a=i(3),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",[t._v("Dynamic Client Registration (DCR)")]),t._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#where-can-i-find-the-latest-version-of-the-dynamic-client-registration"}},[t._v("Where can I find the latest version of the Dynamic Client Registration?")])]),i("li",[i("a",{attrs:{href:"#what-is-dynamic-client-registration"}},[t._v("What is Dynamic Client Registration?")])]),i("li",[i("a",{attrs:{href:"#is-it-mandatory-for-an-aspsp-to-implement-all-the-operations-post-put-get-delete-specified-in-dcr"}},[t._v("Is it mandatory for an ASPSP to implement all the operations (POST, PUT, GET, DELETE) specified in DCR?")])]),i("li",[i("a",{attrs:{href:"#does-the-dcr-specification-support-aspsps-who-do-not-accept-obl-issued-ssas"}},[t._v("Does the DCR specification support ASPSPs who do not accept OBL issued SSAs?")])]),i("li",[i("a",{attrs:{href:"#can-an-aspsp-register-a-tpp-client-using-different-parameters-than-specified"}},[t._v("Can an ASPSP register a TPP client using different parameters than specified?")])]),i("li",[i("a",{attrs:{href:"#how-does-a-tpp-identify-the-authentication-methods-grant-types-and-algorithms-that-an-aspsp-supports"}},[t._v("How does a TPP identify the authentication methods, grant types and algorithms that an ASPSP supports?")])]),i("li",[i("a",{attrs:{href:"#for-dcr-is-there-an-expiry-on-the-ssa-request-made-by-the-tpp"}},[t._v("For DCR, is there an expiry on the SSA request made by the TPP?")])]),i("li",[i("a",{attrs:{href:"#should-tpps-accept-only-the-fapi-compliant-claim-values-in-the-client-registration-request-for-dcr"}},[t._v("Should TPPs accept only the FAPI compliant claim values in the client registration request for DCR?")])]),i("li",[i("a",{attrs:{href:"#what-is-the-expected-content-type-for-a-dynamic-client-registration-request"}},[t._v("What is the expected `content-type` for a Dynamic Client Registration request?")])]),i("li",[i("a",{attrs:{href:"#why-is-the-aud-field-of-a-different-length-from-the-other-fields-with-a-uuidv4"}},[t._v("Why is the `aud` field of a different length from the other fields with a UUIDv4?")])]),i("li",[i("a",{attrs:{href:"#in-dcr-v3-3-is-it-is-mandatory-to-send-iss-iat-exp-aud-and-jti-claims-as-part-of-the-dcr-response"}},[t._v('In DCR v3.3, is it is mandatory to send `iss`, `iat`, `exp`, `aud` and `jti` claims as part of the DCR "response"?')])]),i("li",[i("a",{attrs:{href:"#does-a-tpp-have-to-register-all-their-redirect-uris-with-each-bank-how-should-a-tpp-handle-redirect-uris-to-direct-to-a-merchant-website-instead-of-their-website"}},[t._v("Does a TPP have to register all their redirect URIs with each bank? How should a TPP handle redirect URIs to direct to a merchant website instead of their website?")])])])]),i("p"),t._v(" "),i("h3",{attrs:{id:"where-can-i-find-the-latest-version-of-the-dynamic-client-registration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-the-latest-version-of-the-dynamic-client-registration"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Where can I find the latest version of the Dynamic Client Registration?")])]),t._v(" "),i("p",[t._v("Please see "),i("a",{attrs:{href:"https://openbankinguk.github.io/dcr-docs-pub/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DCR Repository"),i("OutboundLink")],1)]),t._v(" "),i("h3",{attrs:{id:"what-is-dynamic-client-registration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-dynamic-client-registration"}},[t._v("#")]),t._v(" "),i("strong",[t._v("What is Dynamic Client Registration?")])]),t._v(" "),i("p",[t._v("Dynamic Client Registration (DCR) allows ASPSPs to register TPPs as OIDC clients without the need for a manual process. ASPSPs rely on the certificates and Software Statement Assertions (SSAs) submitted by the TPP.")]),t._v(" "),i("h3",{attrs:{id:"is-it-mandatory-for-an-aspsp-to-implement-all-the-operations-post-put-get-delete-specified-in-dcr"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#is-it-mandatory-for-an-aspsp-to-implement-all-the-operations-post-put-get-delete-specified-in-dcr"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Is it mandatory for an ASPSP to implement all the operations (POST, PUT, GET, DELETE) specified in DCR?")])]),t._v(" "),i("p",[t._v("No")]),t._v(" "),i("h3",{attrs:{id:"does-the-dcr-specification-support-aspsps-who-do-not-accept-obl-issued-ssas"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#does-the-dcr-specification-support-aspsps-who-do-not-accept-obl-issued-ssas"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Does the DCR specification support ASPSPs who do not accept OBL issued SSAs?")])]),t._v(" "),i("p",[t._v("The DCR specification provides the extensibility to use an SSA from any trust anchor (not just the Open Banking Directory). However, the specification does not define these extension points. It is up to each ASPSP or Trust Anchor to define how other SSAs should be used in this case.")]),t._v(" "),i("h3",{attrs:{id:"can-an-aspsp-register-a-tpp-client-using-different-parameters-than-specified"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#can-an-aspsp-register-a-tpp-client-using-different-parameters-than-specified"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Can an ASPSP register a TPP client using different parameters than specified?")])]),t._v(" "),i("p",[t._v("Yes. The underlying standard that was used for the DCR specification permits this behaviour, without requiring the ASPSP to return an error. As a result, the OBL profile continues to support this behaviour as well.")]),t._v(" "),i("h3",{attrs:{id:"how-does-a-tpp-identify-the-authentication-methods-grant-types-and-algorithms-that-an-aspsp-supports"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-does-a-tpp-identify-the-authentication-methods-grant-types-and-algorithms-that-an-aspsp-supports"}},[t._v("#")]),t._v(" "),i("strong",[t._v("How does a TPP identify the authentication methods, grant types and algorithms that an ASPSP supports?")])]),t._v(" "),i("p",[t._v("The ASPSP's OpenID Connect discovery endpoint should provide all required parameters.")]),t._v(" "),i("h3",{attrs:{id:"for-dcr-is-there-an-expiry-on-the-ssa-request-made-by-the-tpp"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#for-dcr-is-there-an-expiry-on-the-ssa-request-made-by-the-tpp"}},[t._v("#")]),t._v(" "),i("strong",[t._v("For DCR, is there an expiry on the SSA request made by the TPP?")])]),t._v(" "),i("p",[t._v("Yes, there is an expiry time associated with the request. The time at which the request expires expressed as seconds since the request was made by the TPP. An ASPSP processing the request must reject requests where the current time is greater than the time specified in the claim.")]),t._v(" "),i("h3",{attrs:{id:"should-tpps-accept-only-the-fapi-compliant-claim-values-in-the-client-registration-request-for-dcr"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#should-tpps-accept-only-the-fapi-compliant-claim-values-in-the-client-registration-request-for-dcr"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Should TPPs accept only the FAPI compliant claim values in the client registration request for DCR?")])]),t._v(" "),i("p",[t._v("The DCR standard is written as a generic standard, independent of the underlying security profile that the ASPSP has used. If the ASPSP is to be FAPI compliant, then it will have to disallow enumeration values that FAPI does not support. Similarly, if an ASPSP supports only "),i("code",[t._v("mtls")]),t._v(" and not "),i("code",[t._v("private_key_jwt")]),t._v(", then it may only permit that one value.")]),t._v(" "),i("h3",{attrs:{id:"what-is-the-expected-content-type-for-a-dynamic-client-registration-request"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-expected-content-type-for-a-dynamic-client-registration-request"}},[t._v("#")]),t._v(" "),i("strong",[t._v("What is the expected "),i("code",[t._v("content-type")]),t._v(" for a Dynamic Client Registration request?")])]),t._v(" "),i("p",[t._v("There are two “competing” RFCs that define the content type for JWS payload:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://tools.ietf.org/html/rfc7515#section-9.2.1 - It should be application/jose")])]),t._v(" "),i("li",[i("p",[t._v("https://tools.ietf.org/html/rfc7519#section-10.3.1 - It should be application/jwt")])])]),t._v(" "),i("p",[t._v("An ASPSP may accept either or both "),i("code",[t._v("content-type")]),t._v(" headers. They should provide clear documentation on their developer portal as to which content-type they support.")]),t._v(" "),i("h3",{attrs:{id:"why-is-the-aud-field-of-a-different-length-from-the-other-fields-with-a-uuidv4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-aud-field-of-a-different-length-from-the-other-fields-with-a-uuidv4"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Why is the "),i("code",[t._v("aud")]),t._v(" field of a different length from the other fields with a UUIDv4?")])]),t._v(" "),i("p",[t._v("When using OBL issued SSA, the "),i("code",[t._v("aud")]),t._v(" field is the value provided by OBL directory and is 18 characters long.")]),t._v(" "),i("p",[t._v("The field size is limited to that size to accommodate the FPS requirement to send information in Field 122 related to the software statement id and organization id.")]),t._v(" "),i("h3",{attrs:{id:"in-dcr-v3-3-is-it-is-mandatory-to-send-iss-iat-exp-aud-and-jti-claims-as-part-of-the-dcr-response"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#in-dcr-v3-3-is-it-is-mandatory-to-send-iss-iat-exp-aud-and-jti-claims-as-part-of-the-dcr-response"}},[t._v("#")]),t._v(" "),i("strong",[t._v("In DCR v3.3, is it is mandatory to send "),i("code",[t._v("iss")]),t._v(", "),i("code",[t._v("iat")]),t._v(", "),i("code",[t._v("exp")]),t._v(", "),i("code",[t._v("aud")]),t._v(" and "),i("code",[t._v("jti")]),t._v(' claims as part of the DCR "response"?')])]),t._v(" "),i("p",[t._v("Refer to the table in this section "),i("a",{staticClass:"external-link",attrs:{href:"\nhttps://openbankinguk.github.io/dcr-docs-pub/v3.3/dynamic-client-registration.html#data-dictionary\n",rel:"nofollow"}},[t._v("DCR v3.3 - Data Dictionary")]),t._v(". The column Location specifies whether the field should be included in requests, responses or both.")]),t._v(" "),i("h3",{attrs:{id:"does-a-tpp-have-to-register-all-their-redirect-uris-with-each-bank-how-should-a-tpp-handle-redirect-uris-to-direct-to-a-merchant-website-instead-of-their-website"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#does-a-tpp-have-to-register-all-their-redirect-uris-with-each-bank-how-should-a-tpp-handle-redirect-uris-to-direct-to-a-merchant-website-instead-of-their-website"}},[t._v("#")]),t._v(" "),i("strong",[t._v("Does a TPP have to register all their redirect URIs with each bank? How should a TPP handle redirect URIs to direct to a merchant website instead of their website?")])]),t._v(" "),i("p",[t._v("It is necessary to register the redirect URI with each ASPSP.")]),t._v(" "),i("p",[t._v("If the TPP wants to carry out redirects to a site not owned by the TPP, the TPP would still need to register the redirect URI with the OBL directory. They would subsequently need to update their client registrations (using DCR PUT requests if supported) with each ASPSP.")])])}),[],!1,null,null,null);e.default=s.exports}}]);