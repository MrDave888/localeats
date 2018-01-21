import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout.html';

Router.route('/', function (){
  this.layout('layout');
  this.render('home');
});

Router.map(function () {
  this.route('place', {
    template:'places',
    path: '/place/:_id',
    data: function () {
      return places.findOne(this.params._id);
    }
  });
});

Router.route('/upload', function(){
  this.layout('layout');
  this.render('upload');
});
