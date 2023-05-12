import React , {useState}from 'react';
import {Icon} from 'react-icons-kit';
import {user} from 'react-icons-kit/feather/user';
import {heart} from 'react-icons-kit/feather/heart';
import {ic_shopping_bag_outline} from 'react-icons-kit/md/ic_shopping_bag_outline';
import {search} from 'react-icons-kit/oct/search'
import {more} from 'react-icons-kit/ikons/more';
import styled from 'styled-components';
// import logo from './logo.png'
import './Header.css';

const Button = styled.button`
border:none;
background-color: white;
cursor:pointer;
`;

// 스타일드 컴포넌트로 작성 취소 
//const Modal = styled.div`
// width: 143px;
// height: 64px;
// background-color: red;
// position:absolute;
// top: 0;
// left: 30px;
// transform:translateX(-50%);
// `;

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);//hover로 모달창 

    const handleMouseEnter = () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.pointerEvents = 'auto';
        });
        setShowModal(true);
    }
    const handleMouseLeave = () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.pointerEvents = 'none';
        });
        setShowModal(false);
    }

    const Popup = styled.div`
        position: absolute;
        top: 70px;
        right: 250px;
        z-index: 999;
        background-color: #ffffff;
        box-shadow:0 0 5px 5px rgba(0,0,0,0.042);
        padding: 20px 15px;
        
    `;

    const Modal = styled.div`
        position: absolute;
        top: 35px;
        left: 220px;
        z-index: 999;
        background-color: #ffffff;
        box-shadow:0 0 5px 5px rgba(0,0,0,0.022);
    `;

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleModalContentClick = (event) => {
        event.stopPropagation();
    }


    return(
        <div clasName="nav-container">
            <nav>
                <div className="first_nav">
                    <div className="top_left menu">
                        <ul>
                            <li clasName="left_menu"><a >고객 서비스</a></li>
                            <li clasName="left_menu"><a >뉴스레터</a></li>
                            <li clasName="left_menu"><a >매장 찾기</a></li>
                            <li clasName="left_menu" id="toggle-menu">
                                {/* <Button onClick={togglePopup}><Icon icon={more}/></Button>
                                {showPopup ? <Modal/>: console.log('close')} */}
                                <button id="more-icon" onClick={togglePopup}><Icon icon={more} /></button>
                                { showPopup && (
                                    <Modal>
                                        <ul className="drop-bar">
                                            <li className="link-li"><a href="https://play.google.com/store/apps/details?id=com.hm.goe&pli=1" target="_blank">ANDROID 다운로드</a></li>
                                            <li className="link-li"><a href="https://apps.apple.com/kr/app/h-m-we-love-fashion/id834465911" target="_blank">IOS 다운로드</a></li>
                                        </ul>
                                    </Modal>
                                ) }
                            
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <a href="https://www2.hm.com/ko_kr/index.html" target="_blank">LOGO </a>
                    </div>
                    <div className="top_right menu">
                        <ul>
                            <li className="right_menu">
                                {/*왜 button으로 구현했을 까? button 컴포넌트로 구현하려면 어떻게 해야 할까?  */}
                                <div className="right_menu_child">
                                <label for="login-icon"><Icon icon={user}  size={25}/><a href="#" id="login-icon"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>로그인</a></label>
                                {showModal && (
                                    <Popup>
                                        <div className="modal">
                                            <button className="login-modal-btn">로그인</button>
                                            <div className="login-modal-myaccount"><a>내 계정</a></div>
                                            <div className="login-modal-myaccount"><a>멤버십 정보</a></div>
                                            <div className="login-modal-signIn"><a>아직 회원이 아니세요? 여기서 가입하세요</a></div>
                                        </div>
                                    </Popup>
                                ) }
                                </div>
                            </li>
                            <li className="right_menu">
                                <div className="right_menu_child">
                                    <label for="fav-icon"  ><Icon icon={heart}  size={25}/><a href="#" id="fav-icon">즐겨찾기</a></label>
                                </div>
                            </li>
                            <li className="right_menu">
                                <div className="right_menu_child">
                                    <label for="shop-icon"><Icon icon={ic_shopping_bag_outline} size={25}/><a href="#" id="shop-icon">쇼핑백(0)</a></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*first nav */}
                <div className="second_nav">
                    <div className="center_second_menu">
                        <ul>
                            <li className="center_menu"><a href="#">여성</a></li>
                            <li className="center_menu"><a href="#">Divided</a></li>
                            <li className="center_menu"><a href="#">남성</a></li>
                            <li className="center_menu"><a href="#">신생아/유아</a></li>
                            <li className="center_menu"><a href="#">아동</a></li>
                            <li className="center_menu"><a href="#">H&M HOME</a></li>
                            <li className="center_menu"><a href="#">스포츠</a></li>
                            <li className="center_menu"><a href="#">Sale</a></li>
                            <li className="center_menu"><a href="#">지속가능성</a></li>
                        </ul>
                    </div>
                    <div className="center_second_search">
                    <Icon icon={search}/><input type="text" aria-label="제품 검색" placeholder="제품 검색"></input>
                    </div>
                </div>
                
                
            </nav>
        </div>
    )
}

export default Header;