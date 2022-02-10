import React, { Profiler } from 'react';
import './Profile.css';

function Profile() {
    return (
        <>
            <div class="profile-contents">
                <h2 class = "profile-title-background"></h2>
                <h3 class = "profile-title">Profile</h3>

                <div class = "profile-Outline">
                <div class = "profile-BackgroundRectangle">
                  <div class="profile-UsernameBox">
                     <h2>Username: (HERE)</h2>
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
                        <h2>Time Spent</h2>
                     </li>
                  </ul>
                </div>
                </div>
            </div>
        </>
        
    );
}


export default Profile;