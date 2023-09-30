import React from "react";

interface MyName {
    name: string;
}

const My_name:React.FC<MyName> = ({name}) => { 
    return (
        <h2>{ name }</h2>
    )
}
export default My_name;