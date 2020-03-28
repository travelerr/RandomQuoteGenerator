import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow() {
    return(
        <div style={{
            position: 'absolute',
            bottom: '5px',
            left: '10px'
          }}>
            <a
                href='https://twitter.com/intent/tweet'
                className='twitter social twitter-share-button'
                
            >
                <FontAwesomeIcon icon={faTwitter} size='2x' />
            </a>
        </div>
    );
}