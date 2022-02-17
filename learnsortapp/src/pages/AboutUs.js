import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <div class="AboutUs-contents">
                <h2 class = "AboutUs-title-background"></h2>
                <h3 class = "AboutUs-title">About Us</h3>

                <div class = "AboutUs-Outline">
                <div class = "AboutUs-BackgroundRectangle">
                    <h2>Who are we?</h2>
                    <p>We are software engineering students at Western Univeristy.</p>

                    <h2>Why did we create LearnSort?</h2>
                    <p>LearnSort was created for our Software Engineering Design course (SE 3350).</p>
                </div>
                </div>
            </div>
        </>
        
    );
}

export default AboutUs