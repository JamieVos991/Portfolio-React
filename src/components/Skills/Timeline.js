import React from 'react'
import "./Timeline.css";
import Footer from "../Footer/Footer";

function Timeline() {
  return (
    <>
    <div class="timeline">
        <div class="outer">
            <div class="timeline__card">
                <div class="info">
                    <h3 class="title"> 2010</h3>
                    <p>I’ve been designing with computers since the day I first opened Microsoft Paint. The cusp of art and technology has always fascinated me and I've never been afraid to just jump in and give it a go, whether it's Paint, Photoshop, Sketch or CSS.</p>
                </div>
            </div>
            <div class="timeline__card">
                <div class="info">
                    <h3 class="title">2019-2020</h3>
                    <p>Fast forward to 2019 and I’ve tried it all, from Digital Campaign Design and Flash Actionscript to Web Design, Animation and HTML/CSS/JS, to Product Design and Product Management. Everything I have done, small or big, has been a vital stepping stone for where I am today: A almost graduated web developer student.
                    </p>
                </div>
            </div>
            <div class="timeline__card">
                <div class="info">
                    <h3 class="title">2020-2021</h3>
                    <p>
                        I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, React, Vue, Angular, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                    </p>
                </div>
            </div>
            <div class="timeline__card">
                <div class="info">
                    <h3 class="title">2021-2022</h3>
                    <p>
                        I also have full-stack developer experience with popular open-source CMS like (WordPress, Laravel, Magento, Keystone.js and others) .
                    </p>
                </div>
            </div>
            <div class="timeline__card">
                <div class="info">
                    <h3 class="title">2023</h3>
                    <p>These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Timeline