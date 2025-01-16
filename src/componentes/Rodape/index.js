import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/paulo-hds/" target="_blank" rel="noreferrer">
                        <img src="/Imagens/linkedin.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/PHS-informatica" target="_blank" rel="noreferrer">
                        <img src="/Imagens/github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/phsinformatica.tec" target="_blank" rel="noreferrer">
                        <img src="/Imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/Imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido PHS-Informatica & Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape