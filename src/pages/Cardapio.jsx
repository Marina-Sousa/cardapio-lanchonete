import ItemCardapio from '../components/ItemCardapio';

const cardapio = [
    { id: 1, categoria: "Lanches", nome: "X-Burger", preco: 18.0, descricao: "Pão, carne, queijo, salada e molho", imagem: "/images/x-burger.jpg" },
    { id: 2, categoria: "Lanches", nome: "Cachorro-Quente", preco: 12.0, descricao: "Pão, salsicha, molho e batata palha", imagem: "/images/cachorro-quente.jpg" },
    { id: 3, categoria: "Bebidas", nome: "Suco Natural", preco: 8.0, descricao: "Laranja ou limão", imagem: "/images/suco.jpg" },
    { id: 4, categoria: "Bebidas", nome: "Refrigerante", preco: 6.0, descricao: "Lata 350ml", imagem: "/images/refrigerante.jpg" },
    { id: 5, categoria: "Bebidas", nome: "Água Mineral", preco: 4.0, descricao: "500ml", imagem: "/images/agua.jpg" },
    { id: 6, categoria: "Sobremesas", nome: "Pudim", preco: 9.0, descricao: "Fatia individual", imagem: "/images/pudim.jpg" },
    { id: 7, categoria: "Sobremesas", nome: "Sorvete", preco: 10.0, descricao: "Duas bolas, sabor à escolha", imagem: "/images/sorvete.jpg" },
];

const categorias = ["Lanches", "Bebidas", "Sobremesas"];

function Cardapio() {
    return (
        <div>
            <h1 className="titulo-pagina">Lanchonete BomGosto</h1>
            <p className="boas-vindas">
                Seja bem-vindo(a) à Lanchonete BomGosto! Confira nosso cardápio abaixo.
            </p>

            {categorias.map((categoria) => (
                <div key={categoria}>
                    <h2 className="titulo-categoria">{categoria}</h2>
                    <ul className="grid-cardapio">
                        {cardapio
                            .filter((item) => item.categoria === categoria)
                            .map((item) => (
                                <ItemCardapio
                                    key={item.id}
                                    nome={item.nome}
                                    preco={item.preco}
                                    descricao={item.descricao}
                                    imagem={item.imagem}
                                />
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Cardapio;