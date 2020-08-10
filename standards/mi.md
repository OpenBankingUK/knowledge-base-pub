
<!-- TOC -->

- [**What is meant by Online/Mobile Banking in MI reporting 3.1.2 specification?**](#what-is-meant-by-onlinemobile-banking-in-mi-reporting-312-specification)
- [**Which reporting template should ASPSPs use to report MI to FCA?**](#which-reporting-template-should-aspsps-use-to-report-mi-to-fca)
- [**Is the FCA reporting template same as the OBL MI reporting template?**](#is-the-fca-reporting-template-same-as-the-obl-mi-reporting-template)
- [**While reporting to FCA using the reporting template, should the ASPSP publish statistics for both website and mobile app separately?**](#while-reporting-to-fca-using-the-reporting-template-should-the-aspsp-publish-statistics-for-both-website-and-mobile-app-separately)
- [**What version value should be used to report endpoint no 0 - OIDC endpoint or endpoint 92 - Generated OIDC Authorisation code (virtual endpoint) as they are virtual endpoints?**](#what-version-value-should-be-used-to-report-endpoint-no-0---oidc-endpoint-or-endpoint-92---generated-oidc-authorisation-code-virtual-endpoint-as-they-are-virtual-endpoints)
- [**Does the 90-Days Re-authentication reporting metrics intend only to report delegated re-auth by the AISP?**](#does-the-90-days-re-authentication-reporting-metrics-intend-only-to-report-delegated-re-auth-by-the-aisp)
- [**Is there a separate metrics to report 90-days re-authentication done at the ASPSP?**](#is-there-a-separate-metrics-to-report-90-days-re-authentication-done-at-the-aspsp)
- [**Does Section 3.4-B PSU Consent Adoption (OBIE) of v3.1.5 fo MI Data dictionary refer to ‘consent’ or ‘access’ from an ASPSP reporting perspective?**](#does-section-34-b-psu-consent-adoption-obie-of-v315-fo-mi-data-dictionary-refer-to-consent-or-access-from-an-aspsp-reporting-perspective)

<!-- /TOC -->
<!-- TOC -->

### **What is meant by Online/Mobile Banking in MI reporting 3.1.2 specification?**

Online Banking covers both Desktop and Mobile browsers. Mobile Banking means only native mobile banking apps.

### **Which reporting template should ASPSPs use to report MI to FCA?**

ASPSPs must use REP020 Quarterly statistics on availability and performance of dedicated interfaces, available at https://www.handbook.fca.org.uk/form/sup/SUP_16_ann_46A_20190914.pdf

ASPSPs may also find this reporting template (<a href="https://standards.openbanking.org.uk/wp-content/uploads/2020/03/Operational-Guidelines-ASPSP-Reporting-Template-v3.1.5.xlsx" class="external-link" rel="nofollow"> Operational Guidelines ASPSP Reporting Template v3.1.5</a>) useful in this regard.

### **Is the FCA reporting template same as the OBL MI reporting template?**

No. Please refer to relevant links for templates.

* **FCA Reporting Template:** https://www.handbook.fca.org.uk/form/sup/SUP_16_ann_46A_20190914.pdf  & <a href="https://standards.openbanking.org.uk/wp-content/uploads/2020/03/Operational-Guidelines-ASPSP-Reporting-Template-v3.1.5.xlsx" class="external-link" rel="nofollow"> Operational Guidelines ASPSP Reporting Template v3.1.5</a>

* **OBL Reporting Template:** <a href="https://openbankinguk.github.io/mi-docs-pub/v3.1.5/specification/mi-reporting-profile.html#6-example-reporting-template " class="external-link" rel="nofollow"> MI Reporting Template - v3.1.5</a>


### **While reporting to FCA using the reporting template, should the ASPSP publish statistics for both website and mobile app separately?**

There are two important issues to note in this context:

1. **Publication on ASPSP Website:** The ASPSP must publish on its website, on a quarterly basis, details on availability and performance of their dedicated interface as well as, each of the interfaces made available to its own PSUs for directly accessing their payment accounts online. For example, if an ASPSP has a website and mobile app for consumer accounts and a separate website and mobile app for business accounts, they may need to report separately to cover each of the four PSU interfaces.

2. **FCA Reporting:** When submitting quarterly reports to the FCA, the report comprises of a baseline of the information published on the ASPSP website, with a breakdown which provides more granular details the specified parameters of individual endpoints. 

### **What version value should be used to report endpoint no 0 - OIDC endpoint or endpoint 92 - Generated OIDC Authorisation code (virtual endpoint) as they are virtual endpoints?**

The OIDC endpoints do not follow the same versioning as the rest of the API endpoints, so the version value should be the same as the version implemented for the AIS, PIS and CBPII services endpoints.

Example: If v3.1.5 is implemented then the reporting value for the endpoints should be v3.1.5.

### **Does the 90-Days Re-authentication reporting metrics intend only to report delegated re-auth by the AISP?**

Yes, the reporting table is created for reporting 90 days re-authentication only when the delegated re-auth proposition has been implemented.

### **Is there a separate metrics to report 90-days re-authentication done at the ASPSP?**

Not until v3.1.5 of the MI. This will be reviewed and added in the next version release.

### **Does Section 3.4-B PSU Consent Adoption (OBIE) of v3.1.5 fo MI Data dictionary refer to ‘consent’ or ‘access’ from an ASPSP reporting perspective?**

These are stated with PSU in mind (PSU perspective) and thus use of the word “consent” to indicate ‘consent’ given to the TPP by the PSU, which underpins the access at the ASPSP. However, this is ASPSP reporting and hence the section requires reporting access data statistics.
