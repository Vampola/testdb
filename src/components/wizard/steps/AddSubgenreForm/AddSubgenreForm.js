import React, { Component, Fragment } from 'react';

class AddSubgenreForm extends Component {

    handleNext = e => {
        e.preventDefault();
        this.props.handleNext();
    }
    handlePrev = e => {
        e.preventDefault();
        this.props.handlePrev();
    }

    render() {
       
        return (
            <Fragment>
                <h2>Create new Subgenre with a name : {this.props.bookInfo.subgenreName}</h2>
                <div className="form">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="subgenreName"                                                        
                            onChange={(event) => this.props.handleSubgenreInput(event)} 
                            value={this.props.bookInfo.subgenreName} />
                    </div>

                    <div className="form-group">
                        <label className="container">Add description for this Subgenre
                            <input
                            name="isDescriptionRequired" 
                            type="checkbox"
                            checked={this.props.bookForm.isDescriptionRequired}
                            onChange={this.props.handleCheckbox}/>
                                <span className="checkmark"></span>
                        </label>
                    </div>
                    </div>

                    <div className="navigation">
                        <button className="btn btn-nav" onClick={this.handlePrev}>Back</button>
                        <button
                            className="btn btn-nav"
                            onClick={this.props.handleAddNewSubgenreNext}
                            disabled={!this.props.bookInfo.subgenreName}
                        >Next</button>
                    </div>

            </Fragment>
                )
            }
        }
        
export default AddSubgenreForm;