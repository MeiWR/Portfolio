import React from "react";
import PropTypes from "prop-types";


const videoYt = ({ embedId }) => (
        <div className="videoYt">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
        
); 

videoYt.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default videoYt;


//src="https://www.youtube.com/embed/4HATR9TAmvM?si=olmGg8KYkeFlMBuW"