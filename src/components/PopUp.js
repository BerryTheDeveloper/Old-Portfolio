import React from "react";

const PopUp = ({ formIsSuccess }) => {
    return (
        <div
            className={`border-2 ${
                formIsSuccess ? "bg-green-100" : "bg-red-100"
            } border-white pl-4 pr-8 py-3 rounded fixed top-3 left-1/2 transform -translate-x-1/2 z-30 flex`}
            role="alert">
            <span className="block">
                {!formIsSuccess ? (
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#EF4444">
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                ) : (
                    <svg
                        className="h-6 w-6 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            fill="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
            </span>
            <div className="text-center pl-2">
                <strong className="text-black font-bold">
                    {formIsSuccess ? "Good Job! " : "Brbrbr! "}
                </strong>
                <span className="text-black">
                    {formIsSuccess
                        ? "Everything went well!"
                        : "Something seriously went wrong."}
                </span>
            </div>
        </div>
    );
};

export default PopUp;
