var UserProfile = (function() {
  var email = "";

  var getEmail = function() {
    return email;
  };

  var setEmail = function(value) {
    email = value;
  };

  return {
    getEmail: getEmail,
    setEmail: setEmail
  }

})();

export default UserProfile;