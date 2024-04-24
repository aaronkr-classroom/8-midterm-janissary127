var subscriber = [
    {
        name: "choibho",
        email: "blizzard127@naver.com"
    }
];

exports.showSubscriber = (req, res) => {
    res.render("subscriber", {
        offeredSubscriber: subscriber
    });
};