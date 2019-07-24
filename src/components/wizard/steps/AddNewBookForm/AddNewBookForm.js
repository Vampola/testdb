import React, { Component, Fragment } from 'react';

class AddNewBookForm extends Component {

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
                <h2>Add New Book</h2>

                <div className="book-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Book title</label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Book title"
                                onChange={(event) => this.props.inputChangedHandler(event)}
                                value={this.props.bookForm.title} />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <select
                                name="author"
                                value={this.props.bookForm.author}
                                onChange={(event) => this.props.inputChangedHandler(event)}>
                                {/* onChange={(e) => { this.setState({ author: e.target.value }) }}> */}
                                <option value='Author' disabled>Author</option>
                                {
                                    this.props.bookForm.authorList.map((author, key) => {
                                        return <option key={key} value={author}>{author}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ISBN">ISBN</label>
                            <input
                            name="ISBN" 
                            type="text" 
                            placeholder="ISBN" 
                            onChange={(event) => this.props.inputChangedHandler(event)}/>
                        </div>
                        <div className="form-group">
                            <label>Publisher</label>
                            <select
                                name="publisher"
                                value={this.props.bookForm.publisher}
                                onChange={(event) => this.props.inputChangedHandler(event)}>
                                <option value='Publisher' disabled>Publisher</option>
                                {
                                    this.props.bookForm.publisherList.map((publisher, key) => {
                                        return <option key={key} value={publisher}>{publisher}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group date-form">
                            <label htmlFor="date">Date Published</label>
                            <input 
                            type="date" 
                            name="date" 
                            onChange={(event) => this.props.inputChangedHandler(event)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pageNumber">Number of pages</label>
                            <input
                            name="pageNumber" 
                            type="number" 
                            onChange={(event) => this.props.inputChangedHandler(event)}/>
                        </div>
                        <div className="form-group">
                            <label>Format</label>
                            <select className="book-format"
                                name="format"
                                value={this.props.bookForm.format}
                                onChange={(event) => this.props.inputChangedHandler(event)}>
                                <option value='Format' disabled>Format</option>
                                {
                                    this.props.bookForm.formatList.map((format, key) => {
                                        return <option key={key} value={format}>{format}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group-container">
                            <div className="form-group">
                                <label htmlFor="edition">Edition</label>
                                <input 
                                type="text" 
                                name="edition" 
                                placeholder="Edition" 
                                onChange={(event) => this.props.inputChangedHandler(event)}/>
                            </div>
                            <div className="form-group">
                                <label>Edition Language</label>
                                <select
                                    name="language"
                                    value={this.props.bookForm.language}
                                    onChange={(event) => this.props.inputChangedHandler(event)}>
                                    <option value='Edition Language' disabled>Edition Language</option>
                                    {
                                        this.props.bookForm.languageList.map((language, key) => {
                                            return <option key={key} value={language}>{language}</option>
                                        })
                                    }
                                </select>
                            </div>

                        </div>
                        {this.props.bookForm.isDescriptionRequired ?
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                            name="description" 
                            rows={10} 
                            onChange={(event) => this.props.inputChangedHandler(event)}/>
                        </div> : null
                        }

                    </form>
                </div>
                <div className="navigation">
                    <button className="btn btn-nav" onClick={this.handlePrev}>Back</button>
                    <button className="btn btn-nav" onClick={this.props.handleSubmit} >Add</button>
                </div>
            </Fragment>
        )
    }
}

export default AddNewBookForm;