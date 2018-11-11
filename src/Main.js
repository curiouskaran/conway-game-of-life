import React, {Component} from 'react';

import Grid from './Grid';
import Buttons from './Buttons';
import {arrayClone} from './Util';

class Main extends Component {
    speed = 100;
    rows = 30;
    cols = 50;

    state = {
        generation: 0,
        gridFull: Array(this.rows).fill(Array(this.cols).fill(false))
    }

    selectBox = (row,col) => {
        let updatedGridFull = arrayClone(this.state.gridFull);
        updatedGridFull[row][col] = !updatedGridFull[row][col];
        
        this.setState({
            gridFull: updatedGridFull
        });
    }
    
    seedGameOfLife = () => {
        let updatedGridFull = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if(Math.floor(Math.random() * 4) === 1 ) {
                    updatedGridFull[i][j] = true
                }
            }
        }
        
        this.setState({
            gridFull: updatedGridFull
        });
    }

    play = () => {
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let count = 0;
                //Rule 1
                if(i > 0){
                    if(g[i-1][j]) {
                        count++;
                    }
                }
                //Rule 2
                if(i > 0 && j > 0) {
                    if(g[i-1][j-1]) {
                        count++;
                    }
                }
                //Rule 3
                if(i > 0 && j < this.cols - 1) {
                    if(g[i-1][j+1]) {
                        count++
                    }
                }
                //Rule 4
                if(j < this.cols - 1 ) {
                    if(g[i][j+1]) {
                        count++
                    }
                }
                //Rule 5
                if(j > 0) {
                    if(g[i][j-1]) {
                        count++;
                    }
                }
                //Rule 6
                if(i < this.rows - 1) {
                    if(g[i+1][j]) {
                        count++
                    }
                }
                //Rule 7
                if(i < this.rows - 1 && j > 0 ) {
                    if(g[i+1][j-1]) {
                        count++;
                    }
                }
                //Rule 8
                if(i < this.rows -1 && this.cols -1 ) {
                    if(g[i+1][j+1]) {
                        count++;
                    }
                }
                //Rule 9
                if(g[i][j] && (count < 2 || count > 3)) {
                    g2[i][j] = false;
                }
                //Rule 10
                if(!g[i][j] && count === 3) {
                    g2[i][j] = true;
                }
            }
        }

        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        })
    }

    playGameOfLife = () => {
        clearInterval(this.runInterval);
        this.runInterval= setInterval(this.play, this.speed);
    }

    pauseGameOfLife = () => {
        clearInterval(this.runInterval);
    }

    slowGameOfLife = () => {
        this.speed = 1000;
        this.playGameOfLife();
    }
    
    fastGameOfLife = () => {
        this.speed = 100;
        this.playGameOfLife();
    }

    clearGameOfLife = () => {
        let updatedGridFull = Array(this.rows).fill(Array(this.cols).fill(false))
        this.setState({
            gridFull: updatedGridFull,
            generation: 0
        });
        clearInterval(this.runInterval);
    }

    gridSize = (event) => {
        console.log(event);
        switch (event) {
            case "1":
                this.rows = 20;
                this.cols = 10;
                break;
            case "2":
                this.rows = 50;
                this.cols = 30;     
                break;
            default:
                this.rows = 70;
                this.cols = 50;
                break;
        }

        this.clearGameOfLife();
    }


    componentDidMount() {
        this.seedGameOfLife();
        this.playGameOfLife();
    }

    render() {
        return (
            <React.Fragment>
                <h1>Game Of Life</h1>
                <Buttons
                    playGameOfLife={this.playGameOfLife}
                    pauseGameOfLife={this.pauseGameOfLife}
                    slowGameOfLife={this.slowGameOfLife}
                    fastGameOfLife={this.fastGameOfLife}
                    clearGameOfLife={this.clearGameOfLife}
                    seedGameOfLife={this.seedGameOfLife}
                    gridSize={this.gridSize}
                />
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation}</h2>
            </React.Fragment>
        )
    }
}

export default Main;