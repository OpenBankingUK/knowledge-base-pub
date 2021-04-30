(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(e,t,n){"use strict";n.r(t);var o=n(3),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",[e._v("Security Conformance Tool ")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#what-is-the-difference-between-the-obie-security-profile-and-fapi"}},[e._v("What is the difference between the OBIE Security Profile and FAPI?")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#how-do-i-get-security-conformance"}},[e._v("How Do I Get Security Conformance?")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#what-is-conformance-and-why-do-i-need-it"}},[e._v("What is Conformance and Why Do I Need It?")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#who-is-the-open-id-foundation-oidf"}},[e._v("Who is the Open ID Foundation (OIDF)?")])])]),e._v(" "),n("h3",{attrs:{id:"what-is-the-difference-between-the-obie-security-profile-and-fapi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-the-obie-security-profile-and-fapi"}},[e._v("#")]),e._v(" "),n("strong",[e._v("What is the difference between the OBIE Security Profile and FAPI?")])]),e._v(" "),n("p",[e._v("OBIE largely adopted the FAPI-RW specification, but in order to allow all CMA 9 ASPSPs to launch a service on the 13th January 2018, a number of concessions were made in a UK Open Banking Security Profile.")]),e._v(" "),n("p",[e._v("The main two areas of difference were:-")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Client authentication: Whilst FAPI requires the use of OAuth MTLS or private_key_jwt client authentication, OpenBanking's deprecated security profile chose to also allow (but not recommend) client_secret_basic and client_secret_post as interim measures - albeit also requiring that matching MTLS certificates are also presented.")])]),e._v(" "),n("li",[n("p",[e._v('Response Type: FAPI only allows response_type=code id_token. OpenBanking\'s deprecated security profile decided to also allow response_type=code "as an interim measure if not yet able to support code id_token"; the expectation would be that (due to known security flaws) any support for response_type=code would be removed shortly after an ASPSP has been able to update their software to support response_type=code id_token.')])])]),e._v(" "),n("p",[e._v("There are some other differences too, but the other changes are generally more minor.")]),e._v(" "),n("p",[e._v("On 23rd August 2018, OBIE's Technical Design Authority (TDA) agreed a decision to switch from the Open Banking Security Profile to the Financial Grade API (FAPI) Profile.")]),e._v(" "),n("p",[e._v("The Open Banking Security Profile is hence "),n("u",[e._v("obsolete")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"how-do-i-get-security-conformance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-security-conformance"}},[e._v("#")]),e._v(" "),n("strong",[e._v("How Do I Get Security Conformance?")])]),e._v(" "),n("p",[e._v("By using the OpenID Foundation FAPI conformance suite.  The instructions can be found at https://openid.net/certification/testing/ This suite is based on the Open Banking Security Profile conformance suite, which Open Banking donated to the OpenID Foundation. The suite has been updated to fully test FAPI-RW implementers draft 2 (currently the latest version of the spec, and the version of FAPI Open Banking adopted).This is the security conformance suite that Open Banking recommend is used.  In due course it is hoped that this test will cover all appropriate parts of the OpenID Connect Core tests, removing the need to run the 'Core' conformance suite.")]),e._v(" "),n("p",[e._v("It's important to also remember that ASPSPs should aim to test all the applicable software. In most ASPSPs this will mean running security conformance against:-")]),e._v(" "),n("ul",[n("li",[e._v("All production deployments.")]),e._v(" "),n("li",[e._v("All sandboxes.")]),e._v(" "),n("li",[e._v("All iOS applications (that implement 'app2app').")]),e._v(" "),n("li",[e._v("All Android applications (that implement 'app2app').")])]),e._v(" "),n("h3",{attrs:{id:"what-is-conformance-and-why-do-i-need-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-conformance-and-why-do-i-need-it"}},[e._v("#")]),e._v(" "),n("strong",[e._v("What is Conformance and Why Do I Need It?")])]),e._v(" "),n("p",[e._v("An ASPSP may use the Functional Conformance tool as a means of providing evidence to their competent authority that their PSD2 interfaces are based on an open and widely accepted standard. The competent authority MAY take this into consideration while processing the ASPSP's application for a exemption to provide a fallback interface.  This will require that the ASPSPs align to the FAPI standard and support one of the FAPI mandated client authentication")]),e._v(" "),n("h3",{attrs:{id:"who-is-the-open-id-foundation-oidf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#who-is-the-open-id-foundation-oidf"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Who is the Open ID Foundation (OIDF)?")])]),e._v(" "),n("p",[e._v("Details on the OIDF can be found here: "),n("a",{staticClass:"external-link",attrs:{href:"https://openid.net/foundation/",rel:"nofollow"}},[e._v("https://openid.net/foundation/")])]),e._v(" "),n("p",[e._v("Details of the OIDF Conformance Testing can be found here: "),n("a",{staticClass:"external-link",attrs:{href:"https://openid.net/certification/testing/",rel:"nofollow"}},[e._v("https://openid.net/certification/testing/")])])])}),[],!1,null,null,null);t.default=i.exports}}]);