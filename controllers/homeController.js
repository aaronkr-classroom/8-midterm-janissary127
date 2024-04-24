exports.showHome = (req, res) => {
    res.render("index");
}
exports.showContact = (req, res) => {
    res.render("contact");
}
exports.showTransportation = (req, res) => {
    res.render("transportation");
}
exports.postContact = (req, res) => {
    res.render("thanks");
}
