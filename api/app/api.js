// ExpressJS initialization required to bring up web server
var express = require('express')
var api = express();

// Cassandra driver initialization to connect to cassandra cluster
const cassandra = require('cassandra-driver')

// Defined contact point (which in this case will be resolved by /etc/hosts entry) and keyspace
const client = new cassandra.Client({ contactPoints: ['192.168.33.3'], keyspace: 'ks1' });

// Query placeholder that will insert the timestamp 
const query = 'INSERT INTO event (time) VALUES(?)'

// Function that will handle POST request on /app
api.post('/app', function(req,res) {
  d = new Date().toISOString();
  const params = [d]
  client.execute(query, params, { prepare: true })
    .then(result => console.log('Timestamp inserted'));
  res.send('Event inserted into DB');
});

// NodeJS Listening on port 3000
api.listen(3000, function(){
  console.log('Api listening on port 3000');
});
