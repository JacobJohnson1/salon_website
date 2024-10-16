import React from 'react';
import Map from "./Map";

export default function Footer() {
  return (
    <div  className='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <section >
        <div className='socialIconsContainer'>
            <a className='socialIcons' href='https://www.facebook.com/p/Tribe-Salon-100063581830742/' target='blank'>
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a className='socialIcons' href='https://www.instagram.com/tribe_salon/' target='blank'>
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a className='socialIcons' href='https://www.google.com/maps/place/Tribe+Salon/@38.9322802,-92.4002238,603m/data=!3m1!1e3!4m15!1m8!3m7!1s0x87dcb5c628a36ae9:0x506707ca425c5072!2sTribe+Salon!8m2!3d38.9321852!4d-92.3982428!10e1!16s%2Fg%2F11hy9nvqk5!3m5!1s0x87dcb5c628a36ae9:0x506707ca425c5072!8m2!3d38.9321852!4d-92.3982428!16s%2Fg%2F11hy9nvqk5?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D' target='blank'>
                <i className="fa fa-google" aria-hidden="true"></i>
            </a>
        </div> 
      </section>
      <div className='leftSideFooter'>
        <section className='footerOuterContainer'>
            <div className='footerContents'>          
              <div md="3" lg="2" xl="2" className='usefulLinks'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Facebook
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Booking
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Careers
                  </a>
                </p>
              </div>
              <div md="4" lg="3" xl="3" className='contact'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>573-356-6306</p>
                <p>tribesalon@gmail.com</p>
              </div>
            </div>
        </section>
        <Map className='footerMap'/>
      </div>
    </div>
  );
}