import React from "react";
import { MainCoinContainer } from "./CryptoInfoTableStyle";
import FluctuationArrow from "../fluctuation-arrow/FluctuationArrow";

const CoinInfoTable = (props) => {
  const { selectedCrypto } = props;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <MainCoinContainer>
      <p>Market</p>
      <span>{selectedCrypto.symbol} USD</span>
      <p>Market cap</p>
      <span>{numberWithCommas(selectedCrypto.market_cap_usd)} USD</span>
      <p>Price</p>
      <span>{numberWithCommas(selectedCrypto.price_usd)} USD</span>
      <p>Price BTC</p>
      <span>{selectedCrypto.price_btc}</span>
      <p>Fluctuation 1h</p>
      <span>
        {selectedCrypto.percent_change_1h}%{" "}
        <FluctuationArrow value={selectedCrypto.percent_change_1h} />
      </span>
      <p>Fluctuation 24h</p>
      <span>
        {selectedCrypto.percent_change_24h}%{" "}
        <FluctuationArrow value={selectedCrypto.percent_change_24h} />
      </span>
      <p>Fluctuation 7d</p>
      <span>
        {selectedCrypto.percent_change_7d}%{" "}
        <FluctuationArrow value={selectedCrypto.percent_change_7d} />
      </span>
    </MainCoinContainer>
  );
};

export default CoinInfoTable;
