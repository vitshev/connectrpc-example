import * as http from 'http';
import {readFileSync} from 'fs';
import * as esbuild from 'esbuild';
import { connectNodeAdapter } from '@connectrpc/connect-node';

import {routes} from './routes';

http.createServer(
    connectNodeAdapter({
        routes,
        fallback(req, res) {
            switch (req.url) {
                case "/":
                    res.writeHead(200, {"content-type": "text/html"});
                    res.write(readFileSync("client/index.html", "utf8"), "utf8");
                    res.end();
                    break;
                case "/index.js":
                    void esbuild
                        .build({
                            entryPoints: ["client/index.ts"],
                            bundle: true,
                            write: false,
                        })
                        .then((result) => {
                            res.writeHead(200, { "content-type": "application/javascript" });
                            res.write(result.outputFiles[0].text, "utf8");
                            res.end();
                        });
                    break;
                default:
                    res.writeHead(404);
                    res.end();
            }
        }
    })
).listen(8080);