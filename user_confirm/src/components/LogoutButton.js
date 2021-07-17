import React from "react";
import { withRouter } from "react-router-dom";

function LogoutButton({ logout, history }) {
    const onClick = () => {
        logout();
        history.push("/");
    };
    return <button onClick={onClick}>Logout</button>;
}

export default withRouter(LogoutButton);