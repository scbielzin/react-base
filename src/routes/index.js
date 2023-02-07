import React from 'react';

import { Switch } from 'react-router-dom';

import { toast } from 'react-toastify';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

import MyRoute from './MyRoute';

export default function Routes() {
    toast.success('teste')
    return (
            <Switch>
                <MyRoute exact path="/" component={Login}/>
                <MyRoute path="*" component={Page404}/>
            </Switch>
    )
}