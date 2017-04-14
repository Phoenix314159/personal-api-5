const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const mainCtrl = require('./controllers/mainCtrl');
const app = express();
const corsOptions = {
    origin: 'http://localhost:3056'
}
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

app.get('/api/user', mainCtrl.getUser);
app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/api/family', mainCtrl.getFamily);
app.get('/api/family/:gender', mainCtrl.getFamilyByGender);
app.get('/api/restaurants', mainCtrl.getRestaurants);
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);
app.put('/api/nameupdate', mainCtrl.updateName);
app.put('/api/locationupdate', mainCtrl.updateLocation);
app.post('/api/hobbies', mainCtrl.addHobbie);
app.post('/api/occupations', mainCtrl.addOccupation);
app.post('/api/family', mainCtrl.addFamilyMember);
app.post('/api/restaurants', mainCtrl.addRestaurant);
app.delete('/api/hobbies/:type', mainCtrl.deleteHobbiesByType);
app.delete('/api/family/:gender', mainCtrl.deleteFamilyMembersByGender);
app.delete('/api/restaurants/:rating', mainCtrl.deleteRestaurantsByRating);


app.listen(3056, function () {
    console.log('listening on port 3056');
})
