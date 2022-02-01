import React from 'react';

export class Button{
    state = {
        showMessage: false
      }
      onButtonClickHandler = () => {
       this.setState({showMessage: true});
      };

}