import './Header.css'

function Header() {
    return(
        <header>
            <div>
                로고임
            </div>
            <nav>
                <a className="menuArea">메뉴1</a>
                <a className="menuArea">메뉴2</a>
                <a className="menuArea">메뉴3</a>
                <a className="menuArea">메뉴4</a>
            </nav>
            <div>
                <a>로그인</a>
                <a>회원가입</a>
            </div>
        </header>
    );
}

export default Header;