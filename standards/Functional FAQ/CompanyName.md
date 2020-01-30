## **How should TPP names be displayed during the provision of open banking services?** 
<!-- omit in toc -->

- [**How should TPP names be displayed during the provision of open banking services?**](#how-should-tpp-names-be-displayed-during-the-provision-of-open-banking-services)
  - [**Introduction**](#introduction)
  - [**What is a Company Name?**](#what-is-a-company-name)
  - [**What is a Trading Name?**](#what-is-a-trading-name)
  - [**What is an Agent?**](#what-is-an-agent)
  - [**What must be captured in ‘Client Name’ while defining a Software Statement?**](#what-must-be-captured-in-client-name-while-defining-a-software-statement)
  - [**What must be captured in ‘On Behalf of’ field while defining a Software Statement?**](#what-must-be-captured-in-on-behalf-of-field-while-defining-a-software-statement)
  - [**Which name must TPPs display to the PSU?**](#which-name-must-tpps-display-to-the-psu)
  - [**Which TPP name must ASPSPs display to the PSU?**](#which-tpp-name-must-aspsps-display-to-the-psu)
  - [**Should TPPs or ASPSPs display the TSP name to the PSU?**](#should-tpps-or-aspsps-display-the-tsp-name-to-the-psu)
  - [**When must TPPs and ASPSPs display ‘On Behalf of’ to the PSU?**](#when-must-tpps-and-aspsps-display-on-behalf-of-to-the-psu)
  - [**Examples**](#examples)


### **Introduction**
All TPPs have a legal name, which will appear in both their eIDAS certificate and their relevant National Competent Authority (NCA) register. It is also possible that they may have a customer-facing brand or trading name, TPPs are expected to ensure that the customer is kept aware of their name during the provision of open banking services. During the provision of an AISP, PISP or CBPII service, the customer will see this name in the TPP’s domain (when granting consent), as well as, the in the ASPSP domain during authentication. When TPPs are using the services of an agent,  TPP must ensure this relationship is clearly represented to the customer. It is also recommended that  ASPSPs display the name of an agent to the PSU  within their authentication journey. The names of TPPs and their associated agents (where relevant) will also need to be made available in the ASPSP’s access dashboard and a TPPs consent dashboard respectively. 

The Open Banking Directory allows TPPs to create software statements which have three available fields:

Organisation Name: the legal company name of the TPP as stated on the NCA register/eIDAS certificate. 

Client Name: any customer-facing brand or trading name, which could be a company, product, or brand name.

On Behalf Of: the name of any agent of a TPP, who must also be registered as an agent with the NCA and displayed on the NCA register.

The information from these fields can then be displayed to the PSU by TPPs and ASPSPs during the process of consent, authentication and revocation. However, currently, there is no consistent approach between TPPs and ASPSPs in terms of which of the legal or trading names are displayed. There are also a number of TSPs, acting on behalf of TPPs, who are incorrectly using their name instead of the TPP name. This can create a poor customer experience, confuse customers, and reduce the adoption and benefits of open banking services. It is essential that  PSUs are clearly informed of the name of the TPP that is providing the payment service. 

Further guidance around this will be provided in CEGs and Directory services in due course. In the meantime, OBIE has published some relevant FAQs below:

### **What is a Company Name?**
A company name is the registered legal entity name of the business. This is also referred to as the Organisation Name or Business Name and is usually the name that will appear on the relevant NCA register, as well as, the eIDAS certificate.

### **What is a Trading Name?**
A trading name is a name (or names) used by a person, partnership or company for carrying out business, which is not the same as their own name or official registered name. The trading name is the customer-facing entity name of the company or the name of a brand or product owned by the company.

### **What is an Agent?**
Under the PSRs, an agent means a person or entity who acts on behalf of an authorised payment institution or a small payment institution in the provision of payment service. 

For more guidance from FCA refer to https://www.fca.org.uk/firms/agency-models-under-psd2

### **What must be captured in ‘Client Name’ while defining a Software Statement?**
Client Name is the Trading Name or the name of a brand or product owned by the Company. The TPP must capture the Trading Name if it is different from the registered legal entity name. If the TPP is trading in the same name as the company name then the Client Name must be the same as the company name.

### **What must be captured in ‘On Behalf of’ field while defining a Software Statement?**
‘On Behalf of’ field is the agent name (Trading Name of the Agent Company) acting on behalf of the TPP. This field should only be used if there is an agent acting on behalf of the TPP and therefore is not mandatory. 

### **Which name must TPPs display to the PSU?**
TPPs must display the company’s trading name/brand name (i.e. the Client Name) to the PSU during the setup and revocation of consent. 

### **Which TPP name must ASPSPs display to the PSU?**
ASPSPs must display the TPPs trading name/brand name (i.e. the Client Name) to the PSU during authentication and on any access dashboards. They do not need to display the registered company name even if it is different.

### **Should TPPs or ASPSPs display the TSP name to the PSU?**
No. The name displayed must always be that of the TPP, not the TSP. 

### **When must TPPs and ASPSPs display ‘On Behalf of’ to the PSU?**
If the customer-facing entity is acting on behalf of a TPP as its agent, the PSU must be made aware of the agent name as the ‘On behalf of’ entity name.  Only in instances where there is an agent acting on behalf of the TPP, the ‘On Behalf of’ name has to be displayed to the PSU. This should also be displayed in the consent and access dashboards, as appropriate. TPPs must not populate the ' On behalf of' field with the details of their TSP.

### **Examples**

| Customer-facing entity name /Trading Name (Client Name in Software Statement) | Registered Legal Entity Name (Company Name/ Organisation Name) | ‘On Behalf of’ Name (‘On Behalf of’ field in Software Statement) | What to display                                      |
|-------------------------------------------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------|
| ABC Trades                                                                    | ABC Company Ltd                                                | None                                                             | ABC Trades                       |
| ABC Company Ltd                                                               | ABC Company Ltd                                                | None                                                             | ABC Company Ltd                                      |
| ABC Company Ltd                                                               | ABC Company Ltd                                                | OBO Ltd                                                          | OBO Ltd on behalf of ABC Company Ltd                 |
| ABC Trades                                                                    | ABC Company Ltd                                                | OBO Ltd                                                          | OBO Ltd on behalf of ABC Trades  |