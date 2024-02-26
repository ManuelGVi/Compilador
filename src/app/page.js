'use client'
import React, { useState } from 'react';
import { analizar } from './module/generator';

const CompilatorPage = () => {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
        setError('');
    };

    const handleCheckClick = () => {
        try {
            const resultado = analizar(inputText);
            if (resultado.error) {
                setError(resultado.error);
            } else {
                setError(''); // Limpiar el error si no hay ninguno
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const lines = inputText.split('\n').map((line, index) => (
        <div key={index} className="flex">
            <div className="text-gray-500 mr-2">{index + 1}</div>
            <div>{line}</div>
        </div>
    ));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Declaración de variables</h1>
            <div className="flex">
                <div className="w-16 text-right mr-4">
                    {Array.from({ length: inputText.split('\n').length }, (_, index) => (
                        <div key={index} className="text-gray-500">{index + 1}</div>
                    ))}
                </div>
                <textarea
                    className="w-full h-40 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Ingrese las declaraciones"
                />
            </div>
            
            <button
                className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleCheckClick}
            >
                Comprobar
            </button>

            {/* Mostrar errores si existen */}
            {error && (
                <div className="mt-4 text-red-500">
                    Error: {error}
                </div>
            )}
        </div>
    );
};

export default CompilatorPage;
