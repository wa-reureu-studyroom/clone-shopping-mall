import React, {useState} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis, faUser, faHeart, faBagShopping, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


function Header() {
    library.add(faEllipsis, faUser, faHeart, faBagShopping, faMagnifyingGlass);

    const [loingHide, setloingHide] = useState(true);
    const [shoppingBagHide, setshoppingBagHide] = useState(true);

    return (
        <nav>
            <div className='topNav'>
                <ul className='clientService'>
                    <li><a href='#'>고객 서비스</a></li>
                    <li><a href='#'>뉴스레터</a></li>
                    <li><a href='#'>매장 찾기</a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faEllipsis} className='menuIcon' /></a></li>
                </ul>
                <div className='mainLogo'>
                    <img src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/697b276d-c669-4d88-b115-dd9e6cae3fae/28a9d5ed-4776-4fe0-9e19-007e8ed817a9/709px-H&M-Logo.svg.png" alt="hm logo" />
                </div>
                <ul className='clientShopping'>
                    <li onMouseEnter={() => setloingHide(false)} onMouseLeave={() => setloingHide(true)}><a>
                        <FontAwesomeIcon icon={faUser} />
                        <span className='clientServicePadding'>로그인</span>
                        </a></li>
                    <li><a>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className='clientServicePadding'>즐겨찾기</span>
                        </a></li>
                    <li onMouseEnter={() => setshoppingBagHide(false)} onMouseLeave={()=>setshoppingBagHide(true)}><a>
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className='clientServicePadding'>쇼핑백(0)</span>
                        </a></li> {/* 이거 0 나중에 함수로 빼야함 */}
                </ul>
                <div className={`loginMiniPage ${!loingHide ? '' : 'hide'}`}>
                    <button>로그인</button>
                    <p><a href='#'>내 계정</a></p>
                    <p><a href='#'>멤버십 정보</a></p>
                    <span><a href='#'>아직 회원이 아니세요? 여기서 가입하세요!</a></span>
                </div>
                <div className={`shoppingBagMini ${!shoppingBagHide ? '' : 'hide'}`}>
                    <p>귀하의 쇼핑백이 비어있습니다.</p>
                    <hr />
                    <p>주문가격 <span>￦0</span></p>
                    <hr />
                    <p>합계 <span>￦0</span></p>
                </div>
            </div>
            
            <div className='bottomNav'>
                <ul className='category'>
                    <li>여성</li>
                    <li>Divided</li>
                    <li>남성</li>
                    <li>신생아/유아</li>
                    <li>아동</li>
                    <li>H&M HOME</li>
                    <li>스포츠</li>
                    <li>Sale</li>
                    <li>지속가능성</li>
                </ul>
                <div className='itemSearch'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder='제품 검색'></input>
                </div>
            </div>
            
        </nav>
    );
}

export default Header;