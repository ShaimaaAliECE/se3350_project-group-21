import React from 'react';
import './Instructions.css';

function Instructions() {
    return (
        <>
            <div class="instructions-contents">
                <h2 class = "instructions-title-background"></h2>
                <h3 class = "instructions-title">Instructions</h3>

                <div class = "instructions-Outline">
                <div class = "instructions-BackgroundRectangle">
                    <h2>What is LearnSort?</h2>
                    <p>This is an educational web application that allows students to learn different software engineering sorting algorithms with animations, interactive tests, and speech/text feedback.</p>

                    <h2>What are its Functions?</h2>

                    <h4>Course Page</h4>
                    <p>When users first login, they’ll be presented with the main dashboard which contains all possible lessons (sorting algorithms) to learn. From there, they’ll be able to choose a specific algorithm and begin learning. Currently learning is only available for merge sort, however we intend to add additional learning modules.</p>
                
                    <h4>Level 1</h4>
                    <p>Upon entering level one, the user will be presented with an explanation of the sorting algorithm, in this case merge sort. Once they’ve learned about the specific algorithm, they’ll be able to randomly generate numbers to watch an animation of the algorithm working. This animation includes an explanation at each step.</p>
                    
                    <h4>Updates</h4>
                    <p>Upon future updates new features and levels will be integrated into the system. So stay tuned!!!</p>
                </div>
                </div>
            </div>
        </>
        
    );
}

// To be added in future releases as levels roll out
/*

<h4>Profile</h4>
<p>In the profile tab users can track their progress and view their history for each level/learning module. This will also include the time they spent on each level.</p>


<h4>Level 2</h4>
<p>Once users have completed level 1, they navigate to level 2 where they will be given more opportunity to test the algorithm themselves. At each step of the algorithm, users will be asked to select the correct answer between two options and drag that answer into the algorithm implementation. Our intentions are to allow the user to check their answer as they go.</p>

<h4>Level 3</h4>
<p>After reaching level 3, the difficulty will increase and users will get the opportunity to fill in the blanks. The user will be able to check their answer and receive 3 attempts. A pop up will appear indicating if the response is correct or incorrect.</p>

<h4>Level 4</h4>
<p>Level 4 will give users the opportunity to sort 20 values instead of just 10. Again, they will need to fill in the blanks and will have the opportunity to check their answers as they go. Pop ups will reveal if they are correct or incorrect.</p>

<h4>Level 5</h4>
<p>Level 5 follows the same format as level four and three, however users will now be able to sort 50 values.</p>

<h4>Custom Level</h4>
<p>A custom level will allow users to input their own set of values which will instantiate a group of rectangles for them to fill in. Currently, we have it set to 10 values, however users can select how many values they would like to sort.</p>

*/

export default Instructions