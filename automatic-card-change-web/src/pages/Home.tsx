import { Fragment } from "react/jsx-runtime";
import TestAppComponent from "../components/TestAppComponent";

export default function Home() {
    return(
        <Fragment>
            <main className="content">
                <TestAppComponent />
            </main>
        </Fragment>
    );
}