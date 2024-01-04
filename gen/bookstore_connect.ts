// @generated by protoc-gen-connect-es v1.2.1 with parameter "target=ts,import_extension=none"
// @generated from file bookstore.proto (package bookstore, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Author, Book, CreateBookRequest, CreateShelfRequest, DeleteBookRequest, DeleteShelfRequest, EchoBodyRequest, EchoNestedRequest, EchoStructReqResp, GetAuthorRequest, GetBookRequest, GetShelfRequest, ListBooksRequest, ListShelvesResponse, OldBigBook, Shelf, UpdateBookRequest } from "./bookstore_pb";
import { HttpBody } from "./google/api/httpbody_pb";

/**
 * A simple Bookstore API.
 *
 * The API manages shelves and books resources. Shelves contain books.
 *
 * @generated from service bookstore.Bookstore
 */
export const Bookstore = {
  typeName: "bookstore.Bookstore",
  methods: {
    /**
     * Returns a list of all shelves in the bookstore.
     *
     * @generated from rpc bookstore.Bookstore.ListShelves
     */
    listShelves: {
      name: "ListShelves",
      I: Empty,
      O: ListShelvesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a new shelf in the bookstore.
     *
     * @generated from rpc bookstore.Bookstore.CreateShelf
     */
    createShelf: {
      name: "CreateShelf",
      I: CreateShelfRequest,
      O: Shelf,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a new shelf in the bookstore via a mapped package.service.method as its HTTP path.
     *
     * @generated from rpc bookstore.Bookstore.CreateShelfWithPackageServiceAndMethod
     */
    createShelfWithPackageServiceAndMethod: {
      name: "CreateShelfWithPackageServiceAndMethod",
      I: CreateShelfRequest,
      O: Shelf,
      kind: MethodKind.Unary,
    },
    /**
     * Creates multiple shelves with one streaming call
     *
     * @generated from rpc bookstore.Bookstore.BulkCreateShelf
     */
    bulkCreateShelf: {
      name: "BulkCreateShelf",
      I: CreateShelfRequest,
      O: Shelf,
      kind: MethodKind.BiDiStreaming,
    },
    /**
     * Returns a specific bookstore shelf.
     *
     * @generated from rpc bookstore.Bookstore.GetShelf
     */
    getShelf: {
      name: "GetShelf",
      I: GetShelfRequest,
      O: Shelf,
      kind: MethodKind.Unary,
    },
    /**
     * Deletes a shelf, including all books that are stored on the shelf.
     *
     * @generated from rpc bookstore.Bookstore.DeleteShelf
     */
    deleteShelf: {
      name: "DeleteShelf",
      I: DeleteShelfRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a list of books on a shelf.
     *
     * @generated from rpc bookstore.Bookstore.ListBooks
     */
    listBooks: {
      name: "ListBooks",
      I: ListBooksRequest,
      O: Book,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Creates a new book.
     *
     * @generated from rpc bookstore.Bookstore.CreateBook
     */
    createBook: {
      name: "CreateBook",
      I: CreateBookRequest,
      O: Book,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a specific book.
     *
     * @generated from rpc bookstore.Bookstore.GetBook
     */
    getBook: {
      name: "GetBook",
      I: GetBookRequest,
      O: Book,
      kind: MethodKind.Unary,
    },
    /**
     * Deletes a book from a shelf.
     *
     * @generated from rpc bookstore.Bookstore.DeleteBook
     */
    deleteBook: {
      name: "DeleteBook",
      I: DeleteBookRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.UpdateBook
     */
    updateBook: {
      name: "UpdateBook",
      I: UpdateBookRequest,
      O: Book,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.BookstoreOptions
     */
    bookstoreOptions: {
      name: "BookstoreOptions",
      I: GetShelfRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a specific author.
     *
     * @generated from rpc bookstore.Bookstore.GetAuthor
     */
    getAuthor: {
      name: "GetAuthor",
      I: GetAuthorRequest,
      O: Author,
      kind: MethodKind.Unary,
    },
    /**
     * Echo an Author to test enum encode/decode.
     *
     * @generated from rpc bookstore.Bookstore.EchoAuthor
     */
    echoAuthor: {
      name: "EchoAuthor",
      I: Author,
      O: Author,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.GetIndex
     */
    getIndex: {
      name: "GetIndex",
      I: Empty,
      O: HttpBody,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.GetIndexStream
     */
    getIndexStream: {
      name: "GetIndexStream",
      I: Empty,
      O: HttpBody,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc bookstore.Bookstore.GetRoot
     */
    getRoot: {
      name: "GetRoot",
      I: Empty,
      O: HttpBody,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.PostBody
     */
    postBody: {
      name: "PostBody",
      I: EchoBodyRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.StreamBody
     */
    streamBody: {
      name: "StreamBody",
      I: EchoBodyRequest,
      O: Empty,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc bookstore.Bookstore.EchoBody
     */
    echoBody: {
      name: "EchoBody",
      I: EchoBodyRequest,
      O: HttpBody,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.EchoRawBody
     */
    echoRawBody: {
      name: "EchoRawBody",
      I: HttpBody,
      O: HttpBody,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.EchoNestedBody
     */
    echoNestedBody: {
      name: "EchoNestedBody",
      I: EchoNestedRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.EchoResponseBodyPath
     */
    echoResponseBodyPath: {
      name: "EchoResponseBodyPath",
      I: Empty,
      O: EchoBodyRequest,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.EchoStruct
     */
    echoStruct: {
      name: "EchoStruct",
      I: EchoStructReqResp,
      O: EchoStructReqResp,
      kind: MethodKind.Unary,
    },
    /**
     * To test grpc transcoding with an unknown field.
     * This could happen when the grpc server is using a updated proto with a new field,
     * but Envoy transcoding config is still using the old version.
     *
     * @generated from rpc bookstore.Bookstore.GetBigBook
     */
    getBigBook: {
      name: "GetBigBook",
      I: Empty,
      O: OldBigBook,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.PostWildcard
     */
    postWildcard: {
      name: "PostWildcard",
      I: EchoBodyRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.PostCustomVerb
     */
    postCustomVerb: {
      name: "PostCustomVerb",
      I: EchoBodyRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc bookstore.Bookstore.CreateShelfBodyWildcard
     */
    createShelfBodyWildcard: {
      name: "CreateShelfBodyWildcard",
      I: CreateShelfRequest,
      O: Shelf,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service bookstore.ServiceWithResponseBody
 */
export const ServiceWithResponseBody = {
  typeName: "bookstore.ServiceWithResponseBody",
  methods: {
    /**
     * @generated from rpc bookstore.ServiceWithResponseBody.EchoStruct
     */
    echoStruct: {
      name: "EchoStruct",
      I: EchoStructReqResp,
      O: EchoStructReqResp,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service bookstore.ServiceWithInvalidRequestBodyPath
 */
export const ServiceWithInvalidRequestBodyPath = {
  typeName: "bookstore.ServiceWithInvalidRequestBodyPath",
  methods: {
    /**
     * @generated from rpc bookstore.ServiceWithInvalidRequestBodyPath.EchoStruct
     */
    echoStruct: {
      name: "EchoStruct",
      I: EchoStructReqResp,
      O: EchoStructReqResp,
      kind: MethodKind.Unary,
    },
  }
} as const;

/**
 * @generated from service bookstore.ServiceWithInvalidResponseBodyPath
 */
export const ServiceWithInvalidResponseBodyPath = {
  typeName: "bookstore.ServiceWithInvalidResponseBodyPath",
  methods: {
    /**
     * @generated from rpc bookstore.ServiceWithInvalidResponseBodyPath.EchoStruct
     */
    echoStruct: {
      name: "EchoStruct",
      I: EchoStructReqResp,
      O: EchoStructReqResp,
      kind: MethodKind.Unary,
    },
  }
} as const;

