import React from 'react'
import style from './Footer.module.css'
import location from '../../Images/Footer/location.svg'
import phone from '../../Images/Footer/call-calling.svg'
import email from '../../Images/Footer/sms-edit.svg'
import user from '../../Images/Footer/user.svg'
import facebook from '../../Images/Footer/Facebook.svg'
import twitter from '../../Images/Footer/twitter.svg'
import insta from '../../Images/Footer/insta.svg'
import youtube from '../../Images/Footer/Youtube.svg'
import paypal from '../../Images/Footer/paypal.svg'
import americanexpress from '../../Images/Footer/american express.svg'
import visa from '../../Images/Footer/visa.svg'
import mastercard from '../../Images/Footer/master card.svg'


const Footer = () => {

  const RightIcon = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.60999C8.08961 4.31999 8.08961 3.83999 8.37961 3.54999C8.66961 3.25999 9.14961 3.25999 9.43961 3.54999L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z" fill="#F9F9F9" />
    </svg>;
  };

  const GotoTopIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M20.7069 18.68C20.4535 18.68 20.2002 18.5867 20.0002 18.3867L16.0002 14.3867L12.0002 18.3867C11.6135 18.7733 10.9735 18.7733 10.5869 18.3867C10.2002 18 10.2002 17.36 10.5869 16.9733L15.2935 12.2667C15.6802 11.88 16.3202 11.88 16.7069 12.2667L21.4135 16.9733C21.8002 17.36 21.8002 18 21.4135 18.3867C21.2135 18.5867 20.9602 18.68 20.7069 18.68Z" fill="#2D2D2D" />
    </svg>;

  };


  return (
    <footer>





      <div className={style.main}>
        <div className={style.upper}>
          <div style={{ width: '95px', height: "147px", marginRight: '113px' }} className={style.footerSections}>
            <p className={style.footerTitle}>Company</p>
            <p>about us</p>
            <p>blog</p>
            <p>returns</p>
            <p>order status</p>
          </div>

          <div style={{ width: '109px', height: "115px", marginRight: '103px' }} className={style.footerSections}>
            <p className={style.footerTitle}>Info</p>
            <p>How it works?</p>
            <p>our promises</p>
            <p>FAQ</p>
          </div>

          <div style={{ width: '278px', height: "120px", marginRight: '140px' }} className={style.footerSections}>
            <p className={style.footerTitle}>Contact us</p>
            <div className={style.contacts}>
              <img src={location} alt="location"></img>
              <p>123 Main Street, Anytown,USA</p>
            </div>

            <div className={style.contacts}>
              <img src={phone} alt="phone"></img>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className={style.contacts}>
              <img src={email} alt="email"></img>
              <p>TechHeimSupport@gmail.com</p>
            </div>


          </div>

          <div className={style.news_and_update}>
            <p className={style.news_and_update_text}>&nbsp;Sign up for News and updates</p>


            <div className={style.news_and_update_inputBox}>
              <img className={style.news_and_update_inputimg} src={user} alt="user" />
              <input placeholder='E-mail Address' className={style.news_and_update_input} />

              <div className={style.righticon}>
                <RightIcon />
              </div>

            </div>

            <div className={style.companyMedias}>
              <img  src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img  style={{ width: '2vw', height: '2vw' }} src={insta} alt="instagram" />
              <img src={youtube} alt="youtube" />
            </div>

          </div>

        </div>

        <div className={style.gotoTopIconBox}>
          <div className={style.gotoTopIcon}>
            <GotoTopIcon />
          </div>
        </div>

        <div className={style.paymentService}>
              <img src={paypal} alt="paypal" />
              <img src={americanexpress} alt="american express" />
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="master card" />
            </div>
      </div>




      <div className={style.bottom}>
        
        <p style={{marginRight:'0.3125vw'}}>©</p>
        <p style={{marginRight:'41.8vw'}}>2023 Tech Heim.</p>
        <p style={{marginRight:'3.33vw'}}>cookie settings</p>
        <p style={{marginRight:'3.33vw'}}>Privacy Policy</p>
        <p style={{marginRight:'3.33vw'}}>Terms and Conditions</p>
        <p>Imprint</p>

      </div>

    </footer>
  )
}

export default Footer