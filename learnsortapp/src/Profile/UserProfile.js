var UserProfile = (function() {
  var email = "";

  var levelOneTimeSpentSec;
  var levelOneTimeSpentMin;

  var levelTwoTimeSpentSec;
  var levelTwoTimeSpentMin;

  var levelThreeTimeSpentSec;
  var levelThreeTimeSpentMin;

  var levelFourTimeSpentSec;
  var levelFourTimeSpentMin;

  var levelFiveTimeSpentSec;
  var levelFiveTimeSpentMin;

  var levelCustomTimeSpentSec;
  var levelCustomTimeSpentMin;

  var loggedIn = false;

  var getEmail = function() {
    return email;
  };

  var setEmail = function(value) {
    email = value;
  };

  var clearTimes = function(){
      
   levelOneTimeSpentMin = 0;
   levelOneTimeSpentSec = 0;

   levelTwoTimeSpentMin = 0;
   levelTwoTimeSpentSec = 0;

   levelThreeTimeSpentMin = 0;
   levelThreeTimeSpentSec = 0;

   levelFourTimeSpentMin = 0;
   levelFourTimeSpentSec = 0;

   levelFiveTimeSpentMin = 0;
   levelFiveTimeSpentSec = 0;

   levelCustomTimeSpentMin = 0;
   levelCustomTimeSpentSec = 0;
}

  var updateRecordTime = function(level, newTimeMin, newTimeSeconds){  
      switch(level){
         case 1:
            if(levelOneTimeSpentMin == null){
               alert(newTimeMin);
               levelOneTimeSpentMin = newTimeMin;
               levelOneTimeSpentSec = newTimeSeconds;
            }else if(levelOneTimeSpentMin >= newTimeMin){
               if(levelOneTimeSpentSec >= newTimeSeconds){
                  levelOneTimeSpentMin = newTimeMin;
                  levelOneTimeSpentSec = newTimeSeconds;
               }
            }
            break;
         case 2:
            if(levelTwoTimeSpentMin == null){
               levelTwoTimeSpentMin = newTimeMin;
               levelTwoTimeSpentSec = newTimeSeconds;
            }else if(levelTwoTimeSpentMin >= newTimeMin){
               if(levelTwoTimeSpentSec >= newTimeSeconds){
                  levelTwoTimeSpentMin = newTimeMin;
                  levelTwoTimeSpentSec = newTimeSeconds;
               }
            }
            break;
         case 3:
            if(levelThreeTimeSpentMin == null){
               levelThreeTimeSpentMin = newTimeMin;
               levelThreeTimeSpentSec = newTimeSeconds;
            }else if(levelThreeTimeSpentMin >= newTimeMin){
               if(levelThreeTimeSpentSec >= newTimeSeconds){
                  levelThreeTimeSpentMin = newTimeMin;
                  levelThreeTimeSpentSec = newTimeSeconds;
               }
            }
            break;
         case 4:
            if(levelFourTimeSpentMin == null){
               levelFourTimeSpentMin = newTimeMin;
               levelFourTimeSpentSec = newTimeSeconds;
            }else if(levelFourTimeSpentMin >= newTimeMin){
               if(levelFourTimeSpentSec >= newTimeSeconds){
                  levelFourTimeSpentMin = newTimeMin;
                  levelFourTimeSpentSec = newTimeSeconds;
               }
            }
            break;
         case 5:
            if(levelFiveTimeSpentMin == null){
               levelFiveTimeSpentMin = newTimeMin;
               levelFiveTimeSpentSec = newTimeSeconds;
            }else if(levelFiveTimeSpentMin >= newTimeMin){
               if(levelFiveTimeSpentSec >= newTimeSeconds){
                  levelFiveTimeSpentMin = newTimeMin;
                  levelFiveTimeSpentSec = newTimeSeconds;
               }
            }
            break;
         case 6:
            if(levelCustomTimeSpentMin == null){
               levelCustomTimeSpentMin = newTimeMin;
               levelCustomTimeSpentSec = newTimeSeconds;
            }else if(levelCustomTimeSpentMin >= newTimeMin){
               if(levelCustomTimeSpentSec >= newTimeSeconds){
                  levelCustomTimeSpentMin = newTimeMin;
                  levelCustomTimeSpentSec = newTimeSeconds;
               }
            }
            break;
      }
  };

  var populateProfileTimes = function(){
   levelOneTimeSpentMin = localStorage.getItem("levelOneMin");
   levelOneTimeSpentSec = localStorage.getItem("levelOneSec");

   levelTwoTimeSpentMin = localStorage.getItem("levelTwoMin");
   levelTwoTimeSpentSec = localStorage.getItem("levelTwoSec");

   levelThreeTimeSpentMin = localStorage.getItem("levelThreeMin");
   levelThreeTimeSpentSec = localStorage.getItem("levelThreeSec");

   levelFourTimeSpentMin = localStorage.getItem("levelFourMin");
   levelFourTimeSpentSec = localStorage.getItem("levelFourSec");

   levelFiveTimeSpentMin = localStorage.getItem("levelFiveMin");
   levelFiveTimeSpentSec = localStorage.getItem("levelFiveSec");

   levelCustomTimeSpentMin = localStorage.getItem("levelCustomMin");
   levelCustomTimeSpentSec = localStorage.getItem("levelCustomSec");
}

   var userLoggedIn = function(user) {
      this.setEmail(user);
      loggedIn = true;
      //populateProfileTimes();
   }

   var populateLocalStorageTimes = function(){
      localStorage.setItem("levelOneMin", this.levelOneTimeSpentMin);
      localStorage.setItem("levelOneSec", this.levelOneTimeSpentSec);

      localStorage.setItem("levelTwoMin", this.levelTwoTimeSpentMin);
      localStorage.setItem("levelTwoSec", this.levelTwoTimeSpentSec);

      localStorage.setItem("levelThreeMin", this.levelThreeTimeSpentMin);
      localStorage.setItem("levelThreeSec", this.levelThreeTimeSpentSec);

      localStorage.setItem("levelFourMin", this.levelFourTimeSpentMin);
      localStorage.setItem("levelFourSec", this.levelFourTimeSpentSec);

      localStorage.setItem("levelFiveMin", this.levelFiveTimeSpentMin);
      localStorage.setItem("levelFiveSec", this.levelFiveTimeSpentSec);

      localStorage.setItem("levelCustomMin", this.customTimeSpentMin);
      localStorage.setItem("levelCustomSec", this.customTimeSpentSec);
      
   }

   var userLoggedOut = function() {
      this.setEmail("");
      //populateLocalStorageTimes();
      clearTimes();
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
            min = levelOneTimeSpentMin;
            sec = levelOneTimeSpentSec;
            break;
         case 2:
            min = levelTwoTimeSpentMin;
            sec = levelTwoTimeSpentSec;
            break;
         case 3:
            min = levelThreeTimeSpentMin;
            sec = levelThreeTimeSpentSec;
            break;
         case 4:
            min = levelFourTimeSpentMin;
            sec = levelFourTimeSpentSec;
            break;
         case 5:
            min = levelFiveTimeSpentMin;
            sec = levelFiveTimeSpentSec;
            break;
         case 6:
            min = levelCustomTimeSpentMin;
            sec = levelCustomTimeSpentSec;
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
    userLoggedIn : userLoggedIn,
    userLoggedOut : userLoggedOut,
    outputTime : outputTime,
    userAuthenticated : userAuthenticated,
    clearTimes : clearTimes,
  }

})();

export default UserProfile;