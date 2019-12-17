**What length of URIs should be allowed for redirect**

OBIE does not define a maximum URI length.

The URI limit is something that is enforced by your server and client. It is reasonable to assume URIs could be as much as 2048 characters, which is the lowest limit of any of the major, modern browsers.

Participants should be able to handle the URIs of unbounded length if they provide GET-based forms that could generate such URIs. In the event where the TPP has exceeded the maximum supported length, the ASPSP must return a 414 (Request-URI Too Long).
