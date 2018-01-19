// Dependencies
var express = require('express');
var path = require("path");

// Makes paths to the html pages for home and survey - gets them
module.exports = function(app) {
    // Route for home
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Route for survey
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}