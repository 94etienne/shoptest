import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from "../responsive";
// npm i styled-components  check his tutorial for more

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
// width: 33.3%;
flex: 1;
display: flex;
align-items: center;

`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}

`
const Center = styled.div`
// width: 33.3%;
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
// width: 33.3%;
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

// npm i styled-components  check his tutorial for more

const Navbar = () => {
  return (
  <Container>
      <Wrapper>
      <Left>
          <Language>EN</Language>
          
          <SearchContainer>
              {/* from styled components */}
           <Input placeholder='Search'/>
           {/* material ui */}
           <Search style={{color: "gray", fontSize:16}}/>  
           
          </SearchContainer>
          
      </Left>
      <Center>
          <Logo>Akeza Solution Ltd.</Logo>
      </Center>
      <Right>
      <Link to="/register" style={{textDecoration: "none"}}>
          <MenuItem>
          Register
          </MenuItem>
          </Link>
          <Link to="/login" style={{textDecoration: "none"}}>
          <MenuItem>
          Sign In
          </MenuItem>
          </Link>
          <MenuItem>
          <Link to="/cart" style={{textDecoration: "none"}}>
          <Badge badgeContent={24} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
      </Right>
      </Wrapper>
      
  </Container>
  )
};

export default Navbar;
