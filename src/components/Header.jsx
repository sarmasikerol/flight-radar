import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <Link>
        <img src="/planelogo.png" />
        <h2>Uçuş Radarı</h2>
      </Link>

      <h3>
        {isLoading
          ? "Uçuşlar aranıyor..."
          : error
          ? "Hata: " + error
          : `${flights.length} Uçuş Bulundu`}
      </h3>
    </header>
  );
};

export default Header;
