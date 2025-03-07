const backendurl = "";
export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  patch: request("PATCH"),
  delete: request("DELETE"),
};

function request(method) {
  return (url, token, body) => {
    let requestOptions = {};
    if (url?.includes("/saveUserInfo")) {
      requestOptions = {
        method,
        mode: "no-cors",
        headers: authHeader(url, token),
      };
    } else {
      requestOptions = {
        method,
        headers: authHeader(url, token),
      };
    }
    // QA
    // requestOptions.headers["x-api-key"] =
    //   "43KXt44PjCa7axCTLVLZb60FLrIAyA5l4YBhugmd";
    // Prod
    requestOptions.headers['x-api-key'] = 'HoWDoSfC7y1rxywh98h1J94A9k9INlRi9L8qsZ91'

    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions)
      .then(handleResponse)
      .catch((err) => [console.log(err)]);
  };
}

// helper functions

function authHeader(url, token) {
  // return auth header with jwt if user is logged in and request is to the api url

  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(backendurl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

function authToken() {
  return 1;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    return data;
  });
}
