import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiHandshake } from 'react-icons/si'
import { RiMapPinRangeFill } from 'react-icons/ri'

import { StyledFooter, StyledFooterWraper } from '../../styles/index'

const Footer = () => {
  return (
    <StyledFooterWraper>
      <StyledFooter>
        <div>
          <h4>
            Connect with us <SiHandshake />
          </h4>
          <ul>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            Quick Links
            <FiArrowUpRight />
          </h4>
          <ol>
            <li>About Us</li>
            <li>Contact us</li>
          </ol>
        </div>
        <address>
          <h4>
            Locate Us At <RiMapPinRangeFill />
          </h4>
          <ol>
            <li>At Land</li>
            <li>At Street</li>
            <li>At Building</li>
          </ol>
        </address>
      </StyledFooter>
    </StyledFooterWraper>
  )
}

export default Footer
