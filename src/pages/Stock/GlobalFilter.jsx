import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
    }, 300);
    return (
        <span>
            {""}
            <input
                className='border border-gray-400 w-full h-full p-3 rounded-md'
                value={value}
                placeholder='Search...'
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                type='text'
            />
        </span>
    );
};