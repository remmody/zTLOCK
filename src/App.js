import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Rnd } from "react-rnd";

const Block = () => (

    <div>
        <div className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h2><code>> It's a test window</code></h2>
        </div>
        <p className="App-intro">
            <code>
                - It's a description<br/>
                - Teas<br/>
                - ETwe
            </code>
            <br/><br/><br/>
            <a className="testbutton">Test key</a>
        </p>
    </div>

);

function top(element) {

    let ass = document.getElementsByClassName('Steueu');
    for (let item of ass) {
        item.style.zIndex = '1'
    }

    element.style.zIndex = '999';

}

export default () => (



    <div>
        <Rnd

            default={{
                x: 50,
                y: 50,
                width: 320,
                height: 220
            }}
            className="Steueu"
            minHeight={220}
            minWidth={320}
            onDragStart={(e,d)=>{ top(d.node)}}
        >
            <Block />

        </Rnd>

        <Rnd
            default={{
                x: 50,
                y: 300,
                width: 320,
                height: 220
            }}
            minHeight={220}
            minWidth={320}
            className="Steueu"
            onDragStart={(e,d)=>{ top(d.node)}}

        >
            <Block />

        </Rnd>

        <Rnd
            default={{
                x: 50,
                y: 300,
                width: 320,
                height: 220
            }}
            minHeight={220}
            minWidth={320}
            className="Steueu"
            onDragStart={(e,d)=>{ top(d.node)}}

        >
            <Block />

        </Rnd>

    </div>
);


