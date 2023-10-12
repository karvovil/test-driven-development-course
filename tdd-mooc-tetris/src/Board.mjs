export class Board {
  width;
  height;
  state;
  currentBlock;
  currentBlockX;
  currentBlockY;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.state = `...\n...\n...\n`;
  }
  
  toString() {    
    return this.state;
  }
  
  drop(arg){
    this.currentBlock = arg
    this.currentBlockX = 1
    this.currentBlockY = 0
    const newState = `.${this.currentBlock}.\n...\n...\n`;
    if(newState.includes('Y') ){
      throw new Error("already falling");
    }else{
      this.state = newState
    }
  }

  tick() {
    if (this.state == `...\n.${this.currentBlock}.\n...\n`){
      this.state = `...\n...\n.${this.currentBlock}.\n`;
      this.currentBlockY++;
    }else{
      this.state = `...\n.${this.currentBlock}.\n...\n`;
      this.currentBlockY++;
    }
  }

  hasFalling() {
    return true;
  }
}
