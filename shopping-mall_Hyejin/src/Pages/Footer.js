import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div>
            <footer>
                <div className="navs">
                    <nav className="footer-nav">
                        <h2>카고리</h2>
                        <ul>
                            <li className="footer-navel"><a href="#" target="_blank">여성</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">남성</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">신생아/유아</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">아동</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">H&M HOME</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">스포츠</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">Sale</a></li>
                        </ul>
                    </nav>
                    <nav className="footer-nav">
                        <h2>기업 정보</h2>
                        <ul>
                            <li className="footer-navel"><a href="#" target="_blank">H&M 채용정보</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">H&M 회사 소개</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">H&M Group 지속가능성(Sustainability H&M Group)</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">언론</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">IR 정보</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">Corporate governance</a></li>
                        </ul>
                    </nav>
                    <nav className="footer-nav">
                        <h2>고객 지원</h2>
                        <ul>
                            <li className="footer-navel"><a href="#" target="_blank">고객 서비스</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">내 계정</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">매장 찾기</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">*개인정보 처리방침</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">문의하기</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">기프트 카드</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">사기 신고</a></li>
                            <li className="footer-navel"><a href="#" target="_blank">Cookie Settings</a></li>
                        </ul>
                    </nav>

                    <section className="footer-nav-membership"> 
                        <h2>지금 멤버십에 가입하세요!</h2>
                        <p>
                            지금 가입하시고 10% 할인 받으세요
                            <a>지금 가입하기</a>
                        </p>
                    </section>
                </div>
                <div className="info-container">
                    <div className="sns">SNSNSNSNSNS</div>
                    <div className="info">
                        <p>이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다. 더 보기 | 법인명 에이치앤엠헤네스<br/>
                        앤 모리츠 주식회사 | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록| 번호: 220-87-83339 | 대표자: 아담 칼슨, 아네<br/>
                        타 포쿠친스카 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | </p>
                    </div>
                    <div className="info">
                        <p>법인명 에이치앤엠헤네스앤모리츠 주식회사  | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록번호: 220-87-83339 </p>
                        <p>|대표자 : 아담칼슨, 아네타포쿠친스카</p>
                        <p>서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com</p>
                    </div>
                    <div className="info-02">
                        사업자 정보 확인
                    </div>
                    <div className="info-03">
                        지급보증안내
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;