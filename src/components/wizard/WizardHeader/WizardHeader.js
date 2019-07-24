import React, { Component, Fragment } from 'react';

class WizardHeader extends Component {

    render() {
        
        return (
            <Fragment>
                <div className="wizard-header">
                    <div className="item-wrapper">
                    <div className="header-item">
                        <span>1</span>
                        <p>{this.props.bookInfo.genreName}</p>
                    </div>
                    </div>
                    
                    {this.props.step >= 2 ?
                    <div className="item-wrapper">
                        <div className="header-item">
                            <span>2</span>
                            <p>{this.props.bookInfo.subgenreName}</p>
                        </div>
                        </div>
                        : null
                    }
                    {this.props.step >= 3 && this.props.bookInfo.addNewSubgenre ?
                    <div className="item-wrapper">
                        <div className="header-item">
                            <span>3</span>
                            <p>Add a new Subgenre</p>
                        </div>
                        </div>
                        : null
                    }
                    {this.props.step >= 4 ?
                    <div className="item-wrapper">
                        <div className="header-item last-step">
                            <span>4</span>
                            <p>Information</p>
                        </div>
                        </div>
                        : null
                    }
                </div>

            </Fragment>
        )
    }
}

export default WizardHeader;