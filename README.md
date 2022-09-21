# Frequently Asked Questions (FAQs)

- [Standards](./docs/standards/README.md)
  - [Open Data API Specifications](./docs/standards/open-data.md)
  - [Read Write Data Specification](./docs/standards/read-write.md)
  - [Customer Experience Guidelines](./docs/standards/ceg.md)
  - [Operational Guidelines](./docs/standards/og.md)
  - [Dynamic Client Registration](./docs/standards/dcr.md)
  - [General](./docs/standards/general/README.md)
    - [90 days](docs/standards/general/90days.md)
    - [VRP](docs/standards/general/vrp.md)
    - [Company Name](./docs/standards/general/company-name.md)
    - [Message Signing](./docs/standards/general/message-sign.md)
- [Dynamic Client Registration Tool](./conformance-tools/dynamic-client-registration-tool/README.md)
- [Functional Conformance Tool](./conformance-tools/functional-conformance-tool/README.md)
- [Security Conformance Tool](./conformance-tools/security-conformance-tool/README.md)


This is using Github pages for public facing website

Public website lives here:
<https://openbankinguk.github.io/knowledge-base-pub/>.

## Project structure

All specification documents are written in markdown and under the folder `docs/`

The markdown specification files are used as source to convert into the html and then put it somewhere public facing. 
We're using [github pages](https://pages.github.com/) to release documentation to public.

## Development

### Requirements

- node
- yarn 
- vuepress (installed by yarn)

### Content

Content is a mix of markdown files and other assets like images. 
Vuepress documentation has details on how to use.

### Branches

- `master` contains the source used to generate the live website
- `develop` contains work in progress before publishing, example a new version 3.1.9

### Setup

To set up this project:

Clone the repo

```sh
git clone git@github.com:OpenBankingUK/knowledge-base-pub.git
```

Install all node dependencies:

```sh
yarn install --non-interactive
```

### Running locally

Run the following command and open your browser at `http://:8080/knowledge-base-pub/` to see the generated website.

```sh
yarn docs:dev
```

## Building

Running the script `build.sh` will generate all HTML in `docs/.vuepress/dist/` folder. 

```sh
./build.sh
```

## Deploy

Deployment is achieved using GitHub Actions, they generate and copy the content html/assets files into GitHub pages branch, making it live.

Check file [.github/workflows/deploy.yml](.github/workflows/deploy-production.yml) for details on CI/CD pipeline.

### Staging

There is no staging environment at the moment. If you really need to pre-publish follow these steps:

- Create a repository that will host the staging github pages ex: knowledge-base-pub-stg
- Change [vuepress config file](docs/.vuepress/config.js), property base to the name of the new repository ex:  `base: '/knowledge-base-pub-stg/'`
- Generate the content with `yarn docs:build`
- Copy the generated content in `docs/.vuepress/dist` to the new repository on branch `gh-pages`
- Enable github pages on the new repository, and it should become visible the website 

### Manual checks

- Verify links on left navigation menu work
- Verify that images are not broken 
- General website style looks normal and all aligned 