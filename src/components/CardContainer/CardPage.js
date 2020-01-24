import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";


const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
background-color: #3F3F37;

`

const StyledHeading = styled.div`
padding: 3% 0;
font-size: 1.9rem;
text-align: center;
`

const Title = styled.h2`
    color: white;

    &:hover {
        color: lightgrey;
    }
`

const StyledImage = styled.img`
border-radius: 5px;
height: 50rem;

`

const Description = styled.p`
padding: 3%;
font-size: 1.7rem;
margin: auto;
`

const InfoContainer = styled.div`
display: flex;
flex-flow: column;
`


const CardPage = (props) => {
    return (
        <StyledDiv>
            <StyledHeading>
                <Title>{props.title}</Title>
                <h3>{props.date}</h3>
                <Button color="primary" onClick={props.day} className="pictureButton">Click to change image</Button>
            </StyledHeading>
            <InfoContainer>
                <StyledImage src={props.url} alt="nasa" className='image' />
                <Description>{props.description}</Description>
            </InfoContainer>
        </StyledDiv>
    )
}

export default CardPage;