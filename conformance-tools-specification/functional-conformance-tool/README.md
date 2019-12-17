# Functional Conformance Tool <!-- omit in toc -->
- [How to I validate and trust the Conformance Tool image I'm downloading?](#how-to-i-validate-and-trust-the-conformance-tool-image-im-downloading)
- [What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?](#what-is-the-high-level-overview-of-the-conformance-tool-and-dynamic-client-registration-roadmap-for-20192020)
- [What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?](#what-is-the-high-level-overview-of-the-conformance-tool-and-dynamic-client-registration-roadmap-for-20192020-1)
- [Where do I download the Conformance Tool?](#where-do-i-download-the-conformance-tool)
- [Why does an ASPSP need to provide Functional Conformance?](#why-does-an-aspsp-need-to-provide-functional-conformance)

### **How to I validate and trust the Conformance Tool image I'm downloading?**

Docker Content Trust (DCT) allows Open Banking to sign docker images before they get published to the Docker Hub registry. These signatures allow client-side or runtime verification of the integrity and publisher of specific image tags.

You can find full details on how to validate [here](https://bitbucket.org/openbankingteam/conformance-suite/src/develop/docs/docker_content_trust.md)

### **What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?**

Conformance Tool & Dynamic Client Registration Roadmap 2019/2020.

https://bitbucket.org/openbankingteam/knowledge-base/src/master/conformance_tools_certification/roadmap.md

### **What is the High-level overview of the Conformance Tool and Dynamic Client Registration Roadmap for 2019/2020?**

Conformance Tool & Dynamic Client Registration Roadmap 2019/2020.

- [Roadmap](./../roadmap.md)

### **Where do I download the Conformance Tool?**

The Conformance tool can be downloaded as an image from DockerHub or run as source code from Bitbucket.
https://cloud.docker.com/u/openbanking/repository/docker/openbanking/conformance-suite
https://bitbucket.org/openbankingteam/conformance-suite/

### **Why does an ASPSP need to provide Functional Conformance?**

An ASPSP may use the Functional Conformance tool as a means of providing evidence to their competent authority that their PSD2 interfaces are based on an open and widely accepted standard. The competent authority may take this into consideration while processing the ASPSP's application for an exemption to provide a fallback interface.
