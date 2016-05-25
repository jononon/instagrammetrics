var accessToken = "235187851.1677ed0.d72283c5f7f24e51acc3833c7929e3b1";

$(document).ready(function() {
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + accessToken,
    dataType: 'jsonp',
    crossDomain: true,
    success: function(data) {
      var sumLikes, numPictures;
      for(i = 0; i<data.data.length; i++) {
        numPictures++;
        sumLikes+=data.data[i].likes.count;
      }
      $('#metric').append(sumLikes/numPictures);
    },
    async: false,
    timeout: 5000,
  });
});
