import React, { Component, Fragment } from 'react';
import './Wizard.css';
import jsonData from '../../dummy.json';
import GenreList from './steps/GenreList/GenreList'
import SubGenreList from './steps/SubGenreList/SubGenreList'
import AddSubgenreForm from './steps/AddSubgenreForm/AddSubgenreForm'
import AddNewBookForm from './steps/AddNewBookForm/AddNewBookForm'
import WizardHeader from './WizardHeader/WizardHeader'

class Wizard extends Component {
  state = {
    step: 1,
    bookInfo: {
      selectedGenre: '',
      selectedGenreId: '',
      selectedSubGenre: '',
      selectedSubGenreId: '',
      subgenreName: '',
      genreName: '',
      addNewSubgenre: false,
    },
    bookForm: {
      author: 'Author',
      authorList: ['Author 1', 'Author 2', 'Author 3'],
      publisher: 'Publisher',
      publisherList: ['Publisher 1', 'Publisher 2', 'Publisher 3'],
      format: 'Format',
      formatList: ['Format 1', 'Format 2', 'Format 3'],
      language: 'Edition Language',
      languageList: ['Language 1', 'Language 2', 'Language 3'],
      title: '',
      ISBN: '',
      date: '',
      pageNumber: 0,
      edition: 'Edition',
      description: '',
      isDescriptionRequired: false

    },

    library: jsonData,
    subGenreName: ''
  }
  //Proceed to next step
  handleNext = () => {
    const { step } = this.state;
    const { addNewSubgenre } = this.state.bookInfo;

    if (!addNewSubgenre && step === 2) {
      this.setState({
        step: 4
      })
    } else {
      this.setState({
        step: step + 1
      })
    }
  }

  //Back to prev step
  handlePrev = () => {
    const { step } = this.state;
    const { addNewSubgenre } = this.state.bookInfo;
    if (!addNewSubgenre && step === 4) {
      this.setState({
        step: 2
      })
    } else {
      this.setState({
        step: step - 1
      })
    }
  }
  handleAddNewSubgenre = () => {
    const bookInfo = { ...this.state.bookInfo };
    bookInfo.selectedSubGenre = '';
    bookInfo.selectedSubGenreId = '';
    bookInfo.addNewSubgenre = true;
    bookInfo.subgenreName = 'New Subgenre'
    this.setState({
      bookInfo: bookInfo
    })
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  toggleButtonClass = (key, id, name) => {
    const bookInfo = { ...this.state.bookInfo };
    bookInfo.selectedGenre = key;
    bookInfo.selectedGenreId = id;
    bookInfo.genreName = name;
    this.setState({
      bookInfo: bookInfo
    })
  };
  toggleSubButtonClass = (key, id, name, isDescriptionRequired) => {
    const bookInfo = { ...this.state.bookInfo };
    const bookForm = { ...this.state.bookForm };

    if (bookInfo.addNewSubgenre || id) {
      bookInfo.selectedSubGenre = key;
      bookInfo.selectedSubGenreId = id;
      bookInfo.addNewSubgenre = false;
      bookInfo.subgenreName = name;
      bookForm.isDescriptionRequired = isDescriptionRequired;
      this.setState({
        bookInfo: bookInfo,
        bookForm: bookForm,
      })
    }
  }

  handleAddNewSubgenreNext = (event) => {
    const { step } = this.state;
    const bookForm = { ...this.state.bookForm };
    console.log(bookForm.isDescriptionRequired);

    if (!bookForm.isDescriptionRequired) {
      bookForm.isDescriptionRequired = false
      this.setState({
        bookForm: bookForm,
        step: step + 1
      })
    } else {
      bookForm.isDescriptionRequired = true
      this.setState({
        step: step + 1
      })
    }
  }
  // Add a new subgenre page (checkbox)
  handleCheckbox = (event) => {
    const bookForm = { ...this.state.bookForm };
    const checked = event.target.checked;
    bookForm.isDescriptionRequired = checked;
    this.setState({
      bookForm: bookForm
    })
  }
  // Add a new subgenre page (input)
  handleSubgenreInput = (event) => {
    const bookInfo = {
      ...this.state.bookInfo
    };
    bookInfo[event.target.name] = event.target.value;

    this.setState({
      bookInfo: bookInfo
    });  
    
  }

  inputChangedHandler = (event) => {
    const updatedBookForm = {
      ...this.state.bookForm
    }

    updatedBookForm[event.target.name] = event.target.value;

    this.setState({
      bookForm: updatedBookForm
    })

  }

  handleSubmit = (event) => {
    // const collection = {
    //   ...this.state.bookForm
    // }
    //TODO - just a test fetch
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    this.setState({
      step: 5
    })
  }

  render() {
    const { step } = this.state;
    const { library } = this.state;
    const data = { library };

    switch (step) {
      case 1:
        return (
          <Fragment>
            <WizardHeader
              step={this.state.step}
              bookInfo={this.state.bookInfo}
            />
            <GenreList
              handleNext={this.handleNext}
              toggleButtonClass={this.toggleButtonClass}
              bookInfo={this.state.bookInfo}
              data={data}
            />
          </Fragment>
        )
      case 2:
        return (
          <Fragment>
            <WizardHeader
              step={this.state.step}
              bookInfo={this.state.bookInfo}
            />
            <SubGenreList
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              handleAddNewSubgenre={this.handleAddNewSubgenre}
              toggleButtonClass={this.toggleSubButtonClass}
              bookInfo={this.state.bookInfo}
              data={data}
            />
          </Fragment>
        )
      case 3:
        return (
          <Fragment>
            <WizardHeader
              step={this.state.step}
              bookInfo={this.state.bookInfo}
            />
            <AddSubgenreForm
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              handleChange={this.handleChange}
              subGenreName={this.state.subGenreName}
              handleSubgenreInput={this.handleSubgenreInput}
              handleAddNewSubgenreNext={this.handleAddNewSubgenreNext}
              handleCheckbox={this.handleCheckbox}
              bookForm={this.state.bookForm}
              bookInfo={this.state.bookInfo}
              data={data}
            />
          </Fragment>
        )
      case 4:
        return (
          <Fragment>
            <WizardHeader
              step={this.state.step}
              bookInfo={this.state.bookInfo}
            />
            <AddNewBookForm
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              handleSubmit={this.handleSubmit}
              bookForm={this.state.bookForm}
              inputChangedHandler={this.inputChangedHandler}
              data={data}
            />
          </Fragment>
        )
      case 5:
        return (
          <p>ggggg</p>
        )
      default: {
        return;
      }

    }


  }

}

export default Wizard;

    // const genres = this.state.library.genres.map(genre => <li key={genre.id}>{genre.name}</li>)
    // const subgenres = this.state.library.genres.map( genre => ( 
    //   genre.subgenres.map( subgenre => (
    //     // if(this.state.book === subgenres.id)
    //     <li key={subgenre.id}>{subgenre.name}</li>
    //   ))
    //  ))
    // const experiment = this.state.library.genres.filter( genre =>genre.id === this.state.book).map( genre => ( genre.subgenres.map( u => (
    //   <li key={u.id}>{u.name}</li>
    // )) ))
    // const experiment = this.state.library.genres.map( genre => ( genre.subgenres.filter( u =>u.id === this.state.book).map( u => (
    //   <li key={u.id}>{u.name}</li>
    // )) ))
    // <li key={subgenre.id}>{subgenre.name}</li>