import React, { Component } from 'react';
import { MergeSort } from './MergeSort';
import { Partition } from './Partition';

export default class MergeSortComponent extends Component {

  // Random number generator 
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 21));

  constructor() {
    super();

    // create references for partitions and mergesort
    this.state = {partitions:  []};
    this.mergeSort1 = new MergeSort();
  }

  // will be called after the component is rendered
  componentDidMount() {
    // make a partition of the current unsorted array
    let partition = new Partition(0, this.unsorted);
    this.mergeSort1.mergeSort(partition);
    this.setState({partitions: this.mergeSort1.partitions});   
  }

  render() {
    // more styling, again it could use some work
    // get each partition and map each node 
    let fragments = this.state.partitions.map((node, i1) => {
      // for each fragment row
        return <div key={i1} className="fragment-row" >
                {
                  node.fragments.map((numbers, i2) =>
                  <span>
                    <span className="group" key={i2}>
                    {
                      numbers.map((number, index) => {
                        {/* will display the first half of each row (before "split from" or "merged from") */}
                        return <span key={index} className="number"> {number} </span>
                      })
                    }
                    </span>
                  </span>
                  )
                }
                
                {/* will either be "split from" or "merged from" */}
                <span>{node.descr}</span>

                {/* will display the first half of the right side (after "split from" or "merged from") */}
                <span className={node.show}>
                  {(node.part1 || []).map((n, index) => {
                    return <span key={index} className="number"> {n} </span>
                  })}
                </span>
              
                {/* will display the second half of the right side (after "split from" or "merged from") */}
                <span className="group">
                  {(node.part2 || []).map((n, index) => {
                    return <span key={index} className="number"> {n} </span>
                  })}
                </span>
              </div>
    });
      return (
        <>
        <div>
          <div class = "Rectangle15">
            <h3 class = "MergeSortText">Merge Sort</h3>
          </div>
          <div className="fragment-row">
            {/* // will show the initial values (created by random number generator) */}
            <strong>Sample Numbers: { this.unsorted.join(' ') }</strong>
          </div>
          {/* this is where the rows of the output are printed
          each fragment is a row of the output, e.g. fragments[0] is row 1... */}
          {fragments}
        </div>
        </>
        );
  }
}