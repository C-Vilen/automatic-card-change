import { Fragment } from "react/jsx-runtime";
import './HeaderImage.css'


function HeaderImage() {
    return(
        <Fragment>
            <header>
                <img className="header-img" width="567.1704" height="517.30967" src="assets/images/credit_card.svg" alt="credit card illustration"></img>
                <h1 className="header-txt">Change the places your credit card is <br/>used in the <span className="highlight-box">matter of seconds!</span></h1>
            </header>
        </Fragment>
    );
}

export default HeaderImage;