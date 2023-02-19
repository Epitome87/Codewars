/*
You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to

add a parameter to an existing URL,
but also to

change a parameter if it already exists.
Example:

addOrChangeUrlParameter("www.example.com", "key=value") 
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" ) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" ) 
// ->'www.example.com?key=newValue' (changes the parameter).
*/

// My solution:
const addOrChangeUrlParameter = (url, param) => {
  url = url.replace(new RegExp(param.split('=')[0] + '=[^&]*'), param);
  return url + (url.includes(param) ? '' : (url.includes('?') ? '&' : '?') + param);
};

// My favorite 'readable' user solution:
function addOrChangeUrlParameter(url, param) {
  if (!param) return url;

  const parts = url.split('?');

  if (parts.length < 2) return url + '?' + param;

  const params = parts[1].split('&');
  const paramsMap = {};

  params.forEach((param) => {
    const splited = param.split('=');
    paramsMap[splited[0]] = splited[1];
  });

  paramsMap[param.split('=')[0]] = param.split('=')[1];

  return parts[0] + '?' + [...Object.entries(paramsMap)].map((param) => `${param[0]}=${param[1]}`).join('&');
}
