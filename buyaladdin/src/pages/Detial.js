import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LuChevronLeft, LuChevronDown, LuPlus } from "react-icons/lu";

function Detial() {
  const [flag, setFlag] = useState("");
  const [region, setRegion] = useState(false);

  const location = useLocation();

  let navigate = useNavigate();

  useEffect(() => {
    setFlag(location.state);
  }, []);

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
          <p>도시를 선택해주세요.</p>
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
              <li>
                <p>서울</p>
              </li>
              <li>
                <p>인천</p>
              </li>
              <li>
                <p>경기</p>
              </li>
              <li>
                <p>대전</p>
              </li>
              <li>
                <p>충청남도</p>
              </li>
              <li>
                <p>충청북도</p>
              </li>
              <li>
                <p>강원도</p>
              </li>
              <li>
                <p>경상북도</p>
              </li>
              <li>
                <p>경상남도</p>
              </li>
              <li>
                <p>전라남도</p>
              </li>
              <li>
                <p>전라북도</p>
              </li>
              <li>
                <p>제주도</p>
              </li>
            </ul>
          </div>
        )}

        <button type="button">매장찾기</button>
      </div>

      <div className="shop-list">
        <div className="shop-title">
          <h5>Goods Appraisal Service Center</h5>
          <LuPlus />
        </div>
        <ul>
          <li>
            <div className="shop-img">
              <img src="/assets/image/tnc01.jpg" alt="shop-img" />
            </div>
            <div className="shop-info">
              <strong>태인씨1</strong>
              <p>
                서울특별시 강남구 봉은사로 514
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
              <p>
                010-1234-1234
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
            </div>
          </li>
          <li>
            <div className="shop-img">
              <img src="/assets/image/tnc01.jpg" alt="shop-img" />
            </div>
            <div className="shop-info">
              <strong>태인씨1</strong>
              <p>
                서울특별시 강남구 봉은사로 514
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
              <p>
                010-1234-1234
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
            </div>
          </li>
          <li>
            <div className="shop-img">
              <img src="/assets/image/tnc01.jpg" alt="shop-img" />
            </div>
            <div className="shop-info">
              <strong>태인씨1</strong>
              <p>
                서울특별시 강남구 봉은사로 514
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
              <p>
                010-1234-1234
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
            </div>
          </li>
          <li>
            <div className="shop-img">
              <img src="/assets/image/tnc01.jpg" alt="shop-img" />
            </div>
            <div className="shop-info">
              <strong>태인씨1</strong>
              <p>
                서울특별시 강남구 봉은사로 514
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
              <p>
                010-1234-1234
                <span>
                  <img src="/assets/image/Copy.png" alt="copy" />
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Detial;
