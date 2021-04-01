import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol ,MDBFooter} from "mdbreact";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import NewS from '../Componants/newS'
import PinterestIcon from '@material-ui/icons/Pinterest';
const FooterPage = () => {
    return (
      <React.Fragment>
      <NewS/>
      <MDBFooter color="elegant-color" className="font-small pt-4">
        <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="4" className="text-center">
        <h5 className="font-weight-bolder">Our office Location</h5>
              <p className="font-weight-bolder">
               169 Florida Ave,L.A City
              </p>
        </MDBCol>
        <MDBCol md="4" className="text-center">
        <h5 className="font-weight-bolder">Please call us:</h5>
              <p className="font-weight-bolder">
              (+84) 1234 686 9669
              </p>
        </MDBCol>
        <MDBCol md="4" className="text-center">
            <a className="mr-3" href="#!"><FacebookIcon/></a>
            <a className="mr-3" href="#!"><TwitterIcon/></a>
            <a className="mr-3" href="#!"><PinterestIcon/></a>
        </MDBCol>
        </MDBRow>
        <br/>
          <MDBRow>
            <MDBCol md="3" className="text-center">
              <h5 className="font-weight-bold">Our Stores</h5>
              <ul>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">501 floor,Nguyen Ngoc vu,Cau glay,Ha Noi</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3" className="text-center" > 
            <h5 className="font-weight-bold">My Account</h5>
              <ul>
                <li className="list-unstyled m-1">
                  <a href="#!">My cart</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Check Out</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Wishlist</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">terms and policy</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">your Account</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3"className="text-center" >
            <h5 className="font-weight-bold">Information</h5>
              <ul>
                <li className="list-unstyled m-1">
                  <a href="#!">Shipping & return</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Giftcards</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Track my order</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Terms & policy</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">FAQs</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3"className="teext">
            <h5 className="font-weight-bold">How to Buy</ h5>
              <ul>
                <li className="list-unstyled m-1">
                  <a href="#!">Making Payments</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Delivering Options</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Buyer protection</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">New User Guide</a>
                </li>
                <li className="list-unstyled m-1">
                  <a href="#!">Partner ship</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-left py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.facebook.com/TareqSenpai"> Tareq Sabra </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      </React.Fragment>
    );
  }
  
  export default FooterPage;