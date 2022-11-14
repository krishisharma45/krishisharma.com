import '../styles.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { ReactComponent as Home } from '../home.svg';
import { ReactComponent as Link } from '../link.svg';


const CopyToClipboard = toCopy => {
    const el = document.createElement(`textarea`)
    el.value = toCopy
    el.setAttribute(`readonly`, ``)
    document.body.appendChild(el)
    el.select()
    document.execCommand(`copy`)
    document.body.removeChild(el)
  }

export default class Thoughts extends Component {
    render() {
        return (
            <div className="Content">
                <a href="./" className="HomeIcon"><Home/></a>
                <Nav/>
                <div className="Title">
                    Honest Thoughts
                </div>
                <div className="Subtitle">musings from everyday life. consume responsibly.</div>
                <p>There’s something so freeing about the Marble composition notebook. For me, it evokes memories of back to school shopping, when the excitement of buying school supplies always surpassed the enthusiasm of actually using them. <br></br><br></br>In adulthood, it provides additional comfort. Its simplicity allows me to be imperfect. I don’t have to have the fear of ruining a beautiful sketch book or expensive journal. <br></br><br></br>As I try to overcome the anxiety of sharing my thoughts and creative work, I realize the need for more marble composition books. <br></br><br></br>So, welcome to my virtual marble composition book. For anyone who chooses to continuing reading through: <br></br><br></br>Expect imperfection.</p><br></br>
                <hr></hr>
                <h3>Fear, My Frenemy<span className="CopyLink" onClick={() => {CopyToClipboard(window.location.href)}}><Link/></span></h3>
                <p>Growing up, I was taught that fear is a negative experience that I should actively confront or overcome. Don’t be afraid. Fear is irrational. <br></br><br></br>As a kid, my fears started small. They were more about external stimuli. I think about this kind of fear more like a cuddly monster. Think Sully from Monsters Inc. Cute, but harmless. My experiences in life started changing the shape of fear. What was once a harmless, cuddly monster evolves into Slenderman. All of sudden my list of fears grew from something benign like fear of dogs to fear of failure, which became fear of trying new things, which became fear of the unknown. <br></br><br></br>Slenderman fear was way worse than Sully fear because Slenderman fear fed on my dreams, hope and growth. It impeded me from being honest with myself with its greatest weapon: shame. Shame and Slenderman became this supervillain that I ended up spending a lot more time dealing with than Sully, who now doesn’t look too bad. <br></br><br></br>For a long time, I let Slenderman trample the artist inside, suffocating her from public view, afraid of well... everything. Failure, judgment, imperfection, friends, communication, sunlight, air.<br></br><br></br>Needles to say, it sucked ass.<br></br><br></br>Some time and introspection later, I’ve realised just how much I’ve let this supervillain dictate my life and career. And because I’m no master at defeating supervillains, I’ve taken it upon myself to befriend it and embrace my relationship with my fears. These days, I try to do something that scares me. I read books I don’t think I’ll like, try new foods, travel to places outside my comfort zone and most importantly, push myself to create. Something. Anything. It doesn’t matter. It can suck, but I’ve understood that it’s ok if it does. <br></br><br></br>In doing so, I turned fear from a negative experience to a positive experience. Slenderman and I are friends more often than we are enemies, and I wouldn’t have it another way.</p>
                <h3>Futures Fall Midflight</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h3>Biases Come From Somewhere</h3>
                <p className="LastEntry">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            );
    }
}