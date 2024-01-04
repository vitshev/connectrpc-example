```shell
  brew install buf
  npm install @connectrpc/protoc-gen-connect-es -w
  make proto-gen
  make run -j 2
```
Open http://localhost:8080/

make cert https://connectrpc.com/docs/node/getting-started/#use-the-grpc-protocol-instead-of-the-connect-protocol
OpenApi to Protobuf https://github.com/nytimes/openapi2proto