import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';

const RandomBlockImage = styled.img`
    width: 100%;
`;

const ErrorMessageText = styled.span`
    color: #FFFFFF;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
`;

const ErrorMessage = () => {
    return (
        <>
            <RandomBlockImage src={img} alt="error"></RandomBlockImage>
            <ErrorMessageText>Something goes wrong</ErrorMessageText>
        </>
    )
}

export default ErrorMessage;