export const request = async (input: RequestInfo | URL) => {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('GET', 'POST');
  headers.append('content-type', 'application/json');

  // try {
  //   const req = await fetch(input, { headers });
  //   const response = await req.json();
  //   // if (!req.ok) {
  //   //   throw response;
  //   // }
  //   return response;
  // } catch (err) {
  //   console.log('here is an error');
  //   throw err;
  // }

  await fetch(input, { headers })
    .then(async (data) => {
      if (!data.ok) {
        throw Error('No mics found');
      }
      const req = await data.json();
      //Here you have your data...
      return req;
    })
    .catch((e) => console.log('Connection error', e));
};
