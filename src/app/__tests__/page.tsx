import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Headline } from '@/components/landing/headline'

describe('Home', () => {
  it('renders a landing headline', () => {
    render(<Headline />)

    const heading = screen.getByRole('heading', {
      name: /I’m Ilham — full time nerd./i,
    })

    expect(heading).toBeInTheDocument()
  })
})
