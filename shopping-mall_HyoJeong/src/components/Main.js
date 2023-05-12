import React from 'react';
import MainImg from './MainImg'

function Main () {
    return (
        <main>
            <p className='notice'><a href='#'>회원 혜택 : 3만원 이상 무료배송 & 첫 구매 10% 할인</a></p>
            <div className='bigBanner'>
                <img className='bigBannerImg' src='https://image.hm.com/content/dam/global_campaigns/season_07/ladies/9717-golden-week/9717-3x2-1.jpg?imwidth=657' alt="신상포스터"></img>
                <h1 className='bigBannerH1-1'>A natural palette</h1>
                <p className='bigBannerP-1'>더 유연해진 감각의 새로운 유틸리티 룩</p>
                <button className='bigBannerBtn-1'>지금 쇼핑하기</button>
            </div>
            <div className='smallBanner'>
                <h1 className='smallBannerH1'>
                    Happy Moment
                    <br />
                    최대한 40% 할인
                </h1>
                <p className='smallBannerP'>
                    5월 감사의 마음을 담아 준비한 혜택
                    <br />
                    4.26(수)~5.8(월)까지 | 매장 & hm.com | 회원 전용 | 일부 제품 한정
                </p>
                <ul className='smallBannerUl'>
                    <li><a>여성</a></li>
                    <li><a>Divided</a></li>
                    <li><a>남성</a></li>
                    <li><a>신생아/유아</a></li>
                    <li><a>아동</a></li>
                    <li><a>H&M HOME</a></li>
                    <li><a>지금 가입하기</a></li>
                </ul>
            </div>
            <div className='bigBanner'>
                <img className='bigBannerImg' src='https://image.hm.com/content/dam/TOOLBOX/LOCAL%20ACTIVITIES/2023_s07/april_2023/9617A-online-3x2.jpg?imwidth=657' alt="신상포스터"></img>
                <h1 className='bigBannerH1-2'>호주 기반의 일러스트레이터 브롤가와 함께한 스트리트웨어 콜라보 컬렉션!</h1>
                <ul className='bigBannerUl-2'>
                    <li className='bigBannerLi-2'><a href="#">여성</a></li>
                    <li className='bigBannerLi-2'><a href="#">남성</a></li>
                </ul>
            </div>
            <div className='bestItems'>
                <h1>인기 카테고리</h1>
                <ul className='bestItemsUl'>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/ko_kr/10244.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>의류</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>탑 & 티셔츠</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10216.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>드레스</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10201.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>팬츠</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10217.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>가디건 & 풀오버</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10208.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>셔츠 & 블라우스</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>남성</span>
                                <p>티셔츠 & 탑</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10251.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>프리미엄 셀렉션</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10220.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>악세서리</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/ko_kr/10245.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>남성</span>
                                <p>의류</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10222.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>남성</span>
                                <p>팬츠</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10227.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>남성</span>
                                <p>셔츠</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10215.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>H&M HOME</span>
                                <p>인테리어 소품 모두 보기</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10231.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>남성</span>
                                <p>후드티 & 맨투맨</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10207.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>여성</span>
                                <p>신발</p>
                            </div>
                        </a>
                    </li>
                    <li className='bestItemsLi'>
                        <a className='bestItemsA' href="#">
                            <img className='bestItemImg'src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10252.png?imwidth=124' alt='신제품'></img>
                            <div className='bestItemCmt'>
                                <span>남성</span>
                                <p>프리미엄 셀렉션</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='newItems'>
                <h1>신상품</h1>
                <ul>
                    <li><a>여성</a></li>
                    <li><a>Divided</a></li>
                    <li><a>남성</a></li>
                    <li><a>신생아/유아</a></li>
                    <li><a>아동</a></li>
                    <li><a>H&M HOME</a></li>
                    <li><a>스포츠</a></li>
                </ul>
            </div>
            <div className='bigBanner'>
                <img className='bigBannerImg' src='https://image.hm.com/content/dam/global_campaigns/season_07/home/7087a/7087A-3x2-1-vibrant-summer-home-collection.jpg?imwidth=657' alt="신상포스터"></img>
                <h1 className='bigBannerH1-3'>핫한 계절을 위한 핫 컬러</h1>
                <p className='bigBannerP-3'>야외 공간에 컬러를 더해 한층 화사하게</p>
                <ul className='bigBannerUl-3'>
                    <li className='bigBannerLi-3'><a href="#">지금 쇼핑하기</a></li>
                </ul>
            </div>
            <div className='bigBanner'>
                <img className='bigBannerImg' src='https://image.hm.com/content/dam/sustainability-site/take-care/9035C-teaser-3x2-wash-with-care.jpg?imwidth=657' alt="신상포스터"></img>
                <h1 className='bigBannerH1-4'>옷도 환경도 지키는 세탁 방법</h1>
                <p className='bigBannerP-4'>에너지 소비와 옷에 불필요한 마모를 줄이는 팁.</p>
                <ul className='bigBannerUl-4'>
                    <li className='bigBannerLi-4'><a href="#">지금 보기</a></li>
                </ul>
            </div>
            <section>
                <h1 className='magazineH1'>MAGAZINE</h1>
                <p className='magazineP'>A WORLD OF INSPIRATION</p>
                <a className='magazineMore' href='#'>READ H&M MAGAZINE</a>
                <ul className='magazineUl'>
                    <li className='magazineLi'>
                        <img src='https://image.hm.com/content/dam/hm-magazine-2023/april_2023/2007-henrick-event/2007-Henrick-Event-top-teaser.jpg?imwidth=768' alt='환호하는 사진'></img>
                        <p>INSIDE H&M</p>
                        <h3>컬렉션 공개</h3>
                        <a href='#'>Read The Story</a>
                    </li>
                    <li className='magazineLi'>
                        <img src='https://image.hm.com/content/dam/hm-magazine-2023/march_2023/4077-innovation-kids/4077-Magazine-Top-image-1688x1126-1.jpg?imwidth=768' alt='여자 키즈 모델'></img>
                        <p>INSIDE H&M</p>
                        <h3>되살아난 마법 H&M 키즈 혁신 스토리</h3>
                        <a href='#'>Read The Story</a>
                    </li>
                    <li className='magazineLi'>
                        <img src='https://image.hm.com/content/dam/hm-magazine-2023/march_2023/4046/4067-3x2-Magazine-Article-Top-image-1688x1126-.jpg?imwidth=768' alt='유아 사진'></img>
                        <p>INSIDE H&M</p>
                        <h3>H&M이 다시 한 번 Cradle to Cradle Certified Godl(크래들 투 크래들 골드 레벨 인증)를 획득했습니다!</h3>
                        <a href='#'>Read The Story</a>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Main;