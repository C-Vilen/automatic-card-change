import { Fragment } from "react/jsx-runtime";
import HeaderImage from "../components/HeaderImage/HeaderImage"
import GridGuide from "../components/GridGuide/GridGuide";


function Home() {
    return(
        <Fragment>
            <main className="content">
                <HeaderImage />
                <GridGuide />
            </main>
        </Fragment>
    );
}

export default Home;