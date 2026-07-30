function ItemCardapio(props) {
    return (
        <li className="card-item">
            <img src={props.imagem} alt={props.nome} className="imagem-item" />
            <h3>{props.nome}</h3>
            <p className="preco">R$ {props.preco.toFixed(2)}</p>
            <p className="descricao">{props.descricao}</p>
        </li>
    );
}

export default ItemCardapio;