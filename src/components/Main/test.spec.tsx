import { Main } from '.'
import { renderWithClient } from '../../test/utils' 



describe('Main Component', () => {

    it('should render cursos', async () => {
        const result = renderWithClient(<Main />)
        

        expect(await result.findByText('Cursos')).toBeInTheDocument()
    })







    it('should render card-cursos', async () => {
        const result = renderWithClient(<Main />)
        const elements = await result.findAllByTestId('card-cursos')

        for(const element of elements) {
            expect(element).toBeInTheDocument()
        }
    })
})