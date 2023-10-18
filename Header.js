import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    render(){
        return (
            
                <div className='header' id='header' >
                    <h1> Hello Shahrukh</h1>
                        <i class="fas fa-hand-wave"  style={{fontSize: '2rem', color: 'yellow', marginTop:'2px'}}></i>
                    
                    <div className='search-bar'>
                       <input type='text' placeholder='Search'/>
                       <i className='fa fa-search' style={{marginLeft: '-20px'}}></i>
                    </div>
                </div>
               
                    
                
            
        );
    }    
}
export default Header