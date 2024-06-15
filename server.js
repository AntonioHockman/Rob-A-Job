const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;
// ABove is a instance of our server and the recognized port.

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Above is middle ware we use for handle bars.





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Above, are the type of responses our server provides.


app.use(routes);
// Above, we instruct our server to use the provided routes.


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>  console.log(`Example app listening at http://localhost:${PORT}`));
});

// Above we cal sequlaize.sync and assign force to false here so we do not trigger a db restart everytime our server starts.
// Also we call listen on our server and console log the url.
