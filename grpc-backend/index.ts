import * as http2 from "http2";
import { readFileSync } from 'fs';
import { stdout } from 'process';
import { connectNodeAdapter } from '@connectrpc/connect-node';
import {ConnectRouter} from '@connectrpc/connect';
import {Bookstore} from '../gen/bookstore_connect';

// const registry = createRegistryFromDescriptors(
//     readFileSync("./image.bin")
// );

export const serverRoutes = (router: ConnectRouter) =>
    router.service(Bookstore, {
        async getBook(req) {
            return {
                author: "Lev",
                title: "Test"
            }
        }
    });

const handler = connectNodeAdapter({
    routes: serverRoutes,
    // If none of the RPC routes match, this handler is called.
    // We serve our web interface here:
    fallback(req, res) {
        switch (req.url) {
            case "/":
                res.writeHead(200, { "content-type": "text/html" });
                res.write(readFileSync("public/index.html", "utf8"), "utf8");
                res.end();
                break;
            default:
                res.writeHead(404);
                res.end();
        }
    },
});

http2
    .createSecureServer(
        {
            key: readFileSync("certs/localhost-key.pem", "utf8"),
            cert: readFileSync("certs/localhost-cert.pem", "utf8"),
            allowHTTP1: true,
        },
        handler,
    )
    .listen(8443, () => {
        stdout.write("The server is listening on https://localhost:8443\n");
        stdout.write("Run `npm run client` for a terminal client.\n");
    });