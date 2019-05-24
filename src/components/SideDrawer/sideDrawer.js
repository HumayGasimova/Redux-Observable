/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './sideDrawer.scss';

/**
 * SelectPlayer component definition and export
 */
class SideDrawer extends Component {

    render(){
        return(
            <div 
                onClick={this.props.sideDrawerHandler}
                className={this.props.sideDrawerOpen === "Yes" ? "sideDrawerOpen" : this.props.sideDrawerOpen === "No" ? "sideDrawerClose" :null}>
            </div>
        );
    }
}

export default SideDrawer;