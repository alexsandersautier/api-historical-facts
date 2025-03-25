const express = require('express');
const app = express();
const historicalFactsService = require('./service/historicalFactsService');
const { error } = require('./utils/constants');

app.get('/', (req, res) => {
    const yearFact = req.query.year;
    if (historicalFactsService.validateYear(yearFact)) {
        const fact = historicalFactsService.getHistoricalFact(yearFact);
        res.json({fact: fact});
    } else {
        res.status(400).json({message: error});
    }
});

app.listen(8080, () => {
    const data = new Date();
    console.log("Server started at " + data);
});