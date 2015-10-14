(function(){
  var app = angular.module('government',[]);

  app.controller('GovernmentController', function(){
    this.campaigns = candidates;
  });
  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(campaign) {
      this.review.createdOn = Date.now();
      campaign.reviews.push(this.review);
      this.review = {};
    };
  });

  var candidates = [
      {
      name: 'Jeb Bush',
      funds: 11.4,
      description: 'republican moderate',
      canPurchase: true,
      droppedOut: false,
      images: [
        'images/bushJeb.jpg'
      ],
      reviews: [
        {
          stars: 5,
          body: "As a Floridian, I think Jeb did an excellent job",
          author: "spam@spam.com"
        },
        {
          stars: 2,
          body: "Please, not another Bush!",
          author: "jimbo@jimbo.com"
        }

      ]
    },
    {
      name: 'Bernie Sanders',
      funds: 15.2,
      description: 'democratic socialist',
      canPurchase: false,
      droppedOut: false,
      images: [
        'images/sandersBernie.jpg',
        'images/sandersBernie2.jpg'
      ],
      reviews: []
    },
    {
      name: 'Ted Cruz',
      funds: 14.3,
      description: 'republican teaparty',
      canPurchase: true,
      droppedOut: false,
      images: [
        'images/cruzTed.jpg'
      ],
      reviews: []
    }
  ];

})();
