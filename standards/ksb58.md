**Does a TPP need to return "id_token_signed_response_alg" if they only support "code" as response type?**

No. The TPP need to return "id_token_signed_response_alg" only when the response type is "code id_token". This is the algorithm that the TPP expects to sign the id_token if an id_token is returned.
