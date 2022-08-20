import React from 'react'
// export default function items() {
//   return (
//     <div>items</div>
//   )
// }


export default class Items extends React.Component {
  constructor(props){
    super(props)

    this.onIncreaseCount = this.onIncreaseCount.bind(this)

    this.state = {
      count: 0
    }

  }
  
  onIncreaseCount(e){
    this.setState((currentState) => currentState.count++);
  }
  
  componentDidMount(){
  }
  
  render(){
    return (
      <div>
        
      </div>
    )
  }
}