import { Add, Remove } from "@material-ui/icons";
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from "../responsive";
const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}
`;
const ImageContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  width: 100px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  

  &:hover{
      background-color: #f8f4f4;
  }
`;
const Product = () => {
  return (
  <Container>
   <Navbar/>
   <Announcement/>
   <Wrapper>
       <ImageContainer>
           <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"/>
       </ImageContainer>
       <InfoContainer>
           <Title>Biva MoMotima</Title>
           <Desc>
Mobile Money Rwanda Ltd (MoMo Rwanda Ltd) has kicked off the year with the launch of a new campaign dubbed “Biva MoMotima”. The three-month long campaign consists of several exciting initiatives for MoMo customers and partners, celebrating the role Mobile Money plays in sharing love.

Since its inception in 2010, Mobile Money has evolved in the financial technology space in Rwanda and has transitioned from operating solely as a monetary sending and receiving channel to offering a myriad of digital financial solutions.

MTSetting “Biva MoMotima” campaign in motion, MoMo Rwanda Ltd is spreading love through a total donation of Twenty-Five Million Rwandan francs, that will go towards supporting community projects in all five Provinces in Rwanda, with a special focus on children affected by stunting.  As a first of many “from the heart” initiatives to come, MoMo Rwanda Ltd is spreading the love through this campaign to the most vulnerable.

Speaking at the launch of the “Biva MoMotima” campaign at Mobile Money Rwanda Ltd offices, Chantal Kagame, Mobile Money Rwanda Ltd Chief Executive Officer highlighted “In the busyness of everyday life, our customers have found unique ways to stay connected to their loved ones. We are pleased to see the role Mobile Money plays in maintaining connections during birthdays, weddings, among other special occasions or simply on regular days, whether through sending surprise gifts through MoMo or paying utility bills on *182# for someone else who is facing challenging times.  It is transactions such as these, that show MoMo is more than just a digital financial platform, it represents heart-felt gestures. That’s why during this campaign, we want to share the love with those who need it most.”

Over the years, Mobile Money Rwanda Ltd has introduced essential services and products such as payments (MoMoPay, Bill & Utility Payment, Taxes, Insurance, Transport, Bulk Payments), Bank services (push/pull, Mokash), local and international transfers, Open API to the public that made Rwandan lives a whole lot easier. This is reflected in the continuous exponential growth of MoMo services adoption on a year-on-year basis countrywide.
</Desc>
           <Price>$ 20</Price>

           <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
       </InfoContainer>
   </Wrapper>
   <Newsletter/>
   <Footer/>
  </Container>
  )
}

export default Product;
