import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axiosInstance from "/src/api/axiosInstance.jsx";

const ImageUploadAnalysis = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [analysisResults, setAnalysisResults] = useState([]);

    const onDrop = useCallback(async (acceptedFiles) => {
        setUploadedImages(acceptedFiles.map(file => URL.createObjectURL(file)));

        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append('file', file);
        });

        try {
            const response = await axiosInstance.post('/recycle/detection', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setAnalysisResults(response.data);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });

    const decodeBase64Image = (base64String) => {
        return `data:image/jpeg;base64,${base64String}`;
    };

    return (
        <div className="container mx-auto p-4 mt-20">
            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer mb-4"
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>여기에 이미지들을 놓으세요...</p>
                ) : (
                    <p>이미지들을 드래그 앤 드롭하거나 클릭하여 선택하세요</p>
                )}
            </div>

            {uploadedImages.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">이미지 분석 결과</h2>
                    {uploadedImages.map((image, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-lg font-semibold mb-2">이미지 {index + 1}</h3>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <h4 className="text-md font-semibold mb-2">업로드된 이미지</h4>
                                    <img src={image} alt={`Uploaded ${index + 1}`} className="max-w-full h-auto rounded shadow" />
                                </div>
                                {analysisResults[index] && (
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <h4 className="text-md font-semibold mb-2">처리된 이미지</h4>
                                        <img
                                            src={decodeBase64Image(analysisResults[index].processedImage)}
                                            alt={`Processed ${index + 1}`}
                                            className="max-w-full h-auto rounded shadow"
                                        />
                                    </div>
                                )}
                            </div>

                            {analysisResults[index] && (
                                <div className="mt-4">
                                    <h4 className="text-md font-semibold mb-2">분석 결과</h4>
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 p-2">속성</th>
                                            <th className="border border-gray-300 p-2">값</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-2">파일 이름</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].fileName}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">파일 타입</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].fileType}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">파일 크기</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].fileSize} bytes</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">종류</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].type}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">무게</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].weight} g</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">탄소 배출 절감량</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].carbonReduction} g</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-2">가격</td>
                                            <td className="border border-gray-300 p-2">{analysisResults[index].price} 원</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageUploadAnalysis;