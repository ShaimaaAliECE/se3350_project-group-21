var UserProfile = (function() {
  var email = "jon.richards@rogers.com";
  let levelOneTimeSpent = [];
  var levelTwoTimeSpent = [];
  var levelThreeTimeSpent = [];
  var levelFourTimeSpent = [];
  var levelFiveTimeSpent = [];
  var customTimeSpent = [];

  var getEmail = function() {
    return email;
  };

  var setEmail = function(value) {
    email = value;
  };

  var updateRecordTime = function(level, newTime){
     //alert(newTime);
      switch(level){
         case 1:
            if(levelOneTimeSpent > newTime){
               levelOneTimeSpent = newTime;
            }
            break;
         case 2:
            if(levelTwoTimeSpent > newTime){
               levelTwoTimeSpent = newTime;
            }
            break;
         case 3:
            if(levelThreeTimeSpent > newTime){
               levelThreeTimeSpent = newTime;
            }
            break;
         case 4:
            if(levelFourTimeSpent > newTime){
               levelFourTimeSpent = newTime;
            }
            break;
         case 5:
            if(levelFiveTimeSpent > newTime){
               levelFiveTimeSpent = newTime;
            }
            break;
         case 6:
            if(customTimeSpent > newTime){
               customTimeSpent = newTime;
            }
            break;
      }
  }

  return {
    getEmail: getEmail,
    setEmail: setEmail,
    updateRecordTime : updateRecordTime
  }

})();

export default UserProfile;