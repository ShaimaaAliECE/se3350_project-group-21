import React, { Profiler } from 'react';
import './Profile.css';
import UserProfile from '../Profile/UserProfile';

function Profile() {

   let levelTimes = UserProfile.getLevelTimes();

    return (
        <>
            <div class="profile-contents">
                <h2 class = "profile-title-background"></h2>
                <div class = "profile-title">Profile</div>

                <div class = "profile-Outline">
                <div class = "profile-BackgroundRectangle">
                  <div class="profile-UsernameBox">
                     <h2>Username: {UserProfile.getEmail()}</h2>
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
                        <h3 class="profile-LevelOutline">{levelTimes.levelOneTimeSpent[0] == null ? "INCOMPLETE" : levelTimes.levelOneTimeSpent[0] + ":" + levelTimes.levelOneTimeSpent[1]}</h3>
                        <h3 class="profile-LevelOutline">{levelTimes.levelTwoTimeSpent[0] == null ? "INCOMPLETE" : levelTimes.levelTwoTimeSpent[0] + ":" + levelTimes.levelTwoTimeSpent[1]}</h3>
                        <h3 class="profile-LevelOutline">{levelTimes.levelThreeTimeSpent[0] == null ? "INCOMPLETE" : levelTimes.levelThreeTimeSpent[0] + ":" + levelTimes.levelThreeTimeSpent[1]}</h3>
                        <h3 class="profile-LevelOutline">{levelTimes.levelFourTimeSpent[0] == null ? "INCOMPLETE" : levelTimes.levelFourTimeSpent[0] + ":" + levelTimes.levelFourTimeSpent[1]}</h3>
                        <h3 class="profile-LevelOutline">{levelTimes.levelFiveTimeSpent[0] == null ? "INCOMPLETE" : levelTimes.levelFiveTimeSpent[0] + ":" + levelTimes.levelFiveTimeSpent[1]}</h3>
                        <h3 class="profile-LevelOutline">{levelTimes.customTimeSpent[0] == null ? "INCOMPLETE" : levelTimes.customTimeSpent[0] + ":" + levelTimes.customTimeSpent[1]}</h3>
                     </li>
                  </ul>
                </div>
                </div>
            </div>
        </>
        
    );
}


export default Profile;