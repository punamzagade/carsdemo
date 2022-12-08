import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
// import Footer from "../components/Footer";
import { mobile, tablet } from "./responsiv";
import { cars } from "./data";
import Header from "./components/nav/Header";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 10% 5px 5px 5px;
  padding: 20px;
  background-color:#f3f5fb;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(20, 0, 0.75);
`;
const Imagec = styled.div`
  flex: 1;
  
`;
const Img = styled.img`
 width: 100%;
 height: 80vh;
 flex-grow:1;
  border-radius: 20%;
  padding: 20px;
  object-fit: cover;
  ${tablet({height:"50vh"})}
`;
const Wrapper = styled.div`
  flex: 1;
`;

const Wrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  margin: 20px 40px 0px 40px;
${tablet({margin:"20px 10px 0px 10px"})}
${mobile({margin:"20px 0px 0px 0px"})}
`;

const Menu = styled.ul`
list-style: none;
display: flex;
`;
const Icons = styled.li`
margin-left:10px ;
font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  cursor: pointer;
    &:hover{
      transform: scale(1.5);
    }

${tablet({marginLeft:"5px"})}
`;

const Title = styled.h2`
flex: 1;
  font-weight: 600;
  letter-spacing:2px;
  ${tablet({fontSize:"inherit"})}
  ${mobile({fontSize:"smaller",fontWeight: "400"})}
`;
const Desc = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 30px;
  padding: 20px;
  font-size:20px;
  background-color: antiquewhite;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(20, 0, 0.75);

`;

const Article = () => {
  const location = useLocation();
const path = location.pathname.split("/")[2];

const item = cars.find((a)=>a.id.toString()===path);
  console.log (location);
 
  return (
    <>
    <Header/>
      <Container>
        <Imagec>
          <Img src={item.img}  />
        </Imagec>
        <Wrapper>
          <Wrapp>
          <Title>{item.title}</Title>
          
            <Menu>
              <Icons><FaInstagram/></Icons>
            <Icons><FaFacebook/></Icons>
            <Icons><FaLinkedin/></Icons>
             <Icons><FaTwitter/></Icons>
            <Icons><FaWhatsapp/></Icons>
            </Menu>
          </Wrapp>
          <Desc>
            {item.Ldesc}
          </Desc>
        </Wrapper>
      </Container>
    </>
  );
};

export default Article;
