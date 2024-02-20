import express from 'express';
import {fetch, init} from '../index.js';

express.get('/api/fetch', (req, res) => {
  init().then(() => {
    fetch().then((res1) => {
      res1.status(200).json({ success: true });
    }).catch((err) => {
      console.error(err);
      res.status(500).json({ success: false });
    });
  }).catch(() => {
    res.status(500).json({ success: false });
  });
});
