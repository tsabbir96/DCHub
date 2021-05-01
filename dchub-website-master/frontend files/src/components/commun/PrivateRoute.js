import {Redirect, Route} from "react-router";
import {useProfileData} from "../context/profile_data/ProfileDataContext";
import React from 'react'

export const PrivateRoute = ({children, ...rest}) => {
    const [state] = useProfileData()
    return (
        <Route
            {...rest}
            render = {({location}) =>
                state.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to = {{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}
