import React from 'react'
import styled from "styled-components";
import Header from './Header/Header';

const HomePage = () => {
    return (
     <Container>
         <Wrapper>
            <Header />
         </Wrapper>
     </Container>
    )
}

export default HomePage

const Container = styled.div``;
const Wrapper = styled.div``;
