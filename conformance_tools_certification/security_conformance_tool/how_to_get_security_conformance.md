**How Do I Get Security Conformance?** 

By using the OpenID Foundation FAPI conformance suite.  The instructions can be found at https://openid.net/certification/testing/ This suite is based on the Open Banking Security Profile conformance suite, which Open Banking donated to the OpenID Foundation. The suite has been updated to fully test FAPI-RW implementers draft 2 (currently the latest version of the spec, and the version of FAPI Open Banking adopted).This is the security conformance suite that Open Banking recommend is used.  In due course it is hoped that this test will cover all appropriate parts of the OpenID Connect Core tests, removing the need to run the 'Core' conformance suite.

It's important to also remember that ASPSPs should aim to test all the applicable software. In most ASPSPs this will mean running security conformance against:-

* All production deployments.
* All sandboxes.
* All iOS applications (that implement 'app2app').
* All Android applications (that implement 'app2app').
