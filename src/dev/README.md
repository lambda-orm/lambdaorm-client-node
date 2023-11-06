# Lambda ORM client node

client node for lambdaOrm service

## OpenId

- [openapi generator](https://openapi-generator.tech/)

install openapi-generator:

```sh
npm install @openapitools/openapi-generator-cli -g
```

generate api client:

```sh
npx @openapitools/openapi-generator-cli generate -i src/dev/config/lambdaorm-svc.yaml -g typescript-axios -o src/lib/client
```
