import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';

const RandomBlockImage = styled.img`
    width: 100%;
`;

const ErrorMessage = () => {
    return (
        <>
            <RandomBlockImage src={img} alt="error"></RandomBlockImage>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;