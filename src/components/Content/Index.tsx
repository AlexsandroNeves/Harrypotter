import { useEffect, useState } from "react";
import { People } from "../../types/People";
import { characters } from "../../services/Api";
import './styles.modules.scss'

export default function Content() {

    const [char, setChar] = useState<People[]>([]);

    useEffect(() => {
        characters(setChar)
    }, []);

    return (
        <>
            <div className="bloco-content">
                {
                    char.map((characters, index) => (
                        <div key={index} className="char">
                            <img src={characters.image} alt={characters.name} title={characters.name} className="characters-img" />
                            <p className="characters">Personagem: {characters.name}</p>
                            <p className="characters">Data: {characters.dateOfBirth}</p>
                            <p className="characters">Nome: {characters.actor}</p>
                            <p className="characters">Patronus: {characters.patronus}</p>
                            <p className="characters">Casa: {characters.house}</p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}
