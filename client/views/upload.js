places = new Mongo.Collection('places');

Template.registerHelper("imageData", new ReactiveVar());

Template.uploadform.events({
  'change .file': (e) => {
    //console.log(e);
    let reader = new FileReader();
    reader.onload = (e) => {
      //console.log(e);
      //console.log(e.target.result);
      let result = e.target.result;
      Blaze._globalHelpers.imageData.set(result);
      //console.log(Blaze._globalHelpers.imageData.get());
    };
    //console.log(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  },
  'click .submit': (event) => {
    let place = document.getElementById('place').value;
    let img = Blaze._globalHelpers.imageData.get();
    let address = document.getElementById('address').value;
    let rating = document.getElementById('rating').value;
    let site = document.getElementById('site').value;
    let phone = document.getElementById('phone').value;

    Meteor.call('insertPlace', place, img, address, rating, site, phone);
    place = "";
    img = "";
    address = "";
    rating = "";
    site = "";
    phone = "";

    return false;
  }
});
