import {ConnectRouter, createPromiseClient, Interceptor} from '@connectrpc/connect';
import { createGrpcTransport, createNodeHttpClient } from '@connectrpc/connect-node';

import { Bookstore } from '../gen/bookstore_connect';
import { LocalAPI } from '../gen/local-schema_connect'
import { SayResponse } from '../gen/local-schema_pb'

const logger: Interceptor = (next) => async (req) => {
    console.log(`sending message to ${req.url}`);
    console.log('write some prom metrics');

    return await next(req);
};

const transport = createGrpcTransport({
    baseUrl: "https://localhost:8443",
    httpVersion: "2",
    interceptors: [
        logger
    ],
    nodeOptions: {
        rejectUnauthorized: false,
    }
});

const api = createPromiseClient(Bookstore, transport);

export const routes = (router: ConnectRouter) => {
    router.service(Bookstore, {
        async getBook(req) {
            return api.getBook(req);
        }
    });

    router.service(LocalAPI, {
        async say(req) {
            return SayResponse.fromJson({
                name: '123',
                age: 123
            });
        }
    });
}