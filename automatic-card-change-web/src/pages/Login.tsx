import { Fragment } from "react/jsx-runtime"
import LoginForm from "../components/LoginForm/LoginForm";

function Login(){
    return(
    <Fragment>
        <main className="content">
            <LoginForm />
        </main>
    </Fragment>
    );
}

export default Login;