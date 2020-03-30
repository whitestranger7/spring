import React from 'react';

const pageNotFound = () => {
    const styles = {
        position: 'absolute',
        textAlign: 'center',
        textTransform: 'uppercase',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };

    return (
        <div style={styles}>
            Ooops... Couldn't find that path, sorry{' '}
            <span role='img' aria-label='sad'>
                😞
            </span>
        </div>
    );
};

export default pageNotFound;
