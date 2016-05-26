var accessToken = "235187851.1677ed0.d72283c5f7f24e51acc3833c7929e3b1";
var sumLikes = 0;
var numPictures = 0;
var followers = 0;

$(document).ready(function() {
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + accessToken,
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data) {
      for(i = 0; i<data.data.length; i++) {
        numPictures++;
        sumLikes+=data.data[i].likes.count;
      }
    },
    async: false,
    timeout: 5000,
  });
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/?access_token=' + accessToken,
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data) {
      followers = parseInt(data.counts.followed_by);
    },
    async: false,
    timeout: 5000,
  });

  $('#metric').append(((sumLikes/numPictures)/followers)*100);
});

function update(username) {

}
