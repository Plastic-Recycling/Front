import React from 'react';

export function Recycle() {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 bg-no-repeat bg-center"
                 style={{
                     backgroundImage: "url('/src/assets/pp.webp')",
                     backgroundSize: 'contain'
                 }}>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start">
                <div className="text-white p-5 lg:p-10" style={{marginLeft: '5%', marginBottom: '5%'}}>
                    <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4">재활용</h1>
                    <p className="text-lg md:text-xl lg:text-2xl">재활용품 이미지를 환경부 분리배출 기준에 따라 분류했습니다.<br />
                        이미지 수집 단계에서 다양한 조건의 환경에서도 재활용품을 정확하게 분류하기 위해<br />여러 환경과 조건에서 원천 데이터를 수집하는데 중점을 두었습니다.</p>
                </div>
            </div>
        </div>
    );
}