# Testing Auto Generated OpenAPI Clients


## Intro

This project is practicing using the OpenAPI generator to create API clients to access existing APIs

## Dependencies/Frameworks

- Java (Tested with Java 8)
- [Open API Generator](https://search.maven.org/search?q=a:openapi-generator-cli)

## Quick Setup/Run

- [ ] Download Repo
- [ ] Auto Generate JavaScript API Client JS inside unique directory in  `lib/`
**Example:**
```
cd lib/js/;
mkdir github;
cd github;
java -cp ../openapi-generator-cli-5.0.0-beta.jar org.openapitools.codegen.OpenAPIGenerator generate -i https://raw.githubusercontent.com/APIs-guru/openapi-directory/master/APIs/github.com/0.0.5/openapi.yaml --additional-properties pubName=github-api -g javascript --enable-post-process-file
```
OR for Dart code
```
cd lib/dart/;
mkdir github;
cd github;
java -cp ../../openapi-generator-cli-5.0.0-beta.jar org.openapitools.codegen.OpenAPIGenerator generate -i https://raw.githubusercontent.com/APIs-guru/openapi-directory/master/APIs/github.com/0.0.5/openapi.yaml -g dart --enable-post-process-file
```

- [ ] Build javascript in unique dir `dist/` subdirectory with `npm run build`
   - May need to resolve issues in JS generation (duplicate params)
- [ ] TBD: Use Generated Client in Javascript project


## Links

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contribute](CONTRIBUTING.md)
- [API Gurus - Open API Repository](https://github.com/APIs-guru/openapi-directory)

## Contributors

- [Devlin Junker (Me!)](mailto:devlinjunker@gmail.com)
