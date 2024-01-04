import { createPromiseClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';

import { Bookstore } from '../gen/bookstore_connect';

const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
});

const client = createPromiseClient(Bookstore, transport);

client.getBook({ shelf: BigInt(1)}).then(res => {
    document.querySelector('.response').textContent = JSON.stringify(res);
});
