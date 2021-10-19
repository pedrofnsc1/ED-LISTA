export default class empresaConcreto {
  constructor(maxNumberOfTrucks = 5) {
    this.maxTrucks = maxNumberOfTrucks;
    this.trucksData = [];
    this.start = 0;
    this.end = 0;
  }

  arrival(newTruck) {
    if (this.start < this.maxTrucks) {
      this.trucksData[this.end++] = newTruck;
    } else {
      return 'number of trucks of the day reached';
    }
  };

  departure() {
    let depart = this.trucksData[this.start]
    this.start++;
    return depart;
  };

  checkTrucksWaiting() {
    return this.end - this.start;
  };

  numberOfShipmentReached() {
    return this.start;
    // if (this.start === this.maxTrucks) {
    //   return true
    // } else {
    //   return false;
    // }
  };

  listOfTrucks() {
    let reportOfTheDay = '';

    for (let i = 0; i < this.end; i++) {
      reportOfTheDay += ' | ' + this.trucksData[i];
    }
    return reportOfTheDay
  }
}