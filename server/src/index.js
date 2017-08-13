// @flow
// import express from 'express';
// import graphqlHttp from 'express-graphql';
// import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

// import resolvers from './resolvers';
import { addTorrent } from './torrentService';
// import types from './schema.gql';

const POLL_INTERVAL = 500;

// const schema = makeExecutableSchema({
//   typeDefs: [types],
//   resolvers,
// });

// // TODO: Remove this
// addMockFunctionsToSchema({ schema });

// const app = express();

// app.use(
//   '/',
//   graphqlHttp({
//     schema,
//     graphiql: true,
//   }),
// );

// app.listen(3000);

addTorrent(
  'magnet:?xt=urn:btih:ff5e96ab82b342556b808d0237d81b133aa54899&dn=Test+torrent&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
).then(torrent => {
  console.log(torrent);
  torrent.on('download', () => {
    console.log('progress', torrent.progress);
    console.log('downloaded', torrent.downloaded);
  });

  setInterval(() => {
    console.log('ready', torrent.ready);
    console.log('numPeers', torrent.numPeers);
    console.log('progress', torrent.progress);
    console.log('path', torrent.path);
    console.log('downloadSpeed', torrent.downloadSpeed);
  }, POLL_INTERVAL);
});
