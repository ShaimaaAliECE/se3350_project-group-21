var UserProfile = (function() {
  var email = "";
  var levelOneTimeSpent = [];
  var levelTwoTimeSpent = [];
  var levelThreeTimeSpent = [];
  var levelFourTimeSpent = [];
  var levelFiveTimeSpent = [];
  var customTimeSpent = [];
  var loggedIn = false;

  var getEmail = function() {
    return email;
  };

  var setEmail = function(value) {
    email = value;
  };

  var setLevelTimes = function(dbLevelOneTimeSpent, dbLevelTwoTimeSpent, dbLevelThreeTimeSpent, dbLevelFourTimeSpent, dbLevelFiveTimeSpent, dbCustomTimeSpent){
      levelOneTimeSpent = dbLevelOneTimeSpent;
      levelTwoTimeSpent = dbLevelTwoTimeSpent;
      levelThreeTimeSpent = dbLevelThreeTimeSpent;
      levelFourTimeSpent = dbLevelFourTimeSpent;
      levelFiveTimeSpent = dbLevelFiveTimeSpent;
      customTimeSpent = dbCustomTimeSpent;
   };

  var getLevelTimes = function(){
     return {levelOneTimeSpent, levelTwoTimeSpent, levelThreeTimeSpent, levelFourTimeSpent, levelFiveTimeSpent, customTimeSpent};
  };

  var updateRecordTime = function(level, newTimeMin, newTimeSeconds){  
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
  };

   var userLoggedIn = function(user) {
      this.setEmail(user);
      loggedIn = true;
   }

   var userLoggedOut = function() {
      this.setEmail("");
      this.setLevelTimes(0, 0, 0, 0, 0, 0);
      loggedIn = false;
   }

   var userAuthenticated = function(){
      return loggedIn;
   }

   var outputTime = function(level){
      let min;
      let sec;
      switch(level){
         case 1:
            min = levelOneTimeSpent[0];
            sec = levelOneTimeSpent[1];
            break;
         case 2:
            min = levelTwoTimeSpent[0];
            sec = levelTwoTimeSpent[1];
            break;
         case 1:
            min = levelThreeTimeSpent[0];
            sec = levelThreeTimeSpent[1];
            break;
         case 1:
            min = levelFourTimeSpent[0];
            sec = levelFourTimeSpent[1];
            break;
         case 1:
            min = levelFiveTimeSpent[0];
            sec = levelFiveTimeSpent[1];
            break;
         case 1:
            min = customTimeSpent[0];
            sec = customTimeSpent[1];
            break;
      }
      
      if(min != null && sec != null && !(min == 0 && sec == 0)){
         let secondsString;
         if(sec < 10){
            secondsString = "0" + sec;
         }else{
            secondsString = sec;
         }
         let output = min + ":" + secondsString;
         return output;
      }else{
         return "INCOMPLETE";
      }
   }

  return {
    getEmail: getEmail,
    setEmail: setEmail,
    updateRecordTime : updateRecordTime,
    getLevelTimes : getLevelTimes,
    setLevelTimes : setLevelTimes,
    userLoggedIn : userLoggedIn,
    userLoggedOut : userLoggedOut,
    outputTime : outputTime,
    userAuthenticated : userAuthenticated
  }

})();

export default UserProfile;