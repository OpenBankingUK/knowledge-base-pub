# Operational Guidelines (OG)<!-- omit in toc -->

- [**Where can I find the latest version of the Operational Guidelines (OG)?**](#where-can-i-find-the-latest-version-of-the-operational-guidelines-og)
- [**When should an interface be considered 'down' for the purposes of unplanned unavailability or a systems breakdown?**](#when-should-an-interface-be-considered-down-for-the-purposes-of-unplanned-unavailability-or-a-systems-breakdown)

### **Where can I find the latest version of the Operational Guidelines (OG)?**

Please see: <a href="https://standards.openbanking.org.uk/operational-guidelines/introduction/latest/" class="external-link" rel="nofollow">https://standards.openbanking.org.uk/operational-guidelines/introduction/latest/</a>

### **When should an interface be considered 'down' for the purposes of unplanned unavailability or a systems breakdown?**

Unplanned unavailability or a systems breakdown is considered to have occurred when five consecutive requests from an AISP, PISP or CBPII have not been replied to by the ASPSP within 30 seconds. The downtime calculation will commence at the point of the first request, provided that no successful request has been provided by the ASPSP within the series of those five requests. The consecutive five requests can be submitted by one TPP or by various TPPs.

The OBL Calculation Guidelines specify that this should be calculated as follows:
* The total number of concurrent seconds per API call, per 24 hour period, starting and ending at midnight, that any element of the dedicated interface is not available divided by 86,400 (the number of seconds in 24 hours) and expressed as a percentage.
* The clock for unavailability should start immediately after the first ‘failed’ request has been received within the 30-second timeframe.

For more information, refer to : <a href="https://standards.openbanking.org.uk/operational-guidelines/availability-and-performance/key-indicators-for-availability-and-performance-availability/latest/" class="external-link" rel="nofollow">Operational Guidelines - Availability </a>
