import { render, screen } from '@testing-library/react'
import { BlogCard } from '../blog-card'

describe('true is truthy and false is falsy', () => {
  it('true is truthy', () => {
    render(
      <BlogCard
        category="Check"
        date="2020-02-02"
        image="/images/house.webp"
        slug="/cek"
        title="cek"
      />
    )
    const heading = screen.getByRole('heading', { level: 1 })
  })

  it('false is falsy', () => {
    expect(false).toBe(false)
  })
})
