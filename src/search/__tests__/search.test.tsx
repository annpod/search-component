import { render, screen } from '@testing-library/react'
import { Search } from '../search'

describe('Search', () => {
  test('should render Search', () => {
    render(<Search />)
    const element = screen.getByText('Search')
    expect(element).toBeTruthy()
  })
})
