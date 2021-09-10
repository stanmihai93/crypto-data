import React, { useEffect, useState } from "react";
import { MainContainer } from "./MainStyle";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import CoinInfoTable from "../../components/crypto-info-table/CryptoInfoTable";

function Main() {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const defaultQuery = 10;
  const API_URL = "https://api.coinlore.net/api/tickers/";

  const getCryptoCoins = async (start, limit) => {
    try {
      const response = await fetch(`${API_URL}?start=${start}&limit=${limit}`);
      const jsonResponse = await response.json();
      setCryptoCoins(jsonResponse.data);
      setLoading(false);
    } catch (e) {
      console.log("Error fetching data", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Added timeout because the request was too fast and the spinner was barely there
    setTimeout(() => {
      getCryptoCoins(0, defaultQuery);
    }, 1000);
  }, []);

  const handleCrpytoChange = (e) => {
    const selectedCryptoId = e.target.value;
    setSelectedCrypto(cryptoCoins.find((coin) => coin.id === selectedCryptoId));
  };

  return (
    <MainContainer>
      <h1>Crypto Informer</h1>

      {loading && <LoadingSpinner />}
      {!loading && cryptoCoins.length > 0 && (
        <select onChange={handleCrpytoChange}>
          <option value="">== Select a Crypto ==</option>
          {cryptoCoins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      )}
      {!loading && cryptoCoins.length === 0 && (
        <h3>Error fetching crypto data</h3>
      )}

      {selectedCrypto && (
        <CoinInfoTable selectedCrypto={selectedCrypto} />
      )}
    </MainContainer>
  );
}

export default Main;
