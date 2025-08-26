import React, { Component } from 'react'

export default class Counter extends Component {

    state={
        counter:0
    }

    constructor(){
        super()
        console.log('1-constructor')
    }
 
    componentDidMount(){
        console.log("3-only once after initial render")
    }
    
componentDidUpdate(){
    console.log("counter state updated")
}

componentWillUnmount(){
    console.log("component will be destroyed")
}

  handleIncrease=()=>{
    this.setState({counter:this.state.counter+1})

  }
   handleDecrease=()=>{
        this.setState({counter:this.state.counter-1})
  }
  render() {
    return (
        console.log("2-render method"),
        <>
        <div className='alert alert-info m-2' >Counter:{this.state.counter}</div>
         <button className='btn btn-success px-5 py-3 me-2' onClick={this.handleIncrease} >increase</button>
         <button className='btn btn-danger px-5 py-3' onClick={this.handleDecrease}  >decrease</button>
        </>
    )
  }
}

//componentDidMount() --->only once after intial render--->fetch data from api
//componentDidUpdate()--->executed after state updates
//componentWillUnmount()--->exeuted when component being destroyes