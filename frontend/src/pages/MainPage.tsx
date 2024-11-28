
import React from "react";
import InputInfo from "../components/InputInfo.tsx";
import TableInfo from "../components/TableInfo.tsx";
import './styles.css'

const MainPage: React.FC = () => {
    return (
        <div className='Main_Container'>
            <div className="Container">
                <InputInfo/>
                <TableInfo/>
            </div>
        </div>
    )
}
export default MainPage;