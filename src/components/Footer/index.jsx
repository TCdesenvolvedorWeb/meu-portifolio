import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import qrCode from "../../assets/img/whatsapp.jpg";

const Footer = () => {
  return (
    <FooterPage>
      <h3>
        <FontAwesomeIcon icon={faCode} /> DevTadeu
      </h3>
      <ul>
        <li>Envieme uma mensagem!</li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/tadeu-cardoso-i-dev-26aa09337/overlay/about-this-profileipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BGr7QIZB4QT25qxKGmSvfWA%3D%3D">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/TCdesenvolvedorWeb">
          <FontAwesomeIcon icon={faGithub} />
            </a>
        </li>
        <li>
            <a target="_blank" href={qrCode}>
          <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </li>
        <li>
            <a target="_blank" href="https://www.instagram.com/tadeuzo?igsh=NTh6ZmcwZHA1OXk%3D&utm_source=qr">
          <FontAwesomeIcon icon={faInstagram} />
            </a>
        </li>
      </ul>
    </FooterPage>
  );
};

const FooterPage = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #000;
  height: 70px;
  margin: auto;

  h3 {
    color: var(--text-primary);
    font-size: 2rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      padding: 6px 8px;
      cursor: pointer;
      color: var(--text-secundary);
      border: solid 1px var(--text-secundary);
      border-radius: 20px;
      margin-right: 10px;

      a{
        color: var(--text-secundary);
      }

      &:hover {
        color: var(--text-primary);
      }
        
      &:first-child {
        border: none;
        font-size: 1.7rem;
        cursor: auto;

        &:hover{
            color: var(--text-secundary);
        }
      }
    }

  }

  @media(max-width: 600px){
    flex-direction: column;
    height: 100px;
  }
`;

export { Footer };
