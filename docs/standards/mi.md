# MI Reporting
[[toc]]

### **What is meant by Online/Mobile Banking in MI reporting 3.1.2 specification?**

Online Banking covers both Desktop and Mobile browsers. Mobile Banking means only native mobile banking apps.

### **Which reporting template should ASPSPs use to report MI to FCA?**

ASPSPs must use REP020 Quarterly statistics on availability and performance of dedicated interfaces, available at https://www.handbook.fca.org.uk/form/sup/SUP_16_ann_46A_20190914.pdf

ASPSPs may also find this reporting template (<a href="https://standards.openbanking.org.uk/wp-content/uploads/2022/04/Operational-Guidelines-ASPSP-Reporting-Template-v3.1.10v1.xlsx" class="external-link" rel="nofollow"> Operational Guidelines ASPSP Reporting Template v4.0</a>) useful in this regard.


### **Is the FCA reporting template same as the OBL MI reporting template?**

No. Please refer to relevant links for templates.

* **FCA Reporting Template:** https://www.handbook.fca.org.uk/form/sup/SUP_16_ann_46A_20190914.pdf  & <a href="https://standards.openbanking.org.uk/wp-content/uploads/2022/04/Operational-Guidelines-ASPSP-Reporting-Template-v3.1.10v1.xlsx" class="external-link" rel="nofollow"> Operational Guidelines ASPSP Reporting Template v4.0</a>

* **OBL Reporting Template:** <a href="https://openbankinguk.github.io/mi-docs-pub/v3.1.11-aspsp/specification/example-reporting-template.html" class="external-link" rel="nofollow"> ASPSP MI Reporting Template - v3.1.11</a>


### **While reporting to FCA using the reporting template, should the ASPSP publish statistics for both website and mobile app separately?**

There are two important issues to note in this context:

1. **Publication on ASPSP Website:** The ASPSP must publish on its website, on a quarterly basis, details on availability and performance of their dedicated interface as well as, each of the interfaces made available to its own PSUs for directly accessing their payment accounts online. For example, if an ASPSP has a website and mobile app for consumer accounts and a separate website and mobile app for business accounts, they may need to report separately to cover each of the four PSU interfaces.

2. **FCA Reporting:** When submitting quarterly reports to the FCA, the report comprises of a baseline of the information published on the ASPSP website, with a breakdown which provides more granular details the specified parameters of individual endpoints. 

### **What version value should be used to report endpoint no 0 - OIDC endpoint or endpoint 92 - Generated OIDC Authorisation code (virtual endpoint) as they are virtual endpoints?**

The OIDC endpoints do not follow the same versioning as the rest of the API endpoints, so the version value should be the same as the version implemented for the AIS, PIS and CBPII services endpoints.

Example: If v3.1.11 is implemented then the reporting value for the endpoints should be v3.1.11.

### **Does the 90-Days re-authentication reporting metrics intend only to report delegated re-auth by the AISP?**

Yes, the reporting table is created for reporting 90 days re-authentication only when the delegated re-auth proposition has been implemented. Applicable only to EU AISPs.

### **Is there a separate metrics to report 90-days re-authentication done at the ASPSP?**

Not until v3.1.5 of the MI. 

### **Does Section 3.4-B PSU Consent Adoption (OBL) of ASPSP MI Data dictionary refer to ‘consent’ or ‘access’ from an ASPSP reporting perspective?**

These are stated with PSU in mind (PSU perspective) and thus use of the word “consent” to indicate ‘consent’ given to the TPP by the PSU, which underpins the access at the ASPSP. However, this is ASPSP reporting and hence the section requires reporting access data statistics.

### **What counts as a long-lived AIS consent? After how long?**

From a technical perspective, consents that have an expiry of less or equal to 15 days are considered One-offs consents and beyond that are long-lived.

### **Why is the implementation status ‘N/A’ for Authorisation code endpoint?**

The Authorization Code endpoint is not a real OIDC endpoint, but it is simply an entry (a virtual endpoint) to be used for measuring the time period (Td) of the authorisation code generation by ASPSPs and hence the implementation status column is N/A.

### **Is Payment consent long-lived or short-lived?**

Payment-consent are meant to be “short-lived” and should be expected to last for a few minutes at most. However, a PIS Variable recurring payment consent is long-lived.

### **Do we need to report a count of all the successful authorisers as part of Multi Auth API Calls Successful (ID #13) of Daily Volumes MI?**

As this is part of the Daily Volumes MI, it is to report only on the day when the payment consent is moved to ‘Authorised’ state i.e. all the authorisers have fully authorised.

### **Do we need to report a count of all the consents that failed authorisation as part of Multi Auth API Calls Successful (ID #13) of Daily Volumes MI?**

As this is part of the Daily Volumes MI, it is to report only on the day when the status of the consent is moved to ‘Rejected’ state i.e. when one of the authorisers have rejected it on the day.

### **Does an ASPSP need to report on all the endpoints marked as mandatory for all the versions?**

No, the ASPSPs need to only report on the endpoints that are supported by the current live versions.

### **Does Auth Efficacy MI need to report separately on PIS for VRPs under the PISP API type reporting?**

No. This has to be included under API type=PIS