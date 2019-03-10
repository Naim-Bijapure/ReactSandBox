/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
<<<<<<< HEAD
=======
const axios = require('axios')
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

<<<<<<< HEAD
app.get('/data', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/data/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
=======
app.get('/items', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed yo man!', url: req.url});
});

app.get('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed cool man!', url: req.url});
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16
});

/****************************
* Example post method *
****************************/

<<<<<<< HEAD
app.post('/data', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/data/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
=======
app.post('/items', async function(req, res) {
  // Add your code here
let number = 5
  if (req.body.number) {
    number = req.body.number
  }
  
  try {
    const response = await axios.get(`http://shibe.online/api/shibes?count=${number}`)
    // const response={data:'cool man'}
    const data = response.data
    res.json({err: null, success: 'post call succeed!', data })
  } catch (err) {
    res.json({ err: err })
  }
  // res.json({success: 'post call succeed cool yo!', url: req.url, body: req.body})
});

app.post('/items/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed 2nd!', url: req.url, body: req.body})
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16
});

/****************************
* Example post method *
****************************/

<<<<<<< HEAD
app.put('/data', function(req, res) {
=======
app.put('/items', function(req, res) {
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

<<<<<<< HEAD
app.put('/data/*', function(req, res) {
=======
app.put('/items/*', function(req, res) {
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

<<<<<<< HEAD
app.delete('/data', function(req, res) {
=======
app.delete('/items', function(req, res) {
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

<<<<<<< HEAD
app.delete('/data/*', function(req, res) {
=======
app.delete('/items/*', function(req, res) {
>>>>>>> 1ec804ca1607350df5e0d61ffabfcf206ba76b16
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
