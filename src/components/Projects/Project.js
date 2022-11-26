import React from 'react'
import { useState } from 'react';
import Modal from "react-overlays/Modal";

const Project = (props) => {
    
    const [showModal, setShowModal] = useState(false);

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);
  
    var handleSuccess = () => {
      console.log("success");
    };

    return (
        <>

        <div class="card">
            <div class="card__background" onClick={() => setShowModal(true)} style={{ backgroundImage: `url(${props.img})` }}>
                <div class="card-info">
                    <i class={props.fa1} ></i>
                    <i class={props.fa2} ></i>
                    <i class={props.fa3} ></i>
                </div>
            </div>
        </div>

        <Modal className="modal" show={showModal} onHide={handleClose} renderBackdrop={renderBackdrop}>
            <div className="model-gap">
                <div className="model-show">
                    <div className="modal-header">
                        <div className="model-opdracht">School opdracht</div>
                        <div className="modal-title">
                            <h1>{props.title}</h1>
                        </div>
                        <div className="model-time">🕒 1 week</div>
                        <div className="model-skills-title">Skils</div>
                        <div className="model-skills">
                            <div className="model-html">{props.skill}</div>
                            <div className="model-html">{props.skill2}</div>
                            <div className="model-html">{props.skill3}</div>
                            <div className="model-html">{props.skill4}</div>
                        </div>
                        <div className="model-button">View Project</div>
                    </div>
                </div>
                <div className="model-show-2">
                    <div className="modal-header">
    
                    </div>
                    <div className="modal-desc">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid debitis, exercitationem maiores alias ut expedita soluta eos illo, cumque facilis cupiditate dolores ipsa dolor praesentium voluptate esse libero placeat nobis!</p>
                    </div>
                </div>
            </div>
        </Modal>    
        </>
    )
 }

export default Project;