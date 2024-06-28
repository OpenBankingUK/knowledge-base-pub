# Security Conformance Tool <!-- omit in toc -->
- [What is the difference between the OBIE Security Profile and FAPI?](#what-is-the-difference-between-the-obie-security-profile-and-fapi)
- [How Do I Get Security Conformance?](#how-do-i-get-security-conformance)
- [What is Conformance and Why Do I Need It?](#what-is-conformance-and-why-do-i-need-it)
- [Who is the Open ID Foundation (OIDF)?](#who-is-the-open-id-foundation-oidf)
### **What is the difference between the OBIE Security Profile and FAPI?**

OBL largely adopted the FAPI-RW specification, but in order to allow all CMA 9 ASPSPs to launch a service on the 13th January 2018, a number of concessions were made in a UK Open Banking Security Profile.

The main two areas of difference were:-
* Client authentication: Whilst FAPI requires the use of OAuth MTLS or private_key_jwt client authentication, OpenBanking's deprecated security profile chose to also allow (but not recommend) client_secret_basic and client_secret_post as interim measures - albeit also requiring that matching MTLS certificates are also presented.

* Response Type: FAPI only allows response_type=code id_token. OpenBanking's deprecated security profile decided to also allow response_type=code "as an interim measure if not yet able to support code id_token"; the expectation would be that (due to known security flaws) any support for response_type=code would be removed shortly after an ASPSP has been able to update their software to support response_type=code id_token.

There are some other differences too, but the other changes are generally more minor.

On 23rd August 2018, OBL's Technical Design Authority (TDA) agreed a decision to switch from the Open Banking Security Profile to the Financial Grade API (FAPI) Profile.
FAPI 1 ID2 was subsequently deprecated when the final version of FAPI 1 was released and OIDF
ceased support for ID2 at the end of 2024.
On 29th November 2023 TDA voted to adopt FAPI 1 Advanced as the security profile.

The Open Banking Security Profile and use of FAPI 1 ID2 is hence <u>obsolete</u>.

### **How Do I Get Security Conformance?**

By using the OpenID Foundation FAPI conformance suite.  The instructions can be found at https://openid.net/certification/ This suite is based on the Open Banking Security Profile conformance suite, which Open Bankingdonated to the OpenID Foundation. This is the security conformance suite that Open Banking recommend is used.

It's important to also remember that ASPSPs should aim to test all the applicable software. In most ASPSPs this will mean running security conformance against:-

* All production deployments.
* All sandboxes.
* All iOS applications (that implement 'app2app').
* All Android applications (that implement 'app2app').

### **What is Conformance and Why Do I Need It?**

An ASPSP may use the Functional Conformance tool as a means of providing evidence to their competent authority that their PSD2 interfaces are based on an open and widely accepted standard. The competent authority MAY take this into consideration while processing the ASPSP's application for a exemption to provide a fallback interface.  This will require that the ASPSPs align to the FAPI standard and support one of the FAPI mandated client authentication

### **Who is the Open ID Foundation (OIDF)?**

Details on the OIDF can be found here: <a href="https://openid.net/foundation/" class="external-link" rel="nofollow">https://openid.net/foundation/</a>

Details of the OIDF Conformance Testing can be found here: <a href="https://openid.net/certification/testing/" class="external-link" rel="nofollow">https://openid.net/certification/</a>
