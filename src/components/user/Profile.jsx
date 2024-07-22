import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import axiosInstance from "/src/api/axiosInstance.jsx";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Profile = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.post('/recycle/profile');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError('데이터를 불러오는 데 실패했습니다.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;
    if (!data) return <div>데이터가 없습니다.</div>;

    const totalCount = data.plasticCounts.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = data.prices.reduce((sum, item) => sum + item.price, 0);
    const totalWeight = data.weights.reduce((sum, item) => sum + item.weight, 0);
    const totalCarbonReduction = data.carbonReductions.reduce((sum, item) => sum + item.reduction, 0);

    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="text-2xl font-bold mb-4">프로필 페이지</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">플라스틱 종류별 개수</h2>
                    <p className="mt-2">총 개수: {totalCount}</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.plasticCounts}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="count" fill="#8884d8"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">플라스틱 종류별 가격</h2>
                    <p className="mt-2">총 가격: {totalPrice}원</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.prices}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="price" fill="#82ca9d"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">플라스틱 종류별 무게</h2>
                    <p className="mt-2">총 무게: {totalWeight}kg</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.weights}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="weight" fill="#ffc658"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">플라스틱 종류별 탄소 배출 절감량</h2>
                    <p className="mt-2">총 탄소 배출 절감량: {totalCarbonReduction.toFixed(2)}kg</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data.carbonReductions}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="reduction"
                            >
                                {data.carbonReductions.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                            <Legend/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Profile;