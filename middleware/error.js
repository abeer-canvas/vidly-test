module.exports = function(err, req, res, next){
    // 500 = something failed on the server we don't know what.
    res.status(500).send('Something failed.');
}