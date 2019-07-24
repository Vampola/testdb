import React, { Component } from 'react';

class SubGenreListItem extends Component {

    render() {
        return (
            <li 
                onClick={this.props.click} 
                className={this.props.className} 
                key={this.props.subgenre.id}>{this.props.subgenre.name}
            </li>           
        )
    }
}

export default SubGenreListItem;