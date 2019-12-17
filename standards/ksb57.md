**Which error codes should be used when a TPP submits incorrect JSON (e.g. extra quotes, invalid date and time, etc)?**

The ASPSP should respond with 400 (Bad Request) and the relevant Namespaced Enumeration.

Please see https://openbankinguk.github.io/read-write-api-site3/v3.1.3/profiles/read-write-data-api-profile.html#incomplete-or-malformed-request-payload and https://openbankinguk.github.io/read-write-api-site3/v3.1.3/references/namespaced-enumerations.html.

