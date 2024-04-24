const express = require("express"),
    layouts = require('express-ejs-layouts'), // express-ejs-layout의 요청
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', homeController.showHome);
app.get('/transportation.html', homeController.showTransportation);
app.get('/contact.html', homeController.showContact);
app.post('/contact', homeController.postContact);


app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});

app.use(errorController.pageNotFound);
app.use(errorController.internalServerError);