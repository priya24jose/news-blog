import React from 'react';
import './news-item.styles.scss';

const NewsItem = ({title,imageUrl}) => (
        <div className='news-item'>
              
            <div className='content'>
                    <div style={{
        Image: `url(${imageUrl})`
    }} className='picture-container'></div> 
                    <h1 className='title'>{title}</h1>
                 
                    </div>
               
                    
            </div>

)
export default NewsItem;