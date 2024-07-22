import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axiosInstance from "/src/api/axiosInstance.jsx";

const ImageUploadAnalysis = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setUploadedImage(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axiosInstance.post('/recycle/detectionTest', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setAnalysisResult(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="container mx-auto p-4 mt-20">
            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer mb-4"
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>여기에 이미지를 놓으세요...</p>
                ) : (
                    <p>이미지를 드래그 앤 드롭하거나 클릭하여 선택하세요</p>
                )}
            </div>

            {uploadedImage && (
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">이미지 분석 결과</h2>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4">
                            <h3 className="text-lg font-semibold mb-2">업로드된 이미지</h3>
                            <img src={uploadedImage} alt="Uploaded" className="max-w-full h-auto rounded shadow" />
                        </div>
                        {analysisResult && (
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <h3 className="text-lg font-semibold mb-2">처리된 이미지</h3>
                                <img src={analysisResult.processedImage} alt="Processed" className="max-w-full h-auto rounded shadow" />
                            </div>
                        )}
                    </div>

                    {analysisResult && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">분석 결과</h3>
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
                                    <td className="border border-gray-300 p-2">{analysisResult.fileName}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">파일 타입</td>
                                    <td className="border border-gray-300 p-2">{analysisResult.fileType}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">파일 크기</td>
                                    <td className="border border-gray-300 p-2">{analysisResult.fileSize} bytes</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">종류</td>
                                    <td className="border border-gray-300 p-2">{analysisResult.type}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">무게</td>
                                    <td className="border border-gray-300 p-2">{analysisResult.weight} kg</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">탄소 배출 절감량</td>
                                    <td className="border border-gray-300 p-2">{analysisResult.carbonReduction} kg</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2">가격</td>
                                    <td className="border border-gray-300 p-2">{analysisResult.price} 원</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageUploadAnalysis;