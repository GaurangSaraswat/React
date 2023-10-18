import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Section extends Component {
    render(){
        return (
            <div className='section' style={{marginLeft:'320px', padding: '10px'}}>
                <div className='row'>
                    <div className='row align-items-center'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className='card'>
                                            <div className='card-body'>
                                            <p>Earning</p>
                                            <h4>$198k</h4>
                                            <p> <span style={{color:'green'}}>&#8593; 37.8%</span>this month</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='col-3'>
                                    <div className='card'>
                                            <div className='card-body'>
                                            <p>Orders</p>
                                            <h4>$2.4k</h4>
                                            <p> <span style={{color:'red'}}>&#8595; 2%</span>this month</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                    <div className='card'>
                                            <div className='card-body'>
                                            <p>Balance</p>
                                            <h4>$2.4k</h4>
                                            <p> <span style={{color:'red'}}>&#8595; 2%</span>this month</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-3'>
                                    <div className='card'>
                                            <div className='card-body'>
                                            <p>Total Sales</p>
                                            <h4>$89k</h4>
                                            <p> <span style={{color:'green'}}>&#8593; 11%</span>this week</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>       
                </div>
            </div>
        );
    }    
}
export default Section