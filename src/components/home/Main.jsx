import React from 'react';
import mainImage from '/src/assets/main.png';

export function Main() {
    return (
        <div className="relative w-full h-screen bg-cover bg-center"
             style={{backgroundImage: `url(${mainImage})`}}>
        </div>
    );
}