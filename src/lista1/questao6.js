import Stack from '../stack';
export default class verify {
  constructor() {
    this.stack = new Stack();
    this.aux = null;
  }
  verifyStack(newSequence) {
    if (newSequence === '') {
      return 'theres no sequence here';
    } else {
      for (let i = 0; i < newSequence.length; i++) {
        if (newSequence[i] === '[' || newSequence[i] === '(') {
          this.stack.push(newSequence[i]);
        } else if (newSequence[i] === ']' || newSequence[i] === ')') {
          this.aux = this.stack.topItem();
          if ((this.aux === '[' && newSequence[i] !== ']')
            || (this.aux === '(' && newSequence[i] !== ']')) {
            return false;
          }
        }
      }
      return this.stack.isEmpty();
    }
  }
}