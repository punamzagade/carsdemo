import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cars } from "../../data";
import "../../index.css";


const Container = styled.div`
  display: flex;
  background-color:#f3f5fb;
  flex-direction:column;
  
`;
const Cardcont=styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
flex-wrap: wrap;
margin:2% 30%;
`;
const Title=styled.h2`
font-size:40px;
font-weigth:700;
margin-bottom:40px;
`;
const Desct=styled.p`
 text-align:center;
 font-size:16px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 30px;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 20px;
  padding: 10px;
  background-color: ${(props) => props.bg};
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(20, 0, 0.75);
`;

const Cardcon = styled.div`
  display: flex;
    align-items: center;
    justify-content: space-between;
  margin: 10px;
`;
const Img = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
 
`;
const Desc = styled.p`
  text-align: left;
`;
const Line = styled.hr`
width:100%;
`;
const Cardconb=styled.div`
display:flex;
justify-content:space-between;
`;
const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 15px;
  outline: none;
  border: none;
  text-decoration: none;
  background-color:#ff5328;
  color:white;
`;
const Cardconv = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
`;
const Buttonv = styled.button`
  padding: 16px 25px;
  font-size: 16px;
  border-radius: 50px;
  outline: none;
  border: none;
  text-decoration: none;
  background-color:#ff5328;
  color:white;
  margin-bottom:50px;
`;


const Middl = () => {
  return (
    <div>
      <Container>
        <Wrapper>
        <Cardcont>
            <Title>Latest Cars</Title>
            <Desct>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit eligendi, sapiente libero dolores.</Desct>
        </Cardcont>
          {cars.map((item) => (
            <Link className={"list"} key={item.id} to={`/article/${item.id}`}>
              <Card>
                <Cardcon>
                  <Img src={item.img} />
                </Cardcon>
                <Cardcon>
                  <Desc>{item.desc}</Desc>
                </Cardcon>
                <Cardcon>
                  <Line/>
                </Cardcon>
                <Cardcon>
                 <Cardconb style={{color:"#ff5328"}}>{item.rup}</Cardconb>
                 <Cardconb>
                 <Button>{item.butt}</Button>
                 </Cardconb>
                </Cardcon>
              </Card>
            </Link>
          ))}
        </Wrapper>
        <Cardconv>
                 <Buttonv>View More</Buttonv>
                 </Cardconv>
      </Container>
     
    </div>
  )
}

export default Middl;

