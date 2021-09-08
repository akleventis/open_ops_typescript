import React from 'react'
import Box from './Box'

interface IState {
    boxes: any[],
    rowNum: number,
    colNum: number,
    width: number
}

class Boxes extends React.Component <{}, IState>{
    constructor(){
        super({});
        this.state = {
            boxes: [],
            rowNum: 10,
            colNum: 10,
            width: 100
        }
    }

    componentDidMount() {
        window.addEventListener('load', this.fillBoxState);
    }

    randomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    handleBoxClick = (row: number, col: number) => {
        const boxes = this.state.boxes;
        boxes[row][col] = this.randomColor();
        const [r, c] = this.changeNeighbor(row, col)
        boxes[r][c] = this.randomColor();
        this.setState({boxes})
        console.log(boxes)
    }
    changeNeighbor = (row: number, col: number): number[] => {
        const rowChange = [[row], [row+1], [row-1]]
        const colChange = [[col], [col+1], [col-1]]
        let r
        let c
        while (true) {
            r = rowChange[Math.floor(Math.random()*3)]
            c = colChange[Math.floor(Math.random()*3)]
            if (r[0]===row && c[0]===col){
                continue
            }
            if (r !== undefined && c !== undefined) {
                break;
            }
        }
        console.log(row, r, col, c)
        return [r[0], c[0]]
    }

    fillBoxState = () => {
        const boxes = []
        const width = Math.floor(window.screen.width/this.state.colNum)
        for (let i = 0; i < this.state.rowNum; i++){
            const row = []
            for (let j = 0; j < this.state.colNum; j++){
                row.push(this.randomColor());
            }
            boxes.push(row)
        }
        console.log(boxes)
        this.setState({boxes, width})
    }

    render(){
        return (
            <div>
                {this.state.boxes.map((rowArray = [], row) => {
                    return rowArray.map((color: string, col: number) => {
                        return <Box color={color} row={row} col={col} onClick={this.handleBoxClick} width={this.state.width} key={row+col} />
                    })
                })}
            </div>
        )
    }
}

export default Boxes