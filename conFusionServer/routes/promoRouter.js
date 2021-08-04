const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next()
}).get((req, res, next)=>{
    res.end('Will send all the promotions to you');
}).post((req, res, next)=>{
    res.end('Will add the promo: '+ req.body.name + ' With details: '+req.body.description)
}).put((req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported on /promotions')
}).delete((req, res, next)=>{
    res.end('Deleting all the promotions');
});

promoRouter.route('/:promoId').all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
}).get((req, res, next)=>{
    res.end('Will send details of the promo to you: '+req.params.promoId);
}).post( (req, res, next)=>{
    res.end('Will add the promo: '+ req.body.name + ' With details: '+req.body.description)
}).put( (req, res, next)=>{
    res.statusCode = 403;
    res.end('Put operation not supported on /promotions:promoId')
}).delete( (req, res, next)=>{
    res.end('Deleting all the promo');
})


module.exports = promoRouter;