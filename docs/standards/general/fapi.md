
## FAPI

### **Is it mandatory to include the `scope` claim when calling the token end-point as part of an authorization_code grant?**

No, it is not mandatory for the client to include the 'scope' in the token request.

### **As an ASPSP, which security certification should I request from Open ID if I see multiple types for FAPI?** 

ASPSP must select FAPI-Advanced-Final- Authorization server test.

### **Which scope element should the TPPs use when requesting token (grant type=authorization_code)?**

TPPs should follow FAPI guidelines for the `scope` element.

### **What should the ASPSP do if the TPP omits the scope parameter when requesting authorization?**

The authorization server must either process the request using a pre-defined default value or fail the request indicating an invalid scope.

### **Is it compliant for a PSU to be redirected within a redirect in a redirect/hybrid grant?**

For the journey to be a “compliant” OIDC/OAuth2 journey, there are a number of boxes to tick:

The TPP constructs the authorization URL and issues it to the PSU’s browser. The URL should contain query parameters and request objects that are OIDC compliant. The URL should be the authorization_server in the ASPSP’s .well-known. The redirect_uri parameter should be the TPP’s registered URI.

Once the PSU’s browser follows the redirect, the flow can be pretty much whatever the ASPSP wants to implement. The CEGs provide some standards on what those journeys should look like, but no technical constraints on redirects etc that take place.

Finally, that journey MUST end with the PSU browser receiving a 30x Redirect response. The redirect must be to the redirect_uri in the query parameter in #1 above. This URL must have OIDC/OAuth2 format query or hashbang parameters (e.g. code, error, error_description, nonce(?) etc

Practically, some browsers will cause issues with a TOO_MANY_REDIRECTS error - but the standard is silent on that. It is likely that old / non-evergreen browsers may cause some issues.

### **Can refresh token be issued without an HoK mechanism to avoid impacts on member and would it be in compliance with FAPI?** 
### **If a refresh token is issued with MTLS HoK, would it force the PSU to re-authenticate? Would this be an acceptable user Journey?**

When using a refresh token, there should be no expectation on the PSU to re-authenticate each time they access token is renewed. TPPs are expected to use the “refreshing AISP access” journey in the CEGs.

The certificate binding mechanism with RFC-8705 does allow this to be implemented correctly.

The method for certificate binding is defined in https://tools.ietf.org/html/rfc8705#section-7.1. (Note that we do not have public clients and Section 4 of RF-8705 will not be applicable) 

Effectively, a refresh token is not certificate bound directly but bound indirectly through the client. The client, in turn, needs to authenticate with the token endpoint using a strong method of authentication (`tls_client_auth` or `private_key_jwt`).

If using `private_key_jwt`, the signature is based on a key pair in the client’s JWKS registered with the ASPSP. No certificates are involved. Done.

If using `tls_client_auth`, the certificate is validated by comparing with tls_client_auth_subject_dn - not the certificate fingerprint. This would allow the TPP to make a call to the token endpoint with the new certs with their current refresh token. The new access token would be bound to the new cert. Done.

### **Is it acceptable for an ASPSP to have multiple authorization servers? How should these be discoverable?**

ASPSPs may have multiple AS and RS (e.g. to serve different brands and products). However, for ASPSPs that use the OBL directory, these must be discoverable through the directory.

Furthermore, the use of additional authorization servers should not result in invalid or incorrectly formed OIDC discovery documents.

### **Is there any guidance on how long in advance of being FAPI complaint ASPSPs should send out notice?** 

SCA - RTS, Article 30(4) contemplates that ASPSPs must give TPPs a minimum of three months’ notice of any change to the technical specification of their interface change except for emergency situations.

For more details refer to https://standards.openbanking.org.uk/operational-guidelines/change-and-communication-management/changes-to-an-aspsps-infrastructure-configuration-or-software/latest/.

### **Can the same Authorization endpoint be used repeatedly while it is not authorized by PSU or is there any time limitation to use the endpoint?**

There are no specific constraints in the OIDC and FAPI standards around the expected behaviour of hitting an authorization URL multiple times.

FAPI requires that the call has a signed request. The request object must have an `exp` and `nbf` claim as stipulated here. This would limit the validity period for an authorization URL.

### **As a TPP, when going through an authorization code grant, is the request object required even if I am not using a hybrid flow?**

ASPSPs that use the OBL directory should register each authorization server on the OBIE directory with its corresponding discovery end-point.

#### OIDC Discovery

The OpenID Connect Discovery 
<a href="https://openid.net/specs/openid-connect-discovery-1_0.html" class="external-link" rel="nofollow">RFC</a>
 is the specification that defines the structure and content of the OIDC .well-known end-point.

The document is meant to be “discoverable” by web-finger and by a static URL and should always be available at a URL that can be pre-determined.

For example, the discovery document for the issuer example.com must be available at /.well-known/openid-configuration

1. GET /.well-known/openid-configuration HTTP/1.1
  2. Host: example.com 

Subsequently, the discovery document that is returned must have example.com specified as the issuer URL.

>issuer<br>
>REQUIRED. URL using the `https` scheme with no query or fragment component that the OP asserts as its Issuer Identifier. If Issuer discovery is supported (see <a href="https://openid.net/specs/openid-connect-discovery-1_0.html#IssuerDiscovery" class="external-link" rel="nofollow">Section 2</a>
), this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the `iss` Claim value in ID Tokens issued from this Issuer.

Additionally, the `authorization_endpoint` specified must point to the OP’s authorization server. Note that there is no stipulated relationship between the URL for the authorization_endpoint and the issuer.

>authorization_endpoint
<br>
>REQUIRED. URL of the OP's OAuth 2.0 Authorization Endpoint <a href="https://openid.net/specs/openid-connect-discovery-1_0.html#OpenID.Core" class="external-link" rel="nofollow">[OpenID.Core]</a>.

(If the authorization endpoint supports MA-TLS and this end-point is available at a different URI, then RFC 8705 Section 9.2 registers `mtls_endpoint_aliases.authorization server` as a field in the discovery document.)

#### Issues noted in the ecosystem

The following have been observed by the OIDC FAPI compliance tests in the ecosystem. There are incorrect configurations and are non-compliant with the OIDC discovery specification:

1. Some ASPSPs issue a discovery document where the `issuer` field does not match the discovery URL from which the document was retrieved.

2. Some ASPSPs have one or more authorization servers (e.g. when supporting multiple brands) that are not discoverable through the discovery document.

A checklist for correct implementations:

1. ASPSPs must issue a discovery document for their authorization server.

2. The ASPSP’s issuer URL when suffixed with `/.well-known/openid-configuration` must return the discovery document.

3. The discovery document `issuer` field must have the same value as the ASPSP’s issuer URL.

4. The ASPSP’s authorization server must be listed in the `authorization_server` field

5. The ASPSP’s authorization server field may be optionally listed in the `mtls_endpoint_aliases.authorization` server field.

6. If the ASPSP has multiple authorization servers, each authorization server must be discoverable through a separate discovery document. Each discovery document must meet the criteria above.

7. ASPSPs that use the OBL directory should register each authorization server on the OBL directory with its corresponding discovery end-point.