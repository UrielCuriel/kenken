export class board {
  grid: Array<any[]>;
  pieces: any[][];
  numberplaced: number = 0;
  squaresplaced: number = 0;
  attempts: number = 0;
  maxattempts: number = 10;
  gridsize: number;
  constructor(n) {
    this.pieces = new Array(5);
    this.pieces[0] = new Array(1);
    this.pieces[0][0] = new Array(0, 0);
    //make a dot
    this.pieces[0] = new Array(1);
    this.pieces[0][0] = new Array(0, 0);


    //make a square
    this.pieces[1] = new Array(4);
    this.pieces[1][0] = new Array(0, 0);
    this.pieces[1][1] = new Array(0, 1);
    this.pieces[1][2] = new Array(1, 0);
    this.pieces[1][3] = new Array(1, 1);

    //make a line
    this.pieces[2] = new Array(4);
    this.pieces[2][0] = new Array(0, 0);
    this.pieces[2][1] = new Array(0, 1);
    this.pieces[2][2] = new Array(0, 2);
    this.pieces[2][3] = new Array(0, 3);



    //make a L
    this.pieces[3] = new Array(5);
    this.pieces[3][0] = new Array(0, 0);
    this.pieces[3][1] = new Array(0, 1);
    this.pieces[3][2] = new Array(0, 2);
    this.pieces[3][3] = new Array(1, 0);
    this.pieces[3][4] = new Array(2, 0);

    //make a small line
    this.pieces[4] = new Array(2);
    this.pieces[4][0] = new Array(0, 0);
    this.pieces[4][1] = new Array(1, 0);
    this.gridsize = n;
    while (this.squaresplaced < this.gridsize * this.gridsize) {
      this.attempts++;
      if (this.attempts > this.maxattempts) {
        this.squaresplaced = this.gridsize * this.gridsize;
      }
      this.grid = new Array(n);
      for (let i = 0; i < n; i++) {
        this.grid[i] = new Array(n);
      }
      this.numberplaced = this.pieces.length;
      while (this.numberplaced == this.pieces.length) {
        this.numberplaced = 0;
        for (let i = 0; i < this.pieces.length; i++) {
          let xpad = 0;
          let ypad = 0;
          for (let p = 0; p < this.pieces[i].length; p++) {
            if (xpad < this.pieces[i][p][0]) { xpad = Math.floor(this.pieces[i][p][0]); }
            if (ypad < this.pieces[i][p][1]) { ypad = Math.floor(this.pieces[i][p][1]); }
          }
          let gridy = Math.random() * (this.grid.length) - ypad;
          let gridx = Math.random() * (this.grid[0].length) - xpad;
          let count = this.grid.length*this.grid[0].length;
          console.log(count);
          while (count>0) {
              while(gridx>-1){
                count--;
                if(gridx+xpad<this.grid[0].length){
                  if(gridy+ypad<this.grid.length){

                  }
                }
              }
          }
        }
      }
    }
    console.log(this);
  }
}
