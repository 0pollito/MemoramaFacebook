$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1816128285098234',
      version: 'v2.12' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
          console.log('Logged in.');
        }
        else {
          FB.login();
          }
    });
  });
});
