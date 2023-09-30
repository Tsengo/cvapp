import React from "react";
import "../../../App.css";

import "./about.css";

interface MySmallBioList {
    birthday: any;
    phoneNumber: string;
    city: any;
    age: number;
    email: String;
}

const MySmallBio: MySmallBioList[] = [
    {
        birthday: '11 Nov 1998',
        phoneNumber: '+995 555 568 831',
        city: 'Tbilisi/GEO',
        age: 24,
        email: 'niktsenguashvili@gmail.com'
    }
]

const BioList:React.FC = () => {

    return (
        <div className="small-res row">
            {MySmallBio.map((data) => (
                <>
                <ul className="column">
                    <li>{data.birthday}</li>
                    <li>{data.phoneNumber}</li>
                    <li>{data.city}</li>
                </ul>
                <ul className="column">
                    <li>{ data.age }</li>
                    <li>{ data.email }</li>
                </ul>
                </>
            ))}
        </div>
    )
};
export default BioList;