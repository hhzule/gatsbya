import './src/styles/global.css'
import firebase from "gatsby-plugin-firebase";
import "firebase/auth"
import "firebase/app"
import "firebase/functions"

import React from 'react'
import { FirebaseProvider } from "./src/service";



export const wrapRootElement = ({ element }) => {
    return (
        <FirebaseProvider >{element}</FirebaseProvider>
    );
}