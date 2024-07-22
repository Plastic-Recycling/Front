import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="h-screen relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/src/assets/about/main.jpg" alt="main" />
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16 mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-slate-700">내가 하는 작은 행동이<br />맑고 푸른 세상을 만들 수 있도록<br />지속 가능한 미래를 위해 우리 모두의 노력이 필요합니다.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="border-t-emerald-700 border-t-4 p-4">
                            <h3 className="text-2xl font-semibold mb-4 text-slate-700">자원순환을 통한 가치의 극대화</h3>
                            <p className="text-slate-600 font-bold text-sm leading-relaxed">
                                자원순환은 단순한 재활용을 넘어, 환경 보호와 경제 성장을 동시에 실현하는 중요한 열쇠입니다.
                                 우리가 버리는 물건들이 새로운 자원으로 탈바꿈할 때, 쓰레기 문제를 해결할 뿐만 아니라 경제적 가치도 창출할 수 있습니다.
                                 모두가 함께 노력하면, 깨끗한 지구와 지속 가능한 사회를 만들어갈 수 있습니다.
                                 자원순환을 통해 우리의 미래를 더 밝고 풍요롭게 만들어보세요.
                            </p>
                        </div>
                        <div className="border-t-emerald-700 border-t-4 p-4">
                            <h3 className="text-2xl font-semibold mb-4 text-slate-700">지속 가능한 자원 활용</h3>
                            <p className="text-slate-600 font-bold text-sm leading-relaxed">
                                자원의 지속 가능한 활용은 우리의 일상을 더 편안하고 건강하게 만듭니다.
                                 작은 실천으로 환경을 보호하고 경제적 부담도 줄일 수 있습니다.
                                 일회용품 대신 재활용, 친환경 제품을 선택하세요. 우리의 노력으로 더 나은 미래를 만들어갑니다.
                                 지속 가능한 자원 활용, 지금 바로 시작하세요!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-slate-700">우리는 지금도 나아가고 있습니다.</h2>
                    <div className="space-y-8 text-slate-600 font-bold">
                        {[
                            {
                                year: 2024, events: [
                                    {month: '07월', description: '플라스틱 재활용 아이디어 공모전'},
                                    {month: '03월', description: '플라스틱 재활용 아트 전시회'},
                                    {month: '01월', description: '플라스틱 사용 줄이기 캠페인'},
                                ]
                            },
                            {
                                year: 2023, events: [
                                    {month: '10월', description: '플라스틱 수거 챌린지'},
                                    {month: '07월', description: '연제구 재활용 플라스틱 수거함 30대 설치'},
                                    {month: '03월', description: '재활용 공예 워크숍'},
                                ]
                            },
                            {
                                year: 2022, events: [
                                    {month: '11월', description: '플라스틱 재활용품 나눔 이벤트'},
                                    {month: '09월', description: '나무 심기 행사'},
                                    {month: '05월', description: '해변 청소 활동'},
                                    {month: '02월', description: 'Plastic-Recycle 시작'},
                                ]
                            },
                        ].map((yearData, index) => (
                            <div key={index} className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-2xl font-bold mb-4">{yearData.year}</h3>
                                <ul className="space-y-4">
                                    {yearData.events.map((event, eventIndex) => (
                                        <li key={eventIndex} className="flex">
                                            <span className="font-semibold w-20">{event.month}</span>
                                            <span>{event.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-700">소셜미디어</h2>
                    <div className="flex justify-center space-x-8">
                        <div className="w-16 h-16 bg-green-500 flex items-center justify-center rounded-lg">
                            <img className="rounded-md" src="/src/assets/about/naver.png" alt="naver" />
                        </div>
                        <div className="w-16 h-16 bg-purple-500 flex items-center justify-center rounded-lg">
                            <img className="rounded-md" src="/src/assets/about/insta.png" alt="insta"/>
                        </div>
                        <div className="w-16 h-16 bg-red-500 flex items-center justify-center rounded-lg">
                            <img className="rounded-md" src="/src/assets/about/youtube.png" alt="youtube"/>
                        </div>
                        <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center rounded-lg">
                            <img className="rounded-md h-full" src="/src/assets/about/kakao.png" alt="kakao"/>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-100 py-6 text-center">
                <p>© 2024 Plastic-Recycle. All rights reserved.</p>
            </footer>
        </div>

    );
};

export default About;