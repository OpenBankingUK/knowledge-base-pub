# Functional Conformance Tool <!-- omit in toc -->
- [**How to I validate and trust the Conformance Tool image I'm downloading?**](#how-to-i-validate-and-trust-the-conformance-tool-image-im-downloading)
- [**What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?**](#what-is-the-high-level-overview-of-the-conformance-tool-and-dynamic-client-registration-roadmap-for-20192020)
- [**Where do I download the Conformance Tool?**](#where-do-i-download-the-conformance-tool)
- [**Why does an ASPSP need to provide Functional Conformance?**](#why-does-an-aspsp-need-to-provide-functional-conformance)
- [**What version of the Read/Write specifications does the conformance tool support?**](#what-version-of-the-readwrite-specifications-does-the-conformance-tool-support)
- [**Where can I download the conformance tool from?**](#where-can-i-download-the-conformance-tool-from)
- [**To pass OIDF FAPI Security Conformance Suite, does the TPP need to disable the response type 'code'?**](#to-pass-oidf-fapi-security-conformance-suite-does-the-tpp-need-to-disable-the-response-type-code)
- [**What does a ‘certificate signed by unknown authority’ error mean?**](#what-does-a-certificate-signed-by-unknown-authority-error-mean)

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