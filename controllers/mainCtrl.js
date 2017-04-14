let user = require('../user');

module.exports = {
    getUser: function (req, res) {
        res.status(200).json(user);
    },
    getName : function (req, res) {
        res.status(200).json(user.name);
    },
    getLocation: function (req, res) {
        res.status(200).json(user.location);
    },
    getOccupations: function (req, res) {
        if(req.query.order){
            let x = req.query.order;
            if(x === 'asc'){
                let arr = user.occupations.sort();
                return res.status(200).json(arr);
            }else if(x === 'desc'){
                let arr = user.occupations.sort().reverse();
                return res.status(200).json(arr);
            }
        }else {
            res.status(200).json(user.occupations);
        }
    },
    getOccupationsLatest: function (req, res) {
        res.status(200).json(user.occupations[user.occupations.length -1]);
    },
    getHobbies : function (req, res) {
        res.status(200).json(user.hobbies);
    },
    getHobbiesByType: function (req, res) {
        if(req.params.type){
            let arr = [];
            for(let i=0; i<user.hobbies.length; i++){
                if(req.params.type === user.hobbies[i].type){
                    arr.push(user.hobbies[i]);
                }

            }
            res.status(200).json(arr);
        }
    },
    getFamily : function (req, res) {
        res.status(200).json(user.family);
    },
    getFamilyByGender : function (req, res) {
        let x = req.params.gender;
        if(x){
            let arr =[], arr2 =[];
            for(let i=0; i<user.family.length; i++){
                if(x === user.family[i].gender){
                    if(x === 'male'){
                        arr.push(user.family[i]);
                    }else{
                        arr2.push(user.family[i]);
                    }
                }

            }if(x === 'male'){
                res.status(200).json({male: arr});
            }else{
                res.status(200).json({females: arr2});
            }

        }
    },
    getRestaurants : function (req, res) {
        if(req.query.rating){
            let arr =[];
            for(let i=0; i<user.restaurants.length; i++){
                if(user.restaurants[i].rating >= 2){
                    arr.push(user.restaurants[i])
                }
            }
            return res.status(200).json(arr);

        }else {
            res.status(200).json(user.restaurants);
        }
    },
    getRestaurantsByName: function (req, res) {
        let arr = [];
        if(req.params.name){

            for(let i=0; i<user.restaurants.length; i++){
                if(req.params.name === user.restaurants[i].name){
                    arr.push(user.restaurants[i]);
                }
            }
            res.status(200).json({restaurants : arr})
        }
    },
    updateName: function (req, res) {
        user.name = req.body.name;
        res.status(200).json(user.name);
    },
    updateLocation: function (req, res) {
        user.location = req.body.location;
        res.status(200).json(user.location);
    },
    addHobbie : function (req, res) {
        user.hobbies.push(req.body);
        res.status(200).json(user.hobbies);
    },
    addOccupation: function (req, res) {
        user.occupations.push(req.body);
        res.status(200).json(user.occupations);
    },
    addFamilyMember: function (req, res) {
        user.family.push(req.body);
        res.status(200).json(user.family);
    },
    addRestaurant: function (req, res) {
        user.restaurants.push(req.body);
        res.status(200).json(user.restaurants);
    },
    deleteHobbiesByType: function (req, res) {
        if(req.params.type){
            let x = req.params.type;
            for(let i=0; i<user.hobbies.length; i++){
                if(x === user.hobbies[i].type){
                    delete user.hobbies[i];
                }
            }
            user.hobbies = user.hobbies.filter(Boolean);
            res.status(200).json(user.hobbies);
        }
    },
    deleteFamilyMembersByGender: function (req, res) {
        if(req.params.gender){
            let x = req.params.gender;
            for(let i=0; i<user.family.length; i++){
                if(x === user.family[i].gender){
                    delete user.family[i];
                }
            }
            user.family = user.family.filter(Boolean);
            res.status(200).json(user.family);
        }
    },
    deleteRestaurantsByRating : function (req, res) {
        if(req.params.rating){
            let x = req.params.rating;
            for(let i=0; i<user.restaurants.length; i++){
                if(x == user.restaurants[i].rating){
                    delete user.restaurants[i]
                }
            }
            user.restaurants = user.restaurants.filter(Boolean);
            res.status(200).json(user.restaurants);
        }
    }
}
