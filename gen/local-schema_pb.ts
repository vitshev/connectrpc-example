// @generated by protoc-gen-es v1.6.0 with parameter "target=ts,import_extension=none"
// @generated from file local-schema.proto (package localschema, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message localschema.SayResponse
 */
export class SayResponse extends Message<SayResponse> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: int64 age = 2;
   */
  age = protoInt64.zero;

  constructor(data?: PartialMessage<SayResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "localschema.SayResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "age", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SayResponse {
    return new SayResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SayResponse {
    return new SayResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SayResponse {
    return new SayResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SayResponse | PlainMessage<SayResponse> | undefined, b: SayResponse | PlainMessage<SayResponse> | undefined): boolean {
    return proto3.util.equals(SayResponse, a, b);
  }
}
