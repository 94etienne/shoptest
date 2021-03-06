import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, YouTube } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;

`;
const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right: 20px;
`;

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`;
const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
  <Container>
   <Left>
       <Logo>Akeza Solution Ltd.</Logo>
       <Desc>
           Mobile Money Rwanda Ltd (MoMo Rwanda Ltd) has kicked off the year with the launch of a new campaign dubbed “Biva MoMotima”. The three-month long ampaign consists of several exciting initiatives for MoMo customers and partners, celebrating the role Mobile Money plays in sharing love. Since its inception in 2010 Mobile Money has evolved in the financial technology space in Rwanda and has transitioned from operating solely as a monetary sending and receiving channel to offering a myriad of digital financial solutions.
       </Desc>
       <SocialContainer>
       <a href="https://www.facebook.com/profile.php?id=100004721655186">
           <SocialIcon color="3B5999">
              <Facebook/> 
           </SocialIcon>
           </a>
           <SocialIcon color="E4405F">
               <Instagram/>
           </SocialIcon>
           <SocialIcon color="55ACEE">
               <Twitter/>
           </SocialIcon>
           <SocialIcon color="E60023">
               <Pinterest/>
           </SocialIcon>
           <a href="https://www.youtube.com/results?search_query=subizwa94+TV">
           <SocialIcon color="E60023">
               
               <YouTube/>
           </SocialIcon>
           </a>
       </SocialContainer>
   </Left>
   <Center>
   <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>

   </Center>
   <Right>

   <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> KN 7 KIGALI
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +250 783 716 761
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> 19etienne@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

   </Right>
  </Container>
  )
}

export default Footer;
