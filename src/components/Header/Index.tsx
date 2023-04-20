import React, { useState } from 'react'
import Logo from './img/Logo.png'
import { FaSearch } from "react-icons/fa";
import './styles.modules.scss'
export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const search = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value)
      };

    return (
        <>
            <div className='bloco-header'>

                <div className='container-header'>
                    <img src={Logo} alt="Logo da página" className='header-logo' />
                    <div className='bloco-search'>
                        <input type="text" placeholder='Digite um nome...' className='search-home' value={searchTerm}  onChange={search}/>

                        <FaSearch className='icon-search' />
                    </div>
                </div>
            </div>
        </>
    )
}
