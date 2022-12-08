import React from "react";
import { MailOutline, Phone, Room , Send} from "@material-ui/icons";
import {FaInstagram} from "react-icons/fa";
import styled from "styled-components";
import { tab } from "../../responsiv";

const Container = styled.div`
  display: flex;
  padding: 10px 20px 20px 20px;
  align-items: center;
  justify-content: space-around;
  background-color: mintcream;
`;
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 20px 0px 20px;

`;
const Sharecon = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 20px;
  font-weight:600;
`;
const ContFooter = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 0px 20px;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 10px;
  ${tab({ flexDirection: "column" })}
`;
const Left = styled.div`
width:80%;
  flex-grow: 1;
  padding: 20px;
`;
const Titl = styled.h1`
  margin: 0px 0px 10px 5px;
  letter-spacing:3px;
  font-size:30px;
  font-weight:800;
`;

const List = styled.p`
  display: flex;
  align-item:center;
`;

const Center = styled.div`
width:80%
  flex-grow: 1;
padding:20px

`;
const Right = styled.div`
width:60%;
  flex-grow: 1;
  padding: 20px;
 
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Title = styled.h5`
  font-size: 20px;
  margin-bottom:20px;
`;
const Description = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 0px 20px;
    background: none;
    color: #fff;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
 width:30px;
 height:30px;
 border-radius:50%;
 border:1px solid lightgray;
 margin-top:10px;
 color:white;
 background-color:#ff5328;
`;
const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ContFooter>
            <Left>
              <Titl>TRANSPORT</Titl>
              <List>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse illo voluptas
                 magni magnam ut est et a officiis nam sint sit rerum eius, minima, pariatur modi corrupti
                 exercitationem fuga aliquam.
              </List>
            </Left>
            <Center>
              <Title>Address</Title>
              <ContactItem>
                <Room style={{ marginRight: "10px" }} />
                Lodha Complex, Mira Road East
              </ContactItem>
              <ContactItem>
                <Phone style={{ marginRight: "10px" }} />
                (000) 123-4567
              </ContactItem>
              <ContactItem>
                <MailOutline style={{ marginRight: "10px" }} />
                support@huntdigitalmedia.com
              </ContactItem>
            </Center>
            <Right>
            <Title>Newsletter</Title>
      <InputContainer>
        <Input placeholder="Enter Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
      <Description>
        Follow Us:
      </Description>
      <Icon><FaInstagram/></Icon>
            </Right>
          </ContFooter>
          <hr style={{width:"100%",height:"2px"}}/>
          <Sharecon>
          Copyright © 2022. All Rights Reserved By<span style={{color:"rgb(255, 102, 153)",marginLeft:"3px"}}>Huntdigitalmedia.com</span>
          </Sharecon>
         
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;
