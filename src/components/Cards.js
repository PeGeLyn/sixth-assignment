import React, { Component } from 'react'
import axios from 'axios'

export class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            corona:[]
             
        }
    }
    componentDidMount = () =>{
        axios.get('https://corona.lmao.ninja/v2/countries/gh').then((res)=> {
            
            this.setState({
                corona: res.data
            })
        });
    }

    render() {
        return (
            <div>
                <div>
  <div className="header">
    <div>
      <p id="logo">P</p>
    </div>
    <div className="text">
      <p>PaSE Covid-19 App</p>
    </div>
  </div>
  <div className="dashboard">
     
    <div className="cases">
      <p>Cases <i className="fa fa-caret-up" /></p>
        <span >{this.state.corona.cases}</span>
    </div>
    <div className="cases">
      <p>Death <i className="fa fa-caret-up" /></p>
      <span >{this.state.corona.deaths}</span>
    </div>
    <div className="cases">
      <p>Active<i className="fa fa-caret-up" /></p>
      <span >{this.state.corona.active}</span>
    </div>
    <div className="cases">
      <p>Recovered <i className="fa fa-caret-down" /></p>
      <span >{this.state.corona.recovered}</span>
    </div>
  </div>
</div>

            </div>
        )
    }
}

export default Cards
