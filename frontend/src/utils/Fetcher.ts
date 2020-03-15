import fetch from 'unfetch';

const fetcher: <T extends object>(
  host: string,
  path: string,
  method?: string,
  headers?: Headers,
  body?: ReadableStream<Uint8Array>
) => Promise<T> = async (host, path, method = 'GET', headers, body) => {
  return fetch(host + path, {
    method: method,
    body: body,
    headers: headers,
  })
    .then(res => res.json())
    .catch(err => {
      //TODO: Add erronr handling
      console.error(err);
    });
};

export { fetcher };
