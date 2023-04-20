import { useEffect, useState } from "react";
import { People } from "../../types/People";
import { characters } from "../../services/Api";
import './styles.modules.scss'

export default function Content() {

    const [produto, setProduto] = useState<People[]>([]);

    useEffect(() => {
        characters(setProduto)

        console.log(produto)
    }, []);


    return (

        <>
            <div className="bloco-content">
                {

                    produto.map((characters, index) => (
                        <div key={index} className="char">
                            <img src={characters.image} alt={characters.name} title={characters.name} className="characters-img" />
                            <p className="characters">Personagem: {characters.name}</p>

                            <p className="characters">Data: {characters.dateOfBirth}</p>
                            <p className="characters">Nome: {characters.actor}</p>
                            <p className="characters">Vivo: {characters.alive}</p>
                            <p className="characters">Patronus: {characters.patronus}</p>
                            <p className="characters">Casa: {characters.house}</p>

                        </div>

                    ))
                }

            </div>
        </>
    )
}
