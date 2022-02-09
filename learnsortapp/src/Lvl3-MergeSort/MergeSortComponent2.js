import React, { Component } from 'react';
import { MergeSort2 } from './MergeSort2';
import { Partition2 } from './Partition2';
import './MergeSortComponent2.css'

export default class MergeSortComponent1 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);

  constructor() {
    super();



  }; 

  // random number generator
  randomNum(){
    let r = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);
    return r;
  }
}