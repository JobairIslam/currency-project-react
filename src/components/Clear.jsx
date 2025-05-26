import React from 'react'

const Clear = ({
    setAmount,
    setConvertedAmount
}) => {

    const handleClear =()=> {
        setAmount(0);
        setConvertedAmount(0)
    }

    return (
        <button type="button" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
        onClick={handleClear}
        >
            Clear
        </button>
    )
}

export default Clear