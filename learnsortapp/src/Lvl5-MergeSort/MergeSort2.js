import { Partition2 } from './Partition2';

export class MergeSort2 { // Will act as our merge sort algo
  // first define an array of partitions
  partitions = [];

  // perform merge sort algo on the current partition
  mergeSort(currentPartition) {

    // if our current partition has a length of 1, we can just return the value of that node
    if (currentPartition.isSingleItemList()) {
      return currentPartition;
    }

    // if the current partition has more than one node, we can get left and right halves
    let left = currentPartition.getLeftHalf();
    let right = currentPartition.getRightHalf();

    // initial styling, not very pretty but will do for now
    this.buildModel(left, {left: [...currentPartition.items]});
    this.buildModel(right, {left: [...currentPartition.items]});  
    
    // return the merge sort for the current partition
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  // merging the nodes from left and right
  merge(left, right){
    // create a result array
    let result = [];
    // get parts of the values
    let parts = {left: [...left.items], right: [...right.items]};

    // while both sides of the merge are not empty
    while (!left.isEmpty() && !right.isEmpty()) {
      
      // if the left value is smaller than the right value, push the left item into the results array first
      if (left.first() < right.first()){
        result.push(left.items.shift());
      } 
      else {
        // otherwise the right item will go in first
        result.push(right.items.shift());
      }
    }

    // add the two havles of the results array
    result = result.concat(left.items).concat(right.items);

    // create a new partition from left id - right id with the result
    let newPartition = new Partition2(`${left.id}-${right.id}`, result);
    
    // again, use the current styling, but needs some work
    this.buildModel(newPartition, parts);
    
    // return the new partition
    return newPartition;
  }

  // current styling, but not very attractive
  buildModel(res, part) {
    // get the index of the current node in the partition
    let nodeIndex = this.partitions.findIndex(p => p.parentId === res.parentId);
   
    // if the partition contains a node
    if(nodeIndex >= 0) {
      // create the left side of the output (will be the current partition)
      this.partitions[nodeIndex].fragments.push(res.items.slice());
      this.partitions[nodeIndex].part1 = [];
    
      // create the right side of the output (will be the nodes that make up the current partition)
      this.partitions[nodeIndex].part2 = part.left;
      this.partitions[nodeIndex].descr = ' split ';
      this.partitions[nodeIndex].show = 'hide';
    }  
    else {
      // if there are no nodes left, then display the current row of the output
      let node = {parentId: res.parentId, fragments: []};
      
      node.part1 = part.left;
      node.descr = ' merged ';
      node.part2 = part.right;
      node.show = 'group';
      
      node.fragments.push(res.items.slice());
      this.partitions.push(node);
    }
  }
}