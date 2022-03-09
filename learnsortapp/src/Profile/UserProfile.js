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

  var getLevelTimes = function(){
     return {levelOneTimeSpent, levelTwoTimeSpent, levelThreeTimeSpent, levelFourTimeSpent, levelFiveTimeSpent, customTimeSpent};
  }

  var updateRecordTime = function(level, newTimeMin, newTimeSeconds){  
   alert(newTimeMin + ":" + newTimeSeconds);
      switch(level){
         case 1:
            if(levelOneTimeSpent[0] == null){
               levelOneTimeSpent[0] = newTimeMin;
               levelOneTimeSpent[1] = newTimeSeconds;
            }else if(levelOneTimeSpent[0] >= newTimeMin){
               if(levelOneTimeSpent[1] >= newTimeSeconds){
                  levelOneTimeSpent[0] = newTimeMin;
                  levelOneTimeSpent[1] = newTimeSeconds;
               }
            }
            break;
         case 2:
            if(levelTwoTimeSpent[0] == null){
               levelTwoTimeSpent[0] = newTimeMin;
               levelTwoTimeSpent[1] = newTimeSeconds;
            }else if(levelTwoTimeSpent[0] >= newTimeMin){
               if(levelTwoTimeSpent[1] >= newTimeSeconds){
                  levelTwoTimeSpent[0] = newTimeMin;
                  levelTwoTimeSpent[1] = newTimeSeconds;
               }
            }
            break;
         case 3:
            if(levelThreeTimeSpent[0] == null){
               levelThreeTimeSpent[0] = newTimeMin;
               levelThreeTimeSpent[1] = newTimeSeconds;
            }else if(levelThreeTimeSpent[0] >= newTimeMin){
               if(levelThreeTimeSpent[1] >= newTimeSeconds){
                  levelThreeTimeSpent[0] = newTimeMin;
                  levelThreeTimeSpent[1] = newTimeSeconds;
               }
            }
            break;
         case 4:
            if(levelFourTimeSpent[0] == null){
               levelFourTimeSpent[0] = newTimeMin;
               levelFourTimeSpent[1] = newTimeSeconds;
            }else if(levelFourTimeSpent[0] >= newTimeMin){
               if(levelFourTimeSpent[1] >= newTimeSeconds){
                  levelFourTimeSpent[0] = newTimeMin;
                  levelFourTimeSpent[1] = newTimeSeconds;
               }
            }
            break;
         case 5:
            if(levelFiveTimeSpent[0] == null){
               levelFiveTimeSpent[0] = newTimeMin;
               levelFiveTimeSpent[1] = newTimeSeconds;
            }else if(levelFiveTimeSpent[0] >= newTimeMin){
               if(levelFiveTimeSpent[1] >= newTimeSeconds){
                  levelFiveTimeSpent[0] = newTimeMin;
                  levelFiveTimeSpent[1] = newTimeSeconds;
               }
            }
            break;
         case 6:
            if(customTimeSpent[0] == null){
               customTimeSpent[0] = newTimeMin;
               customTimeSpent[1] = newTimeSeconds;
            }else if(customTimeSpent[0] >= newTimeMin){
               if(customTimeSpent[1] >= newTimeSeconds){
                  customTimeSpent[0] = newTimeMin;
                  customTimeSpent[1] = newTimeSeconds;
               }
            }
            break;
      }
  }

  return {
    getEmail: getEmail,
    setEmail: setEmail,
    updateRecordTime : updateRecordTime,
    getLevelTimes : getLevelTimes
  }

})();

export default UserProfile;