export class Partition2 { // partition class will separate our output from MergeSort
    static nextId = 0;
  
    // constructor to get current nodes from our list of values (will also get partition id)
    constructor(parentId, items) {
      this.items = items;
      this.parentId = `parentId${parentId}`;
      this.id = (Partition2.nextId++).toString();
      this.middle = this.findMiddle();
    }
  
    // if the list of values is empty, then we can return a length of 0
    isEmpty() {
      return this.items.length === 0;
    }
  
    // if the value only has 1 item, then we can return a length of 1
    isSingleItemList() {
      return this.items.length < 2;
    }

    /* to find the middle node of the values, we will take the current length of our values and divide it by 2 
    (taking to floor to ensure it is not going over)*/
    findMiddle() {
      return Math.floor(this.items.length / 2);
    }
  
    // get first node in values
    first() {
      return this.items[0];
    }
  
    // get the first (left) half of the values
    getLeftHalf() {
      let items = this.items.slice(0, this.middle);
      // create a new partition of the smaller size of values
      return new Partition2(this.id, items);
    }
  
    // get the second (right) half of the values
    getRightHalf() {
      let items = this.items.slice(this.middle, this.items.length);
      // create a new partition of the smaller size of values
      return new Partition2(this.id, items);
    }
  }