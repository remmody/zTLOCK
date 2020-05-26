import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Rnd } from "react-rnd";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        </p>
    </div>

);

const hide = {visibility: 'hidden'}
const scroll = {
    overflowY: 'auto',
    height: '300px'
}

function top(element) {

    let ass = document.getElementsByClassName('Steueu');
    for (let item of ass) {
        item.style.zIndex = '1'
    }

    element.style.zIndex = '999';

}

function show(id) {
    let butt = document.getElementById(id);
    if (butt.style.visibility === 'hidden') {

        butt.style.visibility = 'visible';

    } else {butt.style.visibility = 'hidden';}

}

function disableDrag(id) {

    //let butt = document.getElementById(id);
    //alert( butt.classList);
}

let fuckinshit = (
    <Rnd
        id = 'testing'
        default={{
            x: 50,
            y: 50,
            width: '320px',
            height: '400px'
        }}
        className="Steueu"
        minHeight={220}
        minWidth={320}
        enableResizing={false}
        overInput={false}
        onDragStart={(e,d)=>{ top(d.node)}}
        onResizeStop={(e, dir, elementRef, delta) => {
            let zuo = document.getElementById('yui');
            let hInt = (parseInt(zuo.style.height.slice(0,-2), 10))
            //alert(`${hInt} ${delta.height}`);
            //let hInt = parseInt(h, 10);

            //zuo.style.height = `${hInt + delta.height}px`;


        }}
    >
        <div>
            <div className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <h2><code>> It's a test window</code></h2>
            </div>

            <p className="App-intro" id = 'yui' style={scroll}>
                <code>
                    >> It's a select </code>
                <select>
                    <option value='default' selected>1</option>
                    <option value='non-default'>2</option>
                    <option value='non-default'>3</option>
                </select><br/>
                <code>
                    <i>-- Some strange description</i><br/><br/>
                </code>
                <code>
                    >> It's a checkbox </code>
                <input type="checkbox"></input><br/>
                <code>
                    <i>-- Some strange description</i><br/><br/>
                </code>
                <code>
                    >> It's a range </code>
                <input type="range"></input><br/>
                <code>
                    <i>-- Some strange description</i><br/><br/>
                </code>
                <br/><br/>

                <a className="testbutton"
                   onClick = {(e) => show('testtest', e)}>
                    Test key
                </a>
            </p>
        </div>

    </Rnd>
);

export default () => (



    <div>

        ${fuckinshit}

        <Rnd id = 'testtest'
            style={hide}
            default={{
                x: 50,
                y: 300,
                width: 320,
                height: 220
            }}
            minHeight={220}
            minWidth={320}
        >
            <Block />

        </Rnd>

        {/*<div className="menu-button"></div>
        <div className="menu"></div>*/}



    </div>


);


