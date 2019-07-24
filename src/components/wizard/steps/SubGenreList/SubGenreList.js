import React, { Component, Fragment } from 'react';
import SubGenreListItem from './SubGenreListItem/SubGenreListItem'

class SubGenreList extends Component {

    handleNext = e => {
        e.preventDefault();
        this.props.handleNext();
    }
    handlePrev = e => {
        e.preventDefault();
        this.props.handlePrev();
    }

    render() {
        const { data } = this.props;

        return (
            <Fragment>
                <h2>Select Subgenre or create new</h2>
                <ul className="genres">
                    {data.library.genres.filter(genre => genre.id === this.props.bookInfo.selectedGenreId)
                        .map(genre => (genre.subgenres
                            .map((subgenre, key) => {
                                return <SubGenreListItem
                                    subgenre={subgenre}
                                    key={key}
                                    className={this.props.bookInfo.selectedSubGenreId === subgenre.id ? 'active' : ''}
                                    click={() => this.props.toggleButtonClass(key, subgenre.id, subgenre.name, subgenre.isDescriptionRequired )}
                                />
                            })))}
                    <li
                        onClick={this.props.handleAddNewSubgenre}
                        className={this.props.bookInfo.addNewSubgenre ? 'active' : null}>Add New</li>
                </ul>
                <div className="navigation">
                    <button className="btn btn-nav" onClick={this.handlePrev}>Back</button>
                    <button
                        className="btn btn-nav"
                        onClick={this.handleNext}
                        disabled={!this.props.bookInfo.selectedSubGenreId && !this.props.bookInfo.addNewSubgenre}>Next</button>
                </div>

            </Fragment>
        )
    }
}

export default SubGenreList;