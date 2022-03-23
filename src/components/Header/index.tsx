import { WrapperHeader } from "./style"
import LogoImg  from '../../assets/logo.png'

export function Header() {
    return (
        <WrapperHeader>
            <div className="logo" data-testid = 'logo'>
                <img src={LogoImg} alt="imagem de uma caixa" />
                <h2>OCEAN</h2>
            </div>
        </WrapperHeader>
    )
}