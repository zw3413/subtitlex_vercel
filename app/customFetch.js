import nodeFetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';


const proxyUrl = process.env.HTTP_PROXY;
let proxyAgent;
if(proxyUrl){
    proxyAgent = new HttpsProxyAgent(proxyUrl);
}


function customFetch(url, options = {}) {
  if (proxyUrl) {
    // Use proxy in development
    return nodeFetch(url, { ...options, agent: proxyAgent });
  } else {
    // Don't use proxy in production
    return nodeFetch(url, options);
  }
}

export default customFetch;