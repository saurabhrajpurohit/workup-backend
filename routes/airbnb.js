const AirBnb = require("../models/airbnb.js");
const express = require("express");
const router = express.Router();

const categories = ["House","Apartment","Condominium","Loft","Guesthouse","Hostel","Serviced apartment","Bed and breakfast","Treehouse","Bungalow","Guest suite","Townhouse","Villa","Cabin","Other","Chalet","Farm stay","Boutique hotel","Boat","Cottage","Earth house","Aparthotel","Resort","Tiny house","Nature lodge","Hotel","Casa particular (Cuba)","Barn","Hut","Camper/RV","Heritage hotel (India)","Pension (South Korea)","Campsite","Houseboat","Castle","Train"];

router.get("/categories", (req, res) => {
    res.send(categories);
})
// Get route.
router.get("/", (req, res) => {
    const {query} = req;
    const {
        category = "",
        page = 1,
        limit = 10
    } = query;
    const skip = (page - 1) * limit;
    let search = {};
    if(category) {
        search["property_type"] = category;
    } 
    
    AirBnb.find(search).skip(Number(skip)).limit(Number(limit)).select({
        "_id": 1,
        "images.picture_url": 1,
        "price": 1,
        "name": 1,
        "address.country": 1,
        "address.location": 1
    }).exec((err,collection) => {
        if(err) {
            res.status(400);
            res.send(err);
        }
        res.send(collection);
    });
});

router.get("/:id", (req, res) => {
    var object_id = req.params['id'];
    AirBnb.findOne({ "_id": object_id }).exec((err,collection) => {
        res.send(collection);
    });
});

module.exports = router;