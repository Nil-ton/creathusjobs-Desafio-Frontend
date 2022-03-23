import {render} from '@testing-library/react'
import { Header } from '.'

describe('test header component',() => {
    it('should be visible componets', () => {
        const {getByTestId} = render(<Header/>)

        expect(getByTestId('logo')).toBeTruthy()
    })
})