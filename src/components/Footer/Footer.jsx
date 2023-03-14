import socialNetworks from "../../services/socialNetworks";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div id="footDecoration"></div>
      <div id="socialNetworkss">
        {socialNetworks.map((network) => (
          <a
            href={network.url}
            alt={network.name}
            target="_blank"
            key={network.id}
          >
            <img src={network.img} alt={network.name} />
          </a>
        ))}
      </div>
      <h3>
        Copyrights©
        <a href="https://laynaria.com" target="_blank" alt="Laynaria website">
          laynaria.com
        </a>
      </h3>
    </footer>
  );
}

export default Footer;
