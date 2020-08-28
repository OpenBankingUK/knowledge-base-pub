## Message Signing FAQs

[[toc]]

### **Are there different versions for message signing? As a TPP, which version should I be using?**
There are primarily three versions of message signing in the OBIE specifications:

Read-Write API Specifications 3.0
Read-Write API Specifications 3.1.3
Read-Write API Specification 3.1.4+

The version that is to be used is determined by the Read-Write API profile version that is supported by the ASPSP. The information can be found on ASPSP’s developer portal and possibly on the <a href="
https://openbanking.atlassian.net/wiki/spaces/AD/pages/1135346433/Transparency+Calendar
" class="external-link" rel="nofollow">transparency calendar</a>.

Note: The rest of this FAQ covers Version 3.1.x only. Version 3.0 signatures are no longer supported by OBIE.


### **What are the key differences between each of these versions?**
Please refer to the specifications for how the message signatures are to be constructed and verified.

The main difference between signatures in Version 3.0 and 3.1.x is that Version 3.1.x signatures are not tightly coupled with the `subject` of the signing certificate. Certificates can be generated using simple asymmetric key pairs. The 3.1.x specification introduces a new `tan` claim to identify the trust anchor. The trust anchor is the entity responsible for providing access to the public keys required to verify signatures.

Between Version 3.1.3 and later versions, the key point of divergence is the removal of the `b64` claim. Participants using Version 3.1.3 or earlier must support and process correctly signatures that are set to have `b64` as false. `b64`=false indicates that the detached payload is not base64 encoded when calculating the signature.


### **What should be the `iss` when using an EIDAS certificate?**
The structure of the `iss` field is defined by the trust anchor.

1. If the certificate is lodged with the Open Banking Directory and Open Banking Directory is the trust anchor (as indicated by the tan value equal to `openbanking.org.uk`)

    a. When issued by a TPP, `iss` has the form <span v-pre>`{{orgi-id}}/{{software-statement-id}}`</span>,

   b. When issued by an ASPSP, `iss` has the form <span v-pre>`{{org-id}}`</span>

2. If the certificate is lodged with another trust anchor, the trust anchor should specify the expected iss values that would identify the issuer of the signature.

3. If the certificate is not lodged with a trust anchor, then the subject of the certificate should be used as the `iss`

The specification does not state how a signature of the last type should be verified by the ASPSP. The ASPSP may have additional requirements for ensuring that the public key is securely transmitted and for the durability of the key.

When a TPP EIDAS certificate is lodged with the Open Banking Directory and Open Banking Directory is the trust anchor, `iss` has the form <span v-pre>`{{orgi-id}}/{{software-statement-id}}`</span>.

When an ASPSP EIDAS certificate is lodged with the Open Banking Directory and Open Banking Directory is the trust anchor, `iss` has the form <span v-pre>`{{orgi-id}}`</span>.


### **What is the `tan` value for Directory Sandbox?**
The specification does not define the expected `tan` value to be used by ASPSP’s (testing facilities) that use the Directory Sandbox. 

Each ASPSP is free to define what `tan` values would be accepted by their sandboxes.


### **Which API requests and responses should be signed?**
The specification is clear about which API requests and responses require signatures:

The `Endpoints` table for resource documentation has a column called “Message Signing”. The column specifies whether the API has “signed requests”, “signed response” or both.

The swagger specification indicates which requests and responses would have signatures through the presence of the `x-jws-signature`

### **When signing an HTTP payload, should the input be the “raw” HTTP payload or a parsed and cleansed JSON object?**

Signature generation and validation should always be based on the raw sequence of bytes that constitute the HTTP body (prior to the application of HTTP transformations such as multi-part encoding, gzip/deflate etc.)

Some further notes:

* The only consistent payload that is available to the sender and receiver is the byte representation of the HTTP body.

* Using payloads at the JSON level would expose the sign/verify method to the vagaries of a JSON parser - this would make it impossible to cater to every permutation that could occur in the ecosystem.

* The standard does not specifically talk about signatures on JSON bodies - it talks about signatures on any content-type as indicated by `cty`. This would further add to the interpretation that this needs to be the raw HTTP body.

* Although we state “raw body” here, it leaves things to further interpretation around how HTTP handles the body part. The body can be gzip/deflate encoded and it could also be multi-part encoded. However, this encoding would take place at the HTTP level once the sender starts transmitting the message. Since this is likely to take place after the signature has been generated, we should not be thinking about this “raw” level of the body, but the byte representation of the body once the HTTP mechanisms have been accounted for.