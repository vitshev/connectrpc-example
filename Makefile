export PRJ_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))/

NODE_MODULES_DIR := $(PRJ_DIR)node_modules/
TS_NODE_DEV := $(NODE_MODULES_DIR).bin/ts-node-dev

BUF ?=

ifndef BUF
BUF := buf
endif

.PHONY: proto-gen
proto-gen::
	@echo '===> proto gen'
	$(BUF) mod update
	$(BUF) generate --include-imports --config ${PRJ_DIR}buf.yaml

.PHONY: buf-build
buf-build::
	$(BUF) build --as-file-descriptor-set -o ./image.bin

.PHONY: run-grpc-backend
run-grpc-backend::
	$(TS_NODE_DEV) ./grpc-backend/index.ts

.PHONY: run-bff
run-bff::
	$(TS_NODE_DEV) ./bff/index.ts

.PHONY: run
run:: run-grpc-backend run-bff
	@echo '===> run'

.PHONY: make-test-grpc-request
make-test-grpc-request::
	npx buf curl --protocol grpc --schema ${PRJ_DIR}image.bin -d '{"book": 123}' \
   		https://localhost:8443/bookstore.Bookstore/GetBook