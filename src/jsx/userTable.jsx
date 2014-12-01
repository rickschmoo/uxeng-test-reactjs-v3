var IMAGE_URL_PREFIX = "assets/img/";
var currentUser = {
  username: "luke" 
};
var getUserImage = function(username) {
  if (userTable[username]) {
    // console.log("Returned image for " + username);
    return userTable[username].image;
  } else {
    console.log("Image for " + username + " NOT FOUND");
    return "";
  }
};

var userTable = {

  "wedge": {
        "name": "Wedge Antilles", 
        "image": "wedge.jpg"     
  },
  "luke": {
        "name": "Luke Skywalker", 
        "image": "luke.jpg"     
  },
  "leia": {
        "name": "Princess Leia", 
        "image": "leia.jpg"     
  },
  "han": {
        "name": "Han Solo", 
        "image": "han.jpg"     
  },
  "lando": {
        "name": "Lando Calrissian", 
        "image": "lando.jpg"     
  },
  "rancor": {
        "name": "Rancor Beast", 
        "image": "rancor.jpg"     
  },
  "r2d2": {
        "name": "R2D2", 
        "image": "r2d2.jpg"     
  },
  "chewie": {
        "name": "Chewbacca", 
        "image": "chewie.jpg"     
  }  
};

exports.userTable = userTable;
exports.getUserImage = getUserImage;
exports.IMAGE_URL_PREFIX = IMAGE_URL_PREFIX;
exports.currentUser = currentUser;

