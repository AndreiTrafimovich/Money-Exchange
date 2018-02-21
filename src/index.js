// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coinsArr   = {};
    var coins      = [50, 25, 10, 5, 1];
    var coinsNames = ["H", "Q", "D", "N", "P"];

    if (currency <= 0) {
        return {};
    }

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    getCoinsCount(currency, 0);

    function getCoinsCount(amount, number) {
        var coin = parseInt(amount/coins[number]);
        var left = (amount%coins[number]);

        if (coin) {
            coinsArr[coinsNames[number]] = coin;
            amount = amount-coin*coins[number];
        }

        if (left) {
            getCoinsCount(amount, number+1)
        } else {
            return;
        }
    }

    return coinsArr;
};
