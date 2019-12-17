**Which field should ASPSPs map to the TPP's name to show the PSU in the Consent UI?**

ASPSPs should display the name of the authorised TPP and additionally, if relevant, the name of the any agent acting on behalf of the TPP. This should be displayed during the consent journey and in any access dashboards as indicated in the Customer Experience Guidelines.

Where an ASPSP is relying on a Software Statement Assertion (for example via the Open Banking Directory), the name of the TPP is the value of the org_name field, and the agent is the value of the software_on_behalf_of_org field. For more details, please see: https://github.com/OpenBankingUK/directory-api-specs
