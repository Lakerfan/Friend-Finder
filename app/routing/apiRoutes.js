module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(people[1]);
    });
    app.post("/api/friends", function(req, res) {
        res.json(people[0]);
    });
};