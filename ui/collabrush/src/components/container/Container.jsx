import React from 'react';
import Board from '../board/Board';

import './style.css';

class Container extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            color: "#000000",
            size: "5"
        }
    }

    changeColor(params) {
        this.setState({
            color: params.target.value
        })
    }

    changeSize(params) {
        this.setState({
            size: params.target.value
        })
    }

    render() {

        return (


            

            <div className="container">
                
                <div class="tools-section">
                    
                <article>
                
                
                </article>

                    <h2>Collabrush</h2>
                    <img className="shaggy" ></img><br/><br/>
                    
                    <div className="color-picker-container">
                    <br/>
                    <article>
                
                    &nbsp;&nbsp;&nbsp;&nbsp;<h1>Select Brush Color :</h1> &nbsp; <br/> 
                </article>
                    
                        <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>
                    
                    <div className="brushsize-container">
                    <br/>
                    <article>
                
                    <h1>Select Brush Size :</h1> &nbsp; <br/> 
                    </article>
                        
                        <select value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>

                </div>

                <div class="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>
            </div>
        )
    }
}

export default Container