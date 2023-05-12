import React from 'react';

function Footer () {
    return (
        <footer>
            <ul>
                <li>
                    <p className='footerListName'>카테고리</p>
                    <ul className='footerList'>
                        <li><a href='#'>여성</a></li>
                        <li><a href='#'>남성</a></li>
                        <li><a href='#'>신생아/유아</a></li>
                        <li><a href='#'>아동</a></li>
                        <li><a href='#'>H&M HOME</a></li>
                        <li><a href='#'>스포츠</a></li>
                        <li><a href='#'>Sale</a></li>
                    </ul>
                </li>
                <li>
                    <p className='footerListName'>기업 정보</p>
                    <ul className='footerList'>
                        <li><a href='#'>H&M 채용정보</a></li>
                        <li><a href='#'>H&M 회사 소개</a></li>
                        <li><a href='#'>H&M Group 지속가능성(Sustainability H&M Group)</a></li>
                        <li><a href='#'>언론</a></li>
                        <li><a href='#'>IR 정보</a></li>
                        <li><a href='#'>Corporate governance</a></li>
                    </ul>
                </li>
                <li>
                    <p className='footerListName'>고객지원</p>
                    <ul className='footerList'>
                        <li>고객 서비스</li>
                        <li>내 계정</li>
                        <li>매장 찾기</li>
                        <li>*개인정보 처리방침</li>
                        <li>문의하기</li>
                        <li>기프트 카드</li>
                        <li>사기 신고</li>
                        <li>Cookie Setting</li>
                    </ul>
                </li>
                <li>
                    <p className='footerListName'>지금 멤버십에 가입하세요!</p>
                    <ul className='footerList'>
                        <li>지금 가입하시고 10% 할인받으세요</li>
                        <li>지금 가입하기</li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;