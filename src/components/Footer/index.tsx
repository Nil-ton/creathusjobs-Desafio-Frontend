import LogoImg from '../../assets/logo.png'
import { WrapperFooter } from './style'




export function Footer() {
    return (
        <WrapperFooter>
            <div className='conteiner'>
                <div className="logo" data-testid='logo'>
                    <img src={LogoImg} alt="imagem de uma caixa com as cores azul e laranja" />
                    <h2>OCEAN</h2>
                </div>
                <div className='lorem'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nisi, optio nesciunt dolores illo vel, sint fuga doloremque eum nobis accusantium placeat? Eos, aperiam vitae officia molestiae quis optio blanditiis.</p>
                </div>
                <div className='copyright'>
                    <p>Copyright © Samsung Electronics 2022. All Right Reserved</p>
                </div>
            </div>
        </WrapperFooter>
    )
}