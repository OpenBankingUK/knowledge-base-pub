**Is it mandatory to implement refresh_token-expires_at?**

If the ASPSP issues a refresh token, the ASPSP must indicate the date-time at which the refresh token will expire in a claim named http://openbanking.org.uk/refresh_token_expires_at in the Id token (returned by the token end-point or user info end-point). Its value MUST be a number containing a NumericDate value, as specified in https://tools.ietf.org/html/rfc7519#section-2 

If the ASPSP does not issue a refresh token, the ASPSP **must not** populate the http://openbanking.org.uk/refresh_token_expires_at the claim in the Id token.

If the ASPSP issues a refresh token that does not expire, the ASPSP **must** populate the claim named http://openbanking.org.uk/refresh_token_expires_at in the Id token with a value representing the number of seconds to 03:14:07 UTC on 19 January 2038 (end of UNIX epoch).

For more details refer to: https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/read-write-data-api-profile.html#token-expiry-time

