import React, { useState } from 'react';
import './Profile.css';
import UserProfile from '../Profile/UserProfile';
import { Link } from 'react-router-dom';

function Profile() {
   const [levelOneTime, setLevelOneTime] = useState(UserProfile.outputTime(1));
   const [levelTwoTime, setLevelTwoTime] = useState(UserProfile.outputTime(2));
   const [levelThreeTime, setLevelThreeTime] = useState(UserProfile.outputTime(3));
   const [levelFourTime, setLevelFourTime] = useState(UserProfile.outputTime(4));
   const [levelFiveTime, setLevelFiveTime] = useState(UserProfile.outputTime(5));
   const [levelCustomTime, setLevelCustomTime] = useState(UserProfile.outputTime(6));
   const type = "Merge";

   function getTimes(){
      setLevelOneTime(UserProfile.outputTime(1));
      setLevelTwoTime(UserProfile.outputTime(2));
      setLevelThreeTime(UserProfile.outputTime(3));
      setLevelFourTime(UserProfile.outputTime(4));
      setLevelFiveTime(UserProfile.outputTime(5));
      setLevelCustomTime(UserProfile.outputTime(6));
   }

   function DisplayTimeLevelOne(type){
      const undifined = "INCOMPLETE";
      if (type == "Merge"){

         return(levelOneTime);
      }
      if (type == "Bubble"){
         return(undifined);
      }
      if (type == "Quick"){
         return(undifined);
      }
   }

   function DisplayTimeLevelTwo(type){
      const undifined = "INCOMPLETE";
      if (type == "Merge"){
         return(levelTwoTime);
      }
      if (type == "Bubble"){
         return(undifined);
      }
      if (type == "Quick"){
         return(undifined);
      }
   }

   function DisplayTimeLevelThree(type){
      const undifined = "INCOMPLETE";
      if (type == "Merge"){
         return(levelThreeTime);
      }
      if (type == "Bubble"){
         return(undifined);
      }
      if (type == "Quick"){
         return(undifined);
      }
   }

   function DisplayTimeLevelFour(type){
      const undifined = "INCOMPLETE";
      if (type == "Merge"){
         return(levelFourTime);
      }
      if (type == "Bubble"){
         return(undifined);
      }
      if (type == "Quick"){
         return(undifined);
      }
   }

   function DisplayTimeLevelFive(type){
      const undifined = "INCOMPLETE";
      if (type == "Merge"){
         return(levelFiveTime);
      }
      if (type == "Bubble"){
         return(undifined);
      }
      if (type == "Quick"){
         return(undifined);
      }
   }

   function DisplayTimeCustomLevel(type){
      const undifined = "INCOMPLETE";
      if (type == "Merge"){
         return(levelCustomTime);
      }
      if (type == "Bubble"){
         return(undifined);
      }
      if (type == "Quick"){
         return(undifined);
      }
   }

   function ConvertTime(whole, decimal){
      whole = whole * 10;
      decimal = (decimal/60)*10;
      var num = whole + decimal
      return(num);
   }

   function draw(){

      var n = document.getElementById("num").value;
      var graphValues = n.split(',');

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      var width = 100;
      var X = 50;

      ctx.fillStyle = '#ffffff';
      
      for(var i = 0; i<graphValues.length; i++) {
         var h = graphValues[i];
         ctx.fillRect(X, canvas.height - h,width,h);
         X += width + 15;
      }
   }

    return (
        <>
            <div class="profile-contents">
                <h2 class = "profile-title-background"></h2>
                <div class = "profile-title">Profile</div>

                <div class = "profile-Outline">
                <div class = "profile-BackgroundRectangle">
                  <div class="profile-UsernameBox">
                     <h2>{UserProfile.getEmail()}</h2>
                  </div>
                  <div onClick={() => {
                                       UserProfile.clearLocalStorageTimes();
                                       getTimes();
                                       }} 
                     class="clear-button">
                     <div class = "clear-Box">
                        <h3 class= "clear-text">Clear Times</h3>
                     </div>
                  </div>
                  <h3>Algorithms:</h3>
                  <div class="dropdown">
                     <button class="dropbtn">Select Algorithm</button>
                     <div class="dropdown-content">
                        <a>Merge Sort</a>
                     </div>               
                  </div>
                  <ul class= "profile-grid">
                     <li>
                        <h2>Levels</h2>
                        <h3 class="profile-LevelOutline">Level 1</h3>
                        <h3 class="profile-LevelOutline">Level 2</h3>
                        <h3 class="profile-LevelOutline">Level 3</h3>
                        <h3 class="profile-LevelOutline">Level 4</h3>
                        <h3 class="profile-LevelOutline">Level 5</h3>
                        <h3 class="profile-LevelOutline">Custom</h3>
                     </li>
                     <li>
                        <h2>Top Time</h2>
                        <h3 class="profile-LevelOutline">{DisplayTimeLevelOne(type)}</h3>
                        <h3 class="profile-LevelOutline">{DisplayTimeLevelTwo(type)}</h3>
                        <h3 class="profile-LevelOutline">{DisplayTimeLevelThree(type)}</h3>
                        <h3 class="profile-LevelOutline">{DisplayTimeLevelFour(type)}</h3>
                        <h3 class="profile-LevelOutline">{DisplayTimeLevelFive(type)}</h3>
                        <h3 class="profile-LevelOutline">{DisplayTimeCustomLevel(type)}</h3>
                     </li>
                  </ul>
                  <h2>User Analytics</h2>
                  
                  <section>
                        <div class="box">
                           <div class ="skill">
                              <div class="graph" style={{height: ConvertTime(Number(UserProfile.getLevelTimeMin(1)), Number(UserProfile.getLevelTimeSec(1)))}}>
                                 <div class="percent">{DisplayTimeLevelOne(type)}</div>
                              </div>
                              <div class="name">Level 1</div>
                           </div> 
                           <div class ="skill">
                              <div class="graph" style={{height: ConvertTime(Number(UserProfile.getLevelTimeMin(2)), Number(UserProfile.getLevelTimeSec(2)))}}>
                                 <div class="percent">{DisplayTimeLevelTwo(type)}</div>
                              </div>
                              <div class="name">Level 2</div>
                           </div>
                           <div class ="skill">
                              <div class="graph" style={{height: ConvertTime(Number(UserProfile.getLevelTimeMin(3)),Number(UserProfile.getLevelTimeSec(3)))}}>
                                 <div class="percent">{DisplayTimeLevelThree(type)}</div>
                              </div>
                              <div class="name">Level 3</div>
                           </div>
                           <div class ="skill">
                              <div class="graph" style={{height: ConvertTime(Number(UserProfile.getLevelTimeMin(4)), Number(UserProfile.getLevelTimeSec(4)))}}>
                                 <div class="percent">{DisplayTimeLevelFour(type)}</div>
                              </div>
                              <div class="name">Level 4</div>
                           </div>
                           <div class ="skill">
                              <div class="graph" style={{height: ConvertTime(Number(UserProfile.getLevelTimeMin(5)), Number(UserProfile.getLevelTimeSec(5)))}}>
                                 <div class="percent">{DisplayTimeLevelFive(type)}</div>
                              </div>
                              <div class="name">Level 5</div>
                           </div>
                           <div class ="skill">
                              <div class="graph" style={{height: ConvertTime(Number(UserProfile.getLevelTimeMin(6)), Number(UserProfile.getLevelTimeSec(6)))}}>
                                 <div class="percent">{DisplayTimeCustomLevel(type)}</div>
                              </div>
                              <div class="name">Custom</div>
                           </div> 
                        </div>
                     </section>
                  
                </div>
                </div>
            </div>
        </>
        
    );
}


export default Profile;