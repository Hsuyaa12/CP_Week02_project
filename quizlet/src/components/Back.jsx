import React from "react";

const Back = (props) => {
    const { content } = props; 


    const isImageAnswer = typeof content === 'object' && content !== null && 'src' in content;

    return(
        <div className='back-card'>
            {isImageAnswer ? (
                
                <img
                    src={content.src}
                    alt={content.alt || 'AI related image'}
                    style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain' }}
                />
            ) : (
                <p>{content}</p>
            )}
        </div>
    )
}

export default Back;