(function(){
  var app = angular.module('store', [ ])

  app.controller('StoreController', function(){
    this.product = gems
  })

  app.controller("PanelController", function(){
    this.tab = 1

    this.selectTab = function(setTab) {
      this.tab = set tab
    }
    this.isSelected = function(checkTab) {
      return this.tab === checkTab
    }
  })

  app.controller("GalleryController", function(){
    this.current = 0
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0
    }
  })
})()

  var gems = [ {
    name: 'dodecahedron',
    price: 3.00,
    description: 'very average flowers of average height and average smell... Pretty average stuff',
    images: [
        {
          full:'dog1.jpeg',
          // thumb: 'img1-thumb.jpg'
        },
        {
          full:'dog2.jpg',
          // thumb: 'img1-thumb.jpg'
        }
    ]
    canPurchase: false,
    // soldOut: true
  },
  {
    name: "Pentagon party time",
    price: 5.95,
    description: "it's a pretty bad flower all around and makes you sad",
    canPurchase: false,

    } ]
