const { client_id, redirect_uri} = require('./settings.json');
const open = require('open')

const CLIENT_ID = client_id;
const REDIRECT_URI = redirect_uri;
const SCOPES = [
  'bits:read',
  'chat:read',
  'chat:edit',
  'channel:read:redemptions',
  'channel:read:hype_train',
  'channel:manage:redemptions',
  'channel:read:subscriptions',
  'channel:manage:predictions',
  'channel:read:predictions'
];

const baseUrl = 'https://id.twitch.tv/oauth2/authorize';
const responseType = 'token';
const clientId = encodeURIComponent(CLIENT_ID);
const redirectUri = encodeURIComponent(REDIRECT_URI);
const scope = encodeURIComponent(SCOPES.join(' '));
const url = `${baseUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;


console.log(url)
// open(url);