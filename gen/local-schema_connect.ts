// @generated by protoc-gen-connect-es v1.2.1 with parameter "target=ts,import_extension=none"
// @generated from file local-schema.proto (package localschema, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { SayResponse } from "./local-schema_pb";

/**
 * @generated from service localschema.LocalAPI
 */
export const LocalAPI = {
  typeName: "localschema.LocalAPI",
  methods: {
    /**
     * @generated from rpc localschema.LocalAPI.say
     */
    say: {
      name: "say",
      I: Empty,
      O: SayResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
