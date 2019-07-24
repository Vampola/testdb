import React, { Component } from 'react';

class GenreListItem extends Component {

    render() {
        return (
            <li 
                onClick={this.props.click} 
                className={this.props.className} 
                key={this.props.genre.id}>{this.props.genre.name}
            </li>           
        )
    }
}

export default GenreListItem;