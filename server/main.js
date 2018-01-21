places = new Mongo.Collection('places');

import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'insertPlace':function(place, img, address, rating, site, phone){
    places.insert({
      place: place,
      img: img,
      address: address,
      rating: rating,
      site: site,
      phone: phone,
      createdAt: new Date()
    });
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
