import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ authenticated, component: Component, render, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
                render={(props) =>
                    authenticated ? (
                        render ? (
                            render(props)
                        ) : (
                            <Component {...props} />
                        )
                    ) : (
                        <Redirect
                            to={{ pathname: "/login", state: { from: props.location } }}
                        />
                    )
                }
            />
        </div>
    )
}

export default AuthRoute