import { useState } from "react";

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [enviado, setEnviado] = useState(false);

    function aoEnviar(e) {
        e.preventDefault();
        setEnviado(true);
    }

    return (
        <form onSubmit={aoEnviar} className="formulario" >
            <input
                type="text"
                placeholder="Digite seu nome"
                className="campo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="email"
                placeholder="Digite seu e-mail"
                className="campo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="botao-enviar">Enviar</button>
            {enviado && <p>Obrigado, {nome}! Entraremos em contato pelo e-mail: {email}</p>}
        </form>
    );
}

export default Contato;