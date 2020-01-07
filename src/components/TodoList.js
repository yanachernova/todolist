import React, { Component } from 'react';

const form = {
    width: "70%",
}
const parag = {
    color: "grey",
    fontSize: "14px",
    marginBottom: "0",
    marginLeft: "10px"
}

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            tasks: []
        }
    }

    addTask(e) {
        if (e.keyCode == 13 && e.target.value !== '') {
            this.setState({
                tasks: this.state.tasks.concat(e.target.value)
            })
            e.target.value = '';
        }
    }

    delTask(i){
        const tasks = this.state.tasks;
        tasks.splice(i, 1);
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <div className="card m-auto" style={form}>
                <input id="addToDo" type="text" placeholder="Add to do here"
                    onKeyDown={(e) => this.addTask(e)} />
                {
                    this.state.tasks.length > 0 ? (
                        <ul id="list">
                            {
                                this.state.tasks.map((task, i) => {
                                   return ( 
                                    <li>
                                        {task}
                                        <span><i className="fa fa-times float-right" onClick={() => this.delTask(i)}></i></span>
                                    </li>
                                   )
                                })
                            }
                        </ul>
                    ) : (
                        <p style={parag}>You don't have tasks</p>
                    )
                }

                <p id="parag" style={parag}></p>
            </div>
        )
    }
}


export default TodoList;