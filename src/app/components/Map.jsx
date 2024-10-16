import React from 'react';

export default function Map() {
  return (
    <div>
        <iframe width={'700'} height={'575'}
            className='mapIframe'
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyC1hzu_7A1GKcCE4xZnei9tHlEu2fppEWs" 
                + "&q=38.932213783839195, -92.39828897420644"
                + "&zoom=20"}>
        </iframe>
    </div>
  );
}

