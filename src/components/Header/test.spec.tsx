import {render} from '@testing-library/react'
import { Header } from '.'

describe('Header Component',() => {
    it('should render the logo image', () => {
        const {getByAltText} = render(<Header/>)

        expect(getByAltText('imagem de uma caixa com as cores azul e laranja')).toBeInTheDocument()
    })

    it('should render the OCEAN in logo', () => {
        const {getByText} = render(<Header/>)

        expect(getByText('OCEAN')).toBeInTheDocument()
    })

    it('should render the nav > ul > li text', () => {
        const {getByText} = render(<Header/>)

        expect(getByText('Trilhas')).toBeInTheDocument()
        expect(getByText('Cursos')).toBeInTheDocument()
        expect(getByText('Agenda')).toBeInTheDocument()
    })

    it('should render the Entrar/Cadastro button', () => {
        const {getByText} = render(<Header/>)

        expect(getByText('Entrar/Cadastro')).toBeInTheDocument()
    })
})