if (Meteor.isClient) {
 
  Template.metainfo.helpers({
    name: function() {
      return Session.get('name');
    },
    description: function() {
      return Session.get('description');
    },
    images: function() {
      return Session.get('images');
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
            Session.set({
              name: result.name,
              description: result.description,
              images: result.images              
            });
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