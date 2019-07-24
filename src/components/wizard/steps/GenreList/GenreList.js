import React, { Component, Fragment } from 'react';
import GenreListItem from './GenreListItem/GenreListItem'

class GenreList extends Component {

    handleNext = e => {
        e.preventDefault();
        this.props.handleNext();
    }    

    render() {
        const { data } = this.props;

        return (
            <Fragment>
                <h2>Select Genre</h2>                    
                        <ul className="genres">
                        {data.library.genres.map((genre, key) => {
                            return <GenreListItem 
                            genre={genre} 
                            key={key}
                            className={this.props.bookInfo.selectedGenreId === genre.id ? 'active' : ''} 
                            click={() => this.props.toggleButtonClass(key, genre.id, genre.name)}
                            />
                        })}
                        </ul>
                 <div className="navigation">
                 <button className="btn btn-nav" onClick={this.handleNext} disabled={!this.props.bookInfo.selectedGenreId}>Next</button>
                </div>   
                
            </Fragment>            
        )
    }
}

export default GenreList;