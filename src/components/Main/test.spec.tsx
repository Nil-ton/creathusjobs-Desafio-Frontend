import {render} from '@testing-library/react'
import { Main } from '.'

describe('Main Component', () => {

    it('should render h2 cursos', () => {
        const {getByText} = render(<Main/>)

        expect(getByText('Cursos')).toBeInTheDocument()
    })









    it('should render cursos text', () => {
        const {getByText} = render(<Main />)

        expect(getByText('Cursos')).toBeInTheDocument()
    })







    

    it('should render card-cursos', async () => {
        const {findAllByTestId} = render(<Main />)
        expect(await findAllByTestId("card-cursos")).toBeInTheDocument()
    })
})