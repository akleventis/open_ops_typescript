import React from "react";
import "./Box.css";

interface IProps {
  onClick: (arg0: number, arg1: number) => void;
  row: number;
  col: number;
  width: number;
  color: string;
}

class Box extends React.Component <IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  randomColor = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  colorChange = (c: string): void => {
    this.setState({ color: c });
  };

  render() {
    return <div className="box" onClick={() => this.props.onClick(this.props.row, this.props.col)} style={{ backgroundColor: this.props.color, width: this.props.width }} />;
  }
}

export default Box;
