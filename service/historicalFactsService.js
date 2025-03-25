const historicalFactsData = require('../data/historicalFacts');

function validateYear(year) {
    return !isNaN(year) && year.length == 4 && (parseInt(year) >= 1920 && parseInt(year) <= 2020);
}

function getHistoricalFact(year) {
    const fact = historicalFactsData.historicalFactsData.find(fact => fact.year == year).fact;
    return fact;
}

exports.getHistoricalFact = getHistoricalFact;
exports.validateYear= validateYear;