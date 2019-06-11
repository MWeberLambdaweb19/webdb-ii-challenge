const express = require('express');


const zooRouter = require('../items/zoo/zoo-router.js');
const bearRouter = require('../items/bears/bears-router.js')

const server = express();

server.use(express.json());

server.use('/api/zoo', zooRouter);
server.use('/api/bears', bearRouter)

module.exports = server;
