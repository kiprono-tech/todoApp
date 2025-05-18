import React, { Component } from "react";
import Me from "../../utils/img/me.jpg"
import { facebook, linkedin, twitter, instagram } from "../../utils/icons";
class Card extends Component {
    render() {
        return (
            <div id="v-card-holder" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div id="v-card" className="card">

                                <div id="profile" className="right">
                                    <img alt="me" className="img-responsive" src={Me} />
                                    <div className="slant"></div>



                                </div>

                                <div className="card-content">

                                    <div className="info-headings">
                                        <h4 className="text-uppercase left">Vincent Kiprono</h4>
                                        <h6 className="text-capitalize left">Front End & Back End Developer</h6>
                                    </div>

                                    <div className="infos">
                                        <ul className="profile-list">
                                            <li className="clearfix">
                                                <span className="title"><i className="material-icons">email</i></span>
                                                <span className="content">kiprono.tech@gmail.com</span>
                                            </li>
                                            <li className="clearfix">
                                                <span className="title"><i className="material-icons">language</i></span>
                                                <span className="content">https://github.com/kiprono-tech</span>
                                            </li>
                                            <li className="clearfix">
                                                <span className="title"><i className="material-icons">phone</i></span>
                                                <span className="content">+254 _______</span>
                                            </li>
                                            <li className="clearfix">
                                                <span className="title"><i className="material-icons">place</i></span>
                                                <span className="content">Nairobi, Kenya</span>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="links">
                                        <a href="https://www.facebook.com/kiprono-tech.18" id="first_one"
                                            className="social btn-floating indigo">
                                            <i className="icon" dangerouslySetInnerHTML={{ __html: facebook }}></i>
                                        </a>
                                        <a href="https://twitter.com/kiprono-tech" className="social  btn-floating blue">
                                            <i className="icon" dangerouslySetInnerHTML={{ __html: twitter }}></i>

                                        </a>

                                        <a href="https://www.linkedin.com/in/vincentkiprono/" className="social  btn-floating blue darken-3">
                                            <i className="icon" dangerouslySetInnerHTML={{ __html: linkedin }}></i>

                                        </a>


                                        <a href="https://www.instagram.com/kiprono_tech/" className="social  btn-floating blue ins">
                                            <i className="icon" dangerouslySetInnerHTML={{ __html: instagram }}></i>

                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
