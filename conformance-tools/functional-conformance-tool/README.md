<!-- TOC -->

- [**How to I validate and trust the Conformance Tool image I'm downloading?**](#how-to-i-validate-and-trust-the-conformance-tool-image-im-downloading)
- [**What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?**](#what-is-the-high-level-overview-of-the-conformance-tool-and-dynamic-client-registration-roadmap-for-20192020)
- [**Where do I download the Conformance Tool?**](#where-do-i-download-the-conformance-tool)
- [**Why does an ASPSP need to provide Functional Conformance?**](#why-does-an-aspsp-need-to-provide-functional-conformance)
- [**What version of the Read/Write specifications does the conformance tool support?**](#what-version-of-the-readwrite-specifications-does-the-conformance-tool-support)
- [**Where can I download the conformance tool from?**](#where-can-i-download-the-conformance-tool-from)
- [**To pass OIDF FAPI Security Conformance Suite, does the TPP need to disable the response type 'code'?**](#to-pass-oidf-fapi-security-conformance-suite-does-the-tpp-need-to-disable-the-response-type-code)
- [**What does a ‘certificate signed by unknown authority’ error mean?**](#what-does-a-certificate-signed-by-unknown-authority-error-mean)
- [**I want to run the functional conformance test suite. Is it an automated process?**](#i-want-to-run-the-functional-conformance-test-suite-is-it-an-automated-process)
- [**When I run the conformance tool, I get a 500 error - 'Failed to Check for Updates'. What does that mean?**](#when-i-run-the-conformance-tool-i-get-a-500-error---failed-to-check-for-updates-what-does-that-mean)
- [**Does the conformance tool support EIDAS certificate?**](#does-the-conformance-tool-support-eidas-certificate)

<!-- /TOC -->
- [**How to I validate and trust the Conformance Tool image I'm downloading?**](#how-to-i-validate-and-trust-the-conformance-tool-image-im-downloading)
- [**What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?**](#what-is-the-high-level-overview-of-the-conformance-tool-and-dynamic-client-registration-roadmap-for-20192020)
- [**Where do I download the Conformance Tool?**](#where-do-i-download-the-conformance-tool)
- [**Why does an ASPSP need to provide Functional Conformance?**](#why-does-an-aspsp-need-to-provide-functional-conformance)
- [**What version of the Read/Write specifications does the conformance tool support?**](#what-version-of-the-readwrite-specifications-does-the-conformance-tool-support)
- [**Where can I download the conformance tool from?**](#where-can-i-download-the-conformance-tool-from)
- [**To pass OIDF FAPI Security Conformance Suite, does the TPP need to disable the response type 'code'?**](#to-pass-oidf-fapi-security-conformance-suite-does-the-tpp-need-to-disable-the-response-type-code)
- [**What does a ‘certificate signed by unknown authority’ error mean?**](#what-does-a-certificate-signed-by-unknown-authority-error-mean)
- [**I want to run the functional conformance test suite. Is it an automated process?**](#i-want-to-run-the-functional-conformance-test-suite-is-it-an-automated-process)
- [**When I run the conformance tool, I get a 500 error - 'Failed to Check for Updates'. What does that mean?**](#when-i-run-the-conformance-tool-i-get-a-500-error---failed-to-check-for-updates-what-does-that-mean)
- [**Does the conformance tool support EIDAS certificate?**](#does-the-conformance-tool-support-eidas-certificate)

### **How to I validate and trust the Conformance Tool image I'm downloading?**

Docker Content Trust (DCT) allows Open Banking to sign docker images before they get published to the Docker Hub registry. These signatures allow client-side or runtime verification of the integrity and publisher of specific image tags.

You can find full details on how to validate [here](https://bitbucket.org/openbankingteam/conformance-suite/src/develop/docs/docker_content_trust.md)

### **What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?**

Conformance Tool & Dynamic Client Registration Roadmap 2019/2020.

- [Roadmap](./roadmap.md)

### **Where do I download the Conformance Tool?**

The Conformance tool can be downloaded as an image from DockerHub or run as source code from Bitbucket.
https://cloud.docker.com/u/openbanking/repository/docker/openbanking/conformance-suite
https://bitbucket.org/openbankingteam/conformance-suite/

### **Why does an ASPSP need to provide Functional Conformance?**

An ASPSP may use the Functional Conformance tool as a means of providing evidence to their competent authority that their PSD2 interfaces are based on an open and widely accepted standard. The competent authority may take this into consideration while processing the ASPSP's application for an exemption to provide a fallback interface.

### **What version of the Read/Write specifications does the conformance tool support?**

The conformance tool currently supports the following versions 3.1.0, 3.1.1, 3.1.2, 3.1.3, 3.1.4, 3.1.5, and 3.1.6 (due end July 2020).

### **Where can I download the conformance tool from?**

It can be found here https://bitbucket.org/openbankingteam/conformance-suite/src/develop/

### **To pass OIDF FAPI Security Conformance Suite, does the TPP need to disable the response type 'code'?**

No. An ASPSP may reject the request if any response type is not supported.

### **What does a ‘certificate signed by unknown authority’ error mean?**

Both the DCR and Functional Conformance tools run in docker containers. Each container has a list of trusted certificate authorities installed into them when they are built. "certificate signed by unknown authority" means that the certificate authority used to sign the certificate being used to secure a connection isn't in the list of trusted certificate authorities installed in the docker container.

### **I want to run the functional conformance test suite. Is it an automated process?** 

Yes, the Functional Conformance test Suite tool automates the tests, but you will still need to access the tests on the web page to start them. 

The conformance tool goes through the process of executing multiple tests in an automated manner. However, during the execution of these tests, some human intervention may be required (e.g. to authorise consents). In the absence of a standard to provide a “headless authentication” to avoid such steps, complete automation is not realistically possible.

This is an area which we are looking to improve functionality such that the tool can be used in a fully automated manner. If you're interested in this area, please get in touch with the conformance tool team to discuss your requirement.

### **When I run the conformance tool, I get a 500 error - 'Failed to Check for Updates'. What does that mean?**

When the conformance tool is run, it checks to see if you're running the latest version by connecting to the host api.bitbucket.org. If this host is not accessible because of local network restrictions, you'll receive a 'Failed to Check for Updates, Got 500 Error'. The error doesn't prevent the suite from running. 
Executing the command: docker run --rm -it -p 8443:8443 "openbanking/conformance-suite:latest" will ensure that you are running with the latest version of the tool.


### **Does the conformance tool support EIDAS certificate?**

Yes, when using EIDAS certificates with the conformance tool, the user must enter the issuer string for payments and the signing key-id into the configuration screen. This allows the tool to create signed payment requests using EIDAS certificates.
