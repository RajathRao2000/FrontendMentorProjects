import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./Main.module.css"

function Main() {
  return (
    <section className={classes.projects}>
        <Link to="./recipe-page">Recipe Page</Link>
        <Link to="./social-links-profile">Social Links Profile</Link>
    </section>
  )
}

export default Main