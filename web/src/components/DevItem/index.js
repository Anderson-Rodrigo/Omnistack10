import React from 'react'
import './styles.css'

function DevItem({ dev }) {
    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.nome}/>
                <div className="user-info">
                <strong>{dev.nome}</strong>
                <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
            <div className="input-group">
              <div className="input-block"> 
                <button onClick={dev.editar} id="editar">Editar</button>
              </div>
              <div className="input-block">
                <button onClick={dev.excluir} id="excluir">Excluir</button>
              </div>
            </div>
        </li>
    )
}

export default DevItem