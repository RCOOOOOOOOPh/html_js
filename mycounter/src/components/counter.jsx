import React, { Component } from 'react';

export default class Counter extends Component {
    /* state = {  
        count:this.props.counter.value
    }; */

    /* handleIncrement=()=>
    {
        this.setState({count: this.state.count + 1});
    } */

    componentDidUpdate(prevProps, prevState){
        console.log("counter", this.props.counter.id,"prevProps", prevProps);
        console.log("counter", this.props.counter.id,"prevState", prevState);
    }

    componentWillUnmount()
    {
        console.log("counter", this.props.counter.id,"unmount");
    }

    render() 
    { 
        console.log("counter", this.props.counter.id,"rendered");
        let classes = this.getBadgeClasses();
        return(
            <div>
                {this.props.children}
                <span style={{fontSize:20}} className={classes}>{this.formatCount()}</span>
                <button
                    onClick={()=>this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );//m-2:margin is 2
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const{value} = this.props.counter;
        return value === 0? "zero" : value;
    }
}