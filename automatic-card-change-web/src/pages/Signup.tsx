import { Fragment } from "react/jsx-runtime";
import SignupForm from "../components/SignupForm/SignupForm";

function Signup() {
    return(
        <Fragment>
            <main className="content">
                <SignupForm />
            </main>
        </Fragment>
    );
}

export default Signup;