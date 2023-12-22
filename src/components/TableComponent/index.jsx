import React, { useContext, useEffect } from "react";
import "./index.scss";
import { fetchContext } from "../../contexts/FetchContext";

function TableComponent() {
  const { apiData, getData } = useContext(fetchContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="table">
      <div className="table__head">
        <div className="table__tr">
          <div className="table__th">
            <div className="table__th__text">
              <div>Name</div>
              <div>{apiData.length} MATCHES</div>
            </div>
          </div>
          <div className="table__th">
            <div className="table__th__text">Short Code</div>
          </div>
          <div className="table__th">
            <div className="table__th__text">Symbol</div>
          </div>
        </div>
      </div>
      <div className="table__body">
        {apiData.map((x) => (
          <div className="table__tr">
            <div className="table__td">{x.name}</div>
            <div className="table__td">{x.short_code}</div>
            <div className="table__td">{x.symbol}</div>
          </div>
        ))}
        <div className="table__tr">
          <div className="table__td">1, 1</div>
          <div className="table__td">2, 1</div>
          <div className="table__td">3, 1</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 2</div>
          <div className="table__td">2, 2</div>
          <div className="table__td">3, 2</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 3</div>
          <div className="table__td">2, 3</div>
          <div className="table__td">3, 3</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 4</div>
          <div className="table__td">2, 4</div>
          <div className="table__td">3, 4</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 5</div>
          <div className="table__td">2, 5</div>
          <div className="table__td">3, 5</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 6</div>
          <div className="table__td">2, 6</div>
          <div className="table__td">3, 6</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 7</div>
          <div className="table__td">2, 7</div>
          <div className="table__td">3, 7</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 8</div>
          <div className="table__td">2, 8</div>
          <div className="table__td">3, 8</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 9</div>
          <div className="table__td">2, 9</div>
          <div className="table__td">3, 9</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 10</div>
          <div className="table__td">2, 10</div>
          <div className="table__td">3, 10</div>
        </div>
        <div className="table__tr">
          <div className="table__td">1, 99</div>
          <div className="table__td">2, 99</div>
          <div className="table__td">3, 99</div>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
