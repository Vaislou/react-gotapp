import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';


export default class App extends Component {

    state = {
        toggleChar: true,
        error: false,
    }

    showRandomChar = () => {
        this.setState((state) => {
            return {
                toggleChar: !state.toggleChar
            }
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        const char = this.state.toggleChar ? <RandomChar/> : null;
        const btnText = this.state.toggleChar ? 'Hide' : 'Show';

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}} >
                            {char}
                        </Col>
                        <Col lg={{size: 5, offset: 0}} className="mx-auto">
                            <button 
                                type="button" 
                                className="btn btn-primary mb-5 mt-5"
                                onClick={this.showRandomChar}
                                >
                                    {btnText} Random Character
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
};

