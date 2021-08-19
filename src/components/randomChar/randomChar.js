import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const RandomCharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomCharTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const RandomCharTerm = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {
    
    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        this.gotService.getRandomCharacter()
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        console.log('render')
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomCharBlock className="rounded">
                {errorMessage}
                {spinner}
                {content}
            </RandomCharBlock>
        );
    }
}


const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <RandomCharTitle>Random Character: {name}</RandomCharTitle>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm>Gender </RandomCharTerm>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm>Born </RandomCharTerm>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm>Died </RandomCharTerm>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomCharTerm>Culture </RandomCharTerm>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
} 