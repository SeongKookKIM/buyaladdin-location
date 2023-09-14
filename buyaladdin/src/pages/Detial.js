import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LuChevronLeft, LuChevronDown, LuPlus } from "react-icons/lu";
import Region from "../data/Region";

function Detial() {
  const [flag, setFlag] = useState("");
  const [region, setRegion] = useState(false);
  const [selectState, setSeletState] = useState("도시를 선택해주세요.");
  const [countryState, setCountryState] = useState(null);
  const [shopList, setShopList] = useState(null);

  const location = useLocation();

  let navigate = useNavigate();

  useEffect(() => {
    setFlag(location.state);
  }, [location.state]);

  useEffect(() => {
    const selectedCountry = flag.name;

    const selectedCountryObj = Region.find(
      (country) => country.name === selectedCountry
    );

    const statesArray = selectedCountryObj
      ? selectedCountryObj.list.map((item) => item.state)
      : [];

    setCountryState(statesArray);
  }, [flag]);

  useEffect(() => {
    if (selectState !== "도시를 선택해주세요.") {
      const match = [];
      for (const region of Region) {
        for (const item of region.list) {
          if (item.state === selectState) {
            match.push(...item.map);
          }
        }
      }
      setShopList(match);
    }
  }, [selectState]);

  const handleAdress = (adress) => {
    const textarea = document.createElement("textarea");
    textarea.value = adress;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      alert("클립보드에 주소가 복사되었습니다.");
    } catch (e) {
      alert("주소복사에 실패하였습니다");
    }

    document.body.removeChild(textarea);
  };

  const handleCall = (call) => {
    const textarea = document.createElement("textarea");
    textarea.value = call;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      alert("클립보드에 전화번호가 복사되었습니다.");
    } catch (e) {
      alert("전화번호 복사에 실패하였습니다");
    }

    document.body.removeChild(textarea);
  };

  return (
    <div className="detail">
      <div className="detail-nav">
        <LuChevronLeft
          onClick={() => {
            navigate("/list");
          }}
        />
        <div className="nav-logo">
          <img src={flag && flag.src} />
        </div>
      </div>

      <div className="detail-title">
        <strong>City Selectionv</strong>
        <span>
          Please select the city <br />
          you want to find.
        </span>
      </div>

      <div className="find-state">
        <div
          className="select"
          onClick={() => {
            setRegion(!region);
          }}
        >
          <p>{selectState}</p>
          <LuChevronDown />
        </div>
        {region && (
          <div
            className="select-group"
            onClick={() => {
              setRegion(false);
            }}
          >
            <ul>
              {countryState &&
                countryState.map((state, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={() => {
                        setSeletState(state);
                      }}
                    >
                      <p>{state}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

        {/* <button
          type="button"
          onClick={() => {
            handlerShopList();
          }}
        >
          매장찾기
        </button> */}
      </div>

      <div className="shop-list">
        <div className="shop-title">
          <h5>Goods Appraisal Service Center</h5>
          <LuPlus />
        </div>
        <ul>
          {shopList ? (
            <>
              {shopList.length === 0 ? (
                <div className="no-shop">
                  <span>현재 준비중입니다.</span>
                </div>
              ) : (
                <>
                  {shopList.map((it, i) => {
                    return (
                      <li key={i}>
                        <div className="shop-img">
                          <img src={it.src} alt="shop-img" />
                        </div>
                        <div className="shop-info">
                          <strong>{it.shop}</strong>
                          <p>
                            {it.adress}
                            <span
                              onClick={() => {
                                handleAdress(it.adress);
                              }}
                            >
                              <img src="/assets/image/Copy.png" alt="copy" />
                            </span>
                          </p>
                          <p>
                            {it.call}
                            <span
                              onClick={() => {
                                handleCall(it.call);
                              }}
                            >
                              <img src="/assets/image/Copy.png" alt="copy" />
                            </span>
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}

export default Detial;
