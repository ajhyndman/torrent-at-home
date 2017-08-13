// @flow
import WebTorrent from 'webtorrent';
import fs from 'fs';

const client = new WebTorrent({ torrentPort: 51413 });

export const addTorrent = (magnetUrl: string) =>
  new Promise(resolve => {
    client.add(magnetUrl, { path: '/mnt/f/DATA/Video/test/' }, torrent => {
      resolve(torrent);
      const { files } = torrent;
      files.forEach(file => {
        const source = file.createReadStream();
        const destination = fs.createWriteStream(file.name);
        source.on('end', () => console.log('file completed')).pipe(destination);
      });
    });
  });

export const removeTorrent = (magnetUri: string) =>
  new Promise((resolve, reject) => {
    client.remove(magnetUri, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

export const getProgress = () => client.progress;
