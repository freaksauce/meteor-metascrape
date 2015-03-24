if (Meteor.isClient) {
  
  Template.metainfo.helpers({
    title: function() {
      return Session.get('title');
    },
    description: function() {
      return Session.get('description');
    },
    image: function() {
      return Session.get('image');
    }
  });
 
   Template.metascrape.events({
    'click #submit': function (evt) {
      var url = $('#url').val();
//       console.log(url);
      Meteor.call('scrapepage', url, function(error, result) {
        if (error) {
          console.log(error);
        }else{
          console.log(result);
          Session.set({
            title: result.title,
            description: result.description,
            image: result.image              
          });
          
          console.log(gm.isAvailable);
          
        }
      });

      evt.preventDefault();
    }
  });
 
}
 
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  
  Meteor.methods({
    'scrapepage': function(pageUrl) {
      console.log('scraping');
      data = Scrape.website(pageUrl);
      return data;
    }
  });
}