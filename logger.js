'use strict';

const QClient = require('@nmq/q/client');

const files = new QClient('files');
const database = new QClient('database');

files.subscribe('file-save', payload => {
  console.log(`File Save: ${payload}`);
});

files.subscribe('file-error', payload => {
  console.log(`File Error: ${payload}`);
});

database.subscribe('create', payload => {
  console.log(`Create event: ${payload}`);
});

database.subscribe('read', payload => {
  console.log(`Read event: ${payload}`);
});

database.subscribe('update', payload => {
  console.log(`Update event: ${payload}`);
});

database.subscribe('delete', payload => {
  console.log(`Delete event: ${payload}`);
});

database.subscribe('error', payload => {
  console.log(`Error event: ${payload}`);
});

console.log(files.subscriptions());
console.log(database.subscriptions());

require('./app/app.js');