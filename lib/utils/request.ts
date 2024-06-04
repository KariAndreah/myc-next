export const request = async <T>(input: RequestInfo | URL): Promise<T> => {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('GET', 'POST');
  headers.append('content-type', 'application/json');

  try {
    const req = await fetch(input, { headers });
    const response = await req.json();
    if (!req.ok) {
      throw Error('Request.ts Req is not OK');
    }
    // console.log('Request.ts is working', response);
    return response;
  } catch (err) {
    console.log('Request.ts Failed');
    throw err;
  }

  // await fetch(input, { headers })
  //   .then(async (data) => {
  //     if (!data.ok) {
  //       throw Error('No mics found');
  //     }
  //     const req = await data.json();
  //     console.log('data here', req);
  //     //Here you have your data...

  //     return req;
  //     // return micsResults;
  //   })
  //   .catch((e) => console.log('Connection error', e));
};
