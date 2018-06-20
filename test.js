var bids = [
    {
        id: 1,
        amount: 25
    },
    {
        id: 1,
        amount: 20
    },
    {
        id: 1,
        amount: 20
    },
    {
        id: 1,
        amount: 20
    },
    {
        id: 1,
        amount: 20
    },
    {
        id: 1,
        amount: 20
    },
    {
        id: 1,
        amount: 15
    },
    {
        id: 1,
        amount: 15
    },
    {
        id: 1,
        amount: 3
    }
];

var packs = [{amount: 0, bids: []}];

bids.forEach(bid => {
    for (let i = 0; i < packs.length; i++) {
        let pack = packs[i];

        if (pack.amount + bid.amount > 32) continue;

        pack.bids.push(bid);
        pack.amount += bid.amount;
        return;
    }

    packs.push({
        amount: bid.amount,
        bids: [bid]
    });
});

console.log(packs);