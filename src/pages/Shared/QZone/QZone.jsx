import React from 'react';
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
    return (
        <div className="bg-secondary bg-opacity-10 mt-4">
            <h4 className="pt-3 ps-3 mb-3">Q-Zone</h4>
            <div className="text-center mt-2 pb-3">
                <img src={qzone1} alt=""/>
                <img src={qzone2} alt=""/>
                <img src={qzone3} alt=""/>
            </div>
        </div>
    );
};

export default QZone;