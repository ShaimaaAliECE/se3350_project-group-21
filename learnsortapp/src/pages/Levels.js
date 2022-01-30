import React from 'react';
import { Link } from 'react-router-dom';

function Levels() {
    return (
        <div>
            <form action="/Level1">
                <input type="submit" value="Go to Level 1" />
            </form>
        </div>
    );
}

export default Levels
