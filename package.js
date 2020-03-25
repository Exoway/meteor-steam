Package.describe({
  name: 'exoway:steam',
  version: '1.3.0',
  summary: 'Steam OpenID integration for Meteor',
  git: 'https://github.com/Exoway/meteor-steam',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', 'server');
  api.use('random', 'client');
  api.use('service-configuration', 'client');

  api.export('Steam');

  api.addFiles('steam_server.js', 'server');
  api.addFiles('steam_client.js', 'client');
});