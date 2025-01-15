import { FooterPage } from "../../assets/styles/Footer";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export { Footer };