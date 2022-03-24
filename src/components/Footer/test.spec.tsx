import {render} from '@testing-library/react'
import { Footer } from '.'

describe('Footer Component', () => {
    it('should render logo', () => {
        const {getByTestId} = render(<Footer/>)
        expect(getByTestId('logo')).toBeInTheDocument()
    })





    it('should render lorem', () => {
        const {getByText} = render(<Footer/>)
        expect(getByText('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, nisi, optio nesciunt dolores illo vel, sint fuga doloremque eum nobis accusantium placeat? Eos, aperiam vitae officia molestiae quis optio blanditiis.')).toBeInTheDocument()
    })






    it('should render lorem', () => {
        const {getByText} = render(<Footer/>)
        expect(getByText('Copyright © Samsung Electronics 2022. All Right Reserved')).toBeInTheDocument()
    })
    
})