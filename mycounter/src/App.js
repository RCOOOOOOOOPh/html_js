import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from "./components/counters";

class App extends Component {
  //copied from counters.jsx
  state = {
    counters:[
        {id:1, value:114},
        {id:2, value:514},
        {id:3, value:0},
        {id:4, value:0}
    ]
  }; 

  constructor()
  {
    super();
    console.log("APP constructor");
  }
  componentDidMount()
  {
    console.log("APP mounted");
  }

  handleDelete=(counterID)=>
  {
      console.log("handleDelete, counterID is ", counterID)
      const counters = this.state.counters.filter(c=>c.id !== counterID)
      //上面那个应该是把id不等于counterID的滤掉了
      //类python伪代码[c for c in this.state.counters if c.id != counterID]
      //点击第二个delete按钮的时候，传进来的counterID=2
      //所以新的counters只有id为1,3,4的三个,把旧的替换掉即可
      this.setState({counters});
  };

  handleIncrement=(counter)=>
  {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter)
      counters[index].value++;
      this.setState({counters});
      console.log("handleIncrement", counter);
  };

  handleReset=()=>
  {
      const counters = this.state.counters.map(c=>
      {
          c.value=0;
          return c;
      });
      this.setState({counters});
  }
  //copy ends

  render() {
    console.log("App rendered"); 
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <main className='container'>
        <Counters 
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;