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
            if(levelOneTimeSpentMin == null || (levelOneTimeSpentMin == 0 && levelOneTimeSpentSec == 0)){
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
            if(levelTwoTimeSpentMin == null || (levelTwoTimeSpentMin == 0 && levelTwoTimeSpentSec == 0)){
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
            if(levelThreeTimeSpentMin == null || (levelThreeTimeSpentMin == 0 && levelThreeTimeSpentSec == 0)){
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
            if(levelFourTimeSpentMin == null || (levelFourTimeSpentMin == 0 && levelFourTimeSpentSec == 0)){
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
            if(levelFiveTimeSpentMin == null || (levelFiveTimeSpentMin == 0 && levelCustomTimeSpentSec == 0)){
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
            if(levelCustomTimeSpentMin == null || (levelCustomTimeSpentMin == 0 && levelCustomTimeSpentSec == 0)){
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
      if(!Number.isNaN(Number(localStorage.getItem(String(email + "levelOneMin"))))){
         levelOneTimeSpentMin = Number(localStorage.getItem(String(email + "levelOneMin")));
         levelOneTimeSpentSec = Number(localStorage.getItem(String(email + "levelOneSec")));
      }else{
         levelOneTimeSpentMin = 0;
         levelOneTimeSpentSec = 0;
      }

      if(!Number.isNaN(Number(localStorage.getItem(String(email + "levelTwoMin"))))){
         levelTwoTimeSpentMin = Number(localStorage.getItem(String(email + "levelTwoMin")));
         levelTwoTimeSpentSec = Number(localStorage.getItem(String(email + "levelTwoSec")));
      }else{
         levelTwoTimeSpentMin = 0;
         levelTwoTimeSpentSec = 0;
      }

      if(!Number.isNaN(Number(localStorage.getItem(String(email + "levelThreeMin"))))){
         levelThreeTimeSpentMin = Number(localStorage.getItem(String(email + "levelThreeMin")));
         levelThreeTimeSpentSec = Number(localStorage.getItem(String(email + "levelThreeSec")));
      }else{
         levelThreeTimeSpentMin = 0;
         levelThreeTimeSpentSec = 0;
      }

      if(!Number.isNaN(Number(localStorage.getItem(String(email + "levelFourMin"))))){
         levelFourTimeSpentMin = Number(localStorage.getItem(String(email + "levelFourMin")));
         levelFourTimeSpentSec = Number(localStorage.getItem(String(email + "levelFourSec")));
      }else{
         levelFourTimeSpentMin = 0;
         levelFourTimeSpentSec = 0;
      }

      if(!Number.isNaN(Number(localStorage.getItem(String(email + "levelFiveMin"))))){
         levelFiveTimeSpentMin = Number(localStorage.getItem(String(email + "levelFiveMin")));
         levelFiveTimeSpentSec = Number(localStorage.getItem(String(email + "levelFiveSec")));
      }else{
         levelFiveTimeSpentMin = 0;
         levelFiveTimeSpentSec = 0;
      }

      if(!Number.isNaN(Number(localStorage.getItem(email + "levelFiveMin")))){
         levelCustomTimeSpentMin = Number(localStorage.getItem(email + "levelCustomMin"));
         levelCustomTimeSpentSec = Number(localStorage.getItem(email + "levelCustomSec"));
      }else{
         levelCustomTimeSpentMin = 0;
         levelCustomTimeSpentSec = 0;
      }
}

   var userLoggedIn = function(user) {
      this.setEmail(user);
      loggedIn = true;
      populateProfileTimes();
   }

   var populateLocalStorageTimes = function(){
      localStorage.setItem(String(email + "levelOneMin"), String(levelOneTimeSpentMin));
      localStorage.setItem(String(email + "levelOneSec"), String(levelOneTimeSpentSec));

      localStorage.setItem(String(email + "levelTwoMin"), String(levelTwoTimeSpentMin));
      localStorage.setItem(String(email + "levelTwoSec"), String(levelTwoTimeSpentSec));

      localStorage.setItem(String(email + "levelThreeMin"), String(levelThreeTimeSpentMin));
      localStorage.setItem(String(email + "levelThreeSec"), String(levelThreeTimeSpentSec));

      localStorage.setItem(String(email + "levelFourMin"), String(levelFourTimeSpentMin));
      localStorage.setItem(String(email + "levelFourSec"), String(levelFourTimeSpentSec));

      localStorage.setItem(String(email + "levelFiveMin"), String(levelFiveTimeSpentMin));
      localStorage.setItem(String(email + "levelFiveSec"), String(levelFiveTimeSpentSec));

      localStorage.setItem(String(email + "levelCustomMin"), String(levelCustomTimeSpentMin));
      localStorage.setItem(String(email + "levelCustomSec"), String(levelCustomTimeSpentSec));
      
   }

   var userLoggedOut = function() {
      populateLocalStorageTimes();
      setEmail("");
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