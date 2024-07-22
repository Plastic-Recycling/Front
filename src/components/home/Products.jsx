import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const products = [
    {
        plasticCounts: [
            {name: 'PP', count: 275632526},
            {name: 'PS', count: 286565885},
            {name: 'PE', count: 213463586},
        ],
        prices: [
            {name: 'PP', price: 275632526*517.6},
            {name: 'PS', price: 286565885*910.8},
            {name: 'PE', price: 213463586*641.2},
        ],
        weights: [
            {name: 'PP', weight: 275632526*18},
            {name: 'PS', weight: 286565885*12},
            {name: 'PE', weight: 213463586*15},
        ],
        carbonReductions: [
            {name: 'PP', reduction: 275632526*18*3.2},
            {name: 'PS', reduction: 286565885*12*2.9},
            {name: 'PE', reduction: 213463586*15*3.5},
        ],
    }
];

const productData = products[0];

const totalCount = productData.plasticCounts.reduce((sum, item) => sum + item.count, 0);
const totalPrice = productData.prices.reduce((sum, item) => sum + item.price, 0);
const totalWeight = productData.weights.reduce((sum, item) => sum + item.weight, 0);
const totalCarbonReduction = productData.carbonReductions.reduce((sum, item) => sum + item.reduction, 0);


export function Products() {
    return (
        <div className="bg-white">
            <div className="container mx-auto p-4 mt-20">
                <h1 className="text-2xl font-bold mb-4">자원순환 성과</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">회수된 플라스틱 종류별 개수</h2>
                        <p className="mt-2">총 개수: {totalCount}</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={productData.plasticCounts}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="count" fill="#8884d8"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">재활용된 플라스틱 종류별 금액</h2>
                        <p className="mt-2">총 가격: {totalPrice}원</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={productData.prices}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="price" fill="#82ca9d"/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">재활용된 플라스틱 종류별 무게</h2>
                        <p className="mt-2">총 무게: {totalWeight}kg</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={productData.weights}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
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
                                    data={productData.carbonReductions}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="reduction"
                                >
                                    {productData.carbonReductions.map((entry, index) => (
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
        </div>
    );
}