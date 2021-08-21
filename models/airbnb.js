const mongoose = require('mongoose');

const ListingsAndReviews = new mongoose.Schema(
	{
        "_id": {type: String},
        "listing_url": {type: String},
        "name": {type: String},
        "summary": {type: String},
        "space": {type: String},
        "description": {type: String},
        "neighborhood_overview": {type: String},
        "notes": {type: String},
        "transit": {type: String},
        "access": {type: String},
        "interaction": {type: String},
        "house_rules": {type: String},
        "property_type": {type: String},
        "room_type": {type: String},
        "bed_type": {type: String},
        "minimum_nights": {type: String},
        "maximum_nights": {type: String},
        "cancellation_policy": {type: String},
        "last_scraped": {type: Date},
        "calendar_last_scraped": {type: Date},
        "first_review": {type: Date},
        "last_review": {type: Date},
        "accommodates":{type: Number},
        "bedrooms":{type: Number},
        "beds":{type: Number},
        "number_of_reviews":{type: Number},
        "bathrooms":{type: Number},
        "amenities": {type: Array},
        "price": {type: Number},
        "security_deposit": {type: Number},
        "cleaning_fee": {type: Number},
        "extra_people": {type: Number},
        "guests_included": {type: Number},
        "images": {type: Object},
        "host": {type: Object},
        "address": {type: Object},
        "availability": {type: Object},
        "review_scores": {type: Object},
        "reviews": {type: Array},
	},
    {
        collection: "listingsAndReviews"
    }
)

module.exports = mongoose.model('listingsAndReviews', ListingsAndReviews)
