import React from 'react';
import imgLog from '../images/badge-header.svg';
import '../components/styles/Badge.css';
import 'bootstrap/dist/css/bootstrap.css';
import Gravatar from './gravatar';

class Badge extends  React.Component {
    render() {
        return ( 
        <div className="Badge">

            <div className="Badge__header">
                <img src={imgLog} alt="imagen top nave"/>
            </div>

            <div className="Badge__section-name">
                <Gravatar className="Badge__avatar"
                email={this.props.email} 
                alt=" imagen profile"/>
                <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>Instagram @{this.props.instagram} </div>
            </div>

            <div className="Badge__footer">#By_Julian_Rivera</div>
        </div>

        );
    }
}

export default Badge;
