const express = require('express');
const fs = require('fs');
const path = require('path');

// add after other require() statements

const cors = require('cors');

// add after require() statements

const videos = [
    {
        id: 0,
        poster: '/video/0/poster',
        duration: '3 mins',
        name: 'Sample 1'
    },
    {
        id: 1,
        poster: '/video/1/poster',
        duration: '4 mins',
        name: 'Sample 2'
    },
    {
        id: 2,
        poster: '/video/2/poster',
        duration: '2 mins',
        name: 'Sample 3'
    },
];

const app = express();

// add after 'const app = express();'

app.get('/video', (req, res) => {
    res.sendFile('assets/sample.mp4', { root: __dirname });
});

// add after existing app.get('/video', ...) route

app.use(cors());
app.get('/videos', (req, res) => res.json(videos));

// add to end of file

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});
