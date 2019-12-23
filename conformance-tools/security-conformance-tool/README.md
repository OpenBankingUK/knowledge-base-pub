# Security Conformance Tool <!-- omit in toc -->
- [What is the difference between the OBIE Security Profile and FAPI?](#what-is-the-difference-between-the-obie-security-profile-and-fapi)
- [How Do I Get Security Conformance?](#how-do-i-get-security-conformance)
- [What is Conformance and Why Do I Need It?](#what-is-conformance-and-why-do-i-need-it)
- [Who is the Open ID Foundation (OIDF)?](#who-is-the-open-id-foundation-oidf)
### **What is the difference between the OBIE Security Profile and FAPI?**

OBIE largely adopted the FAPI-RW specification, but in order to allow all CMA 9 ASPSPs to launch a service on the 13th January 2018, a number of concessions were made in a UK Open Banking Security Profile.

The main two areas of difference were:-
* Client authentication: Whilst FAPI requires the use of OAuth MTLS or private_key_jwt client authentication, OpenBanking's deprecated security profile chose to also allow (but not recommend) client_secret_basic and client_secret_post as interim measures - albeit also requiring that matching MTLS certificates are also presented.

* Response Type: FAPI only allows response_type=code id_token. OpenBanking's deprecated security profile decided to also allow response_type=code "as an interim measure if not yet able to support code id_token"; the expectation would be that (due to known security flaws) any support for response_type=code would be removed shortly after an ASPSP has been able to update their software to support response_type=code id_token.

There are some other differences too, but the other changes are generally more minor.

On 23rd August 2018, OBIE's Technical Design Authority (TDA) agreed a decision to switch from the Open Banking Security Profile to the Financial Grade API (FAPI) Profile.

The Open Banking Security Profile is hence <u>obsolete</u>.

### **How Do I Get Security Conformance?**

By using the OpenID Foundation FAPI conformance suite.  The instructions can be found at https://openid.net/certification/testing/ This suite is based on the Open Banking Security Profile conformance suite, which Open Banking donated to the OpenID Foundation. The suite has been updated to fully test FAPI-RW implementers draft 2 (currently the latest version of the spec, and the version of FAPI Open Banking adopted).This is the security conformance suite that Open Banking recommend is used.  In due course it is hoped that this test will cover all appropriate parts of the OpenID Connect Core tests, removing the need to run the 'Core' conformance suite.

It's important to also remember that ASPSPs should aim to test all the applicable software. In most ASPSPs this will mean running security conformance against:-

* All production deployments.
* All sandboxes.
* All iOS applications (that implement 'app2app').
* All Android applications (that implement 'app2app').

### **What is Conformance and Why Do I Need It?**

An ASPSP may use the Functional Conformance tool as a means of providing evidence to their competent authority that their PSD2 interfaces are based on an open and widely accepted standard. The competent authority MAY take this into consideration while processing the ASPSP's application for a exemption to provide a fallback interface.  This will require that the ASPSPs align to the FAPI standard and support one of the FAPI mandated client authentication

### **Who is the Open ID Foundation (OIDF)?**

Details on the OIDF can be found here: <a href="https://openid.net/foundation/" class="external-link" rel="nofollow">https://openid.net/foundation/</a>

Details of the OIDF Conformance Testing can be found here: <a href="https://openid.net/certification/testing/" class="external-link" rel="nofollow">https://openid.net/certification/testing/</a>
