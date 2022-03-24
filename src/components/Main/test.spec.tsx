import {render, waitFor} from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { Main } from '.'
import { queryClient } from '../../services/queryClient'
import { rest } from 'msw'
import { renderWithClient } from '../../test/utils' 
import { server } from '../../test/setup'


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