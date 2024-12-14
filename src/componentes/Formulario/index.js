
import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";


const Formulario = (props) => {
  

const [nome, setNome] = useState("");
const [cargo, setCargo] = useState("");
const [imagem, setImagem] = useState("");
const [time, setTime] = useState("");

    const submit = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });

        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={submit} >
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome:" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={setNome} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo:" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={setCargo}
                />
                <CampoTexto 
                    label="Imagem:" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={setImagem}
                
                />
                <ListaSuspensa 
                    label="Time" 
                    itens ={props.nomeDosTimes}  
                    valor={time}
                    aoAlterado={valor=>setTime(valor)}
                />
                <Botao>
                  Criar card  
                </Botao> 
            </form>
        </section>
    );
}

export default Formulario;