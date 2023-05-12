import React from 'react';
import styled from 'styled-components';
import '../App.css';

const Main = () => {

    const Announcement = styled.div`
        position: absolute;
        left:50%;
        transform:translateX(-50%);
        cursor:pointer;
        > a:hover{
            text-decoration:underline;
            position:under;
        }
        
    `;

    const ButtonWhite = styled.button`
        background-color: ${(props) => (props.black ? "black" : "white")};
        color: ${(props) => (props.black ? "white" : "#222")};
        font-weight: 600;
        font-size: 1rem;
        padding: 5px 10px;
        border: none;
        margin: 20px 5px;
        &:hover{
            cursor:pointer;
            background-color: rgb(216, 216, 216);

        }
    `;

    const ButtonNone = styled(ButtonWhite)`
        background-color:${(props) => {
            if(props.white) {return "white"} else if (props.black){return "black"} else {return "#11ffee00"}
        }};
        // (props.white ? "white" : "#11ffee00")};
        border:${(props) => (props.white ? "none" : "1px solid black")};
        padding: 5px 10px;
        font-size: 20px;
        font-weight: 400;
    `;

    const ButtonRound = styled(ButtonNone)`
        border-radius: 20px;
        &:hover{
            background-color:#11ffee00;
        }
        &:focus-within{
            background-color: red;
            color: white;
        }

    `;

    const MagzLink = styled.button`
        border: none;
        background-color: #11ffee00;
        font-size: 15px;
        margin-bottom: 20px;

    `;

    return(
        <div>
            <main>
                <Announcement><a className="main-center-link"> 회원 혜택:3만원 이상 무료 배송 & 첫 구매 10% 할인</a></Announcement>
                <div className="ad green-01">
                    <article>
                        <div className="article-title">Happy Moment<br/>+상품 추가</div>
                        <p>추가된 인기 상품. 품절되기 전에 만나보세요!<br/>
                        4.26(수) - 5.8(월)까지 | 매장 & hm.com | 회원 전용 혜택 | 일부 제품 한정</p>
                        <div className="buttons">
                            <ButtonWhite>여성</ButtonWhite>
                            <ButtonWhite>Davided</ButtonWhite>
                            <ButtonWhite>남성</ButtonWhite>
                            <ButtonWhite>신생아/유아</ButtonWhite>
                            <ButtonWhite>아동</ButtonWhite>
                            <ButtonWhite>H&M HOME</ButtonWhite>
                            <ButtonWhite>지금 가입하기</ButtonWhite>
                        </div>
                    </article>
                </div>
                <div className="ad pic-02">
                    <article>
                        <div className="p02-title">
                            <div className="article02-title">A natural palette</div>
                            <p>더 유연해진 감각의 새로운 유틸리티 룩 </p>
                            <ButtonNone white>지금 가입하기</ButtonNone>
                        </div>
                    </article>
                </div>
                <div className="ad pic-03">
                    <article>
                        <div className="p03-title">
                            <div className="article03-title">봄날의 린넨</div>
                            <p>따뜻해진 날씨, 리넨을 입어요 </p>
                            <ButtonNone>지금 쇼핑하기</ButtonNone>
                        </div>
                    </article>
                </div>
                <div className="ad pg-04">
                    <div className="p04-title"><h3>인기 카테고리</h3></div>
                    <div className="p04-pagination">페이지네이션</div>
                </div>
                <div className="ad pg-05">
                    <div className="p04-title"><h3>인기 신상품</h3></div>
                    <div className="buttons">
                        <ButtonRound none>여성</ButtonRound>
                        <ButtonRound>남성</ButtonRound>
                        <ButtonRound>Divided</ButtonRound>
                        <ButtonRound>신생아/유아</ButtonRound>
                        <ButtonRound>아동</ButtonRound>
                        <ButtonRound>H&M HOME</ButtonRound>
                        <ButtonRound>스포츠</ButtonRound>
                    </div>
                    <div className="p04-pagination">페이지네이션</div>
                </div>
                <div className="ad pic-06">
                    <article>
                        <div className="p06-title">
                            {/* <div className="article06-title">봄날의 린넨</div> */}
                            <p>5월 11일 오전 9시 온라인 출시 예정 </p>
                            <p>5월 11일 오프라인 출시: 잠실 롯데월드몰점 및 가로수길점 각 매장 오픈 시간 참고 </p>
                            <ButtonNone black>지금 보기</ButtonNone>
                        </div>
                    </article>
                </div>
                <div className="ad pic-07">
                    <article>
                        <div className="p07-title">
                            <div className="article06-title">생기있는 여름의 맛</div> 
                            <p>따스한 햇빛을 받아 한층 빛나는 테이블 세팅.</p>
                            <ButtonNone white>지금 쇼핑하기</ButtonNone>
                        </div>
                    </article>
                </div>
                <div className="ad pic-08">
                    <article>
                        <div className="p08-title">
                            <div className="article08-title">옷도 환경도 지키는 세탁 방법</div> 
                            <p>에너지 소비와 옷에 불필요한 마모를 줄이는 팁.</p>
                            <ButtonNone white>지금 보기</ButtonNone>
                        </div>
                    </article>
                </div>
                {/* 위에 부분도 section으로 감싸는 것이 좋을까?  */}
                <section>
                    <div className="ad magazine">
                        <div className="magz-title-container">
                            <div className="magz-title">MAGAZINE</div> 
                            <p>A WORLD OF INSPIRATION</p>
                            <p><a className="magz-a"href="https://www2.hm.com/ko_kr/life.html" target="_blank">READ H&M MAGAZINE</a></p>
                        </div>
                        <div className="mages-container">
                            <ul>
                                <li className="maz-subcontainer">
                                    <article>
                                        <div className="magz-pic01"></div>
                                        <div className="magz-section">
                                            <div className="magz-header">
                                                <div className="magz-subtitle">INSIDE H&M</div>
                                                <div className="mags-subkor">컬렉션 공개</div>
                                            </div>
                                            <MagzLink>Read The Story</MagzLink>
                                        </div>
                                    </article>
                                </li>
                                <li className="maz-subcontainer">
                                    <article>
                                        <div className="magz-pic02"></div>
                                        <div className="magz-section">
                                            <div className="magz-header">
                                                <div className="magz-subtitle">INSIDE H&M</div>
                                                <div className="mags-subkor">컬렉션 공개</div>
                                            </div>
                                            <MagzLink>Read The Story</MagzLink>
                                        </div>
                                    </article>
                                </li>
                                <li className="maz-subcontainer">
                                    <article>
                                        <div className="magz-pic03"></div>
                                        <div className="magz-section">
                                            <div className="magz-header">
                                                <div className="magz-subtitle">INSIDE H&M</div>
                                                <div className="mags-subkor">컬렉션 공개</div>
                                            </div>
                                            <MagzLink>Read The Story</MagzLink>
                                        </div>

                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )

}

export default Main;