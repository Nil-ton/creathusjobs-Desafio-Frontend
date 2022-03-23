import { WrapperHeader } from "./style"
import LogoImg  from '../../assets/logo.png'

export function Header() {
    return (
        <WrapperHeader>
            <div className="logo" data-testid = 'logo'>
                <img src={LogoImg} alt="imagem de uma caixa com as cores azul e laranja" />
                <h2>OCEAN</h2>
            </div>


            <nav>
                <ul>
                    <li>Trilhas</li>
                    <li>Cursos</li>
                    <li>Agenda</li>
                </ul>
            </nav>


            <div className="entra-cadastro">
                <a>Entrar/Cadastro</a>
            </div>
        </WrapperHeader>
    )
}