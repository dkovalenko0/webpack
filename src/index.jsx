import * as $ from 'jquery'
import Post from '@models/post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import img from './assets/img.jpg'
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/styles.css'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', img)

// $('pre').html(post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack assemble</h1>
        <hr />

        <div className="logo" />

        <hr/>

        <hr />

        <pre />

        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)