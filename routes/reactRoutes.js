const express = require('express')

module.exports = (app) => {
    if (process.env.NODE_ENV === 'production') {
        // serve static assets
        app.use(express.static('client/build'));

        // serve index.html file
        const path = require('path');
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
    }
}