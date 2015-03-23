if (Meteor.isClient) {
 
  Template.metascrape.helpers({
    getMeta: function() {
      //do something
    }
  });
 
   Template.metascrape.events({
    'click #submit': function (evt) {
      var url = $('#url').val();
      console.log(url);
      Meteor.call('simplecrawler_findMetadata', url, function (error, result) {
          if (error) {
            console.log(error);
          }else{         
            console.log(result);
          }
          //Error is empty if all goes well
          //Result will containt and object like:
          //{name:'Page name',description:'Here's the metadata description',images:['img url 1','img url 2']}
      });
      evt.preventDefault();
    }
  });
 
}
 
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}