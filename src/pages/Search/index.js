import { useEffect, useState } from 'react';
import './Search.scss';
import { IoIosSearch } from "react-icons/io";
import { searchUser } from '../../services/userService';
function Search() {

    const [params, setParams] = useState('');

    const [users, setUsers] = useState([]);

    const handleParams = (e) => {
        if (e.key === 'Enter') {
            setParams(e.target.value);
        }
    }

    console.log(params);

    useEffect(() => {
        const fetchApi = async (params) => {
            const result = await searchUser(params);
            setUsers(result);
        }
        fetchApi(params);
     },[params]);
    
    // có result sẽ vẽ ra giao diện 

    return (
        <>
            <div className="layout-search">
                <div className="container">
                    <IoIosSearch />
                    <div className="search">
                        <input onKeyDown={handleParams} type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;
