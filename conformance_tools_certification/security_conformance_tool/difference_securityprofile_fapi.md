**What is the difference between the OBIE Security Profile and FAPI?** 

OBIE largely adopted the FAPI-RW specification, but in order to allow all CMA 9 ASPSPs to launch a service on the 13th January 2018, a number of concessions were made in a UK Open Banking Security Profile.

The main two areas of difference were:-
* Client authentication: Whilst FAPI requires the use of OAuth MTLS or private_key_jwt client authentication, OpenBanking's deprecated security profile chose to also allow (but not recommend) client_secret_basic and client_secret_post as interim measures - albeit also requiring that matching MTLS certificates are also presented.

* Response Type: FAPI only allows response_type=code id_token. OpenBanking's deprecated security profile decided to also allow response_type=code "as an interim measure if not yet able to support code id_token"; the expectation would be that (due to known security flaws) any support for response_type=code would be removed shortly after an ASPSP has been able to update their software to support response_type=code id_token.

There are some other differences too, but the other changes are generally more minor.

On 23rd August 2018, OBIE's Technical Design Authority (TDA) agreed a decision to switch from the Open Banking Security Profile to the Financial Grade API (FAPI) Profile. 

The Open Banking Security Profile is hence <u>obsolete</u>.
