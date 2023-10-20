import { render, screen } from '@testing-library/react'
import { BlogCard } from '../blog-card'

describe('Check blog card', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver
  })
  it('Check card header', () => {
    render(
      <BlogCard
        category="Technology"
        date="2020-02-02"
        image="/images/house.webp"
        slug="/cek"
        title="Sample Title"
      />
    )
    const cardImg = screen.getByRole('img', { name: 'card-image' })
    const cardCategory = screen.getByRole('link', { name: /card-image/i })
    // const category = screen.getByRole('link', { name: 'card-image' })

    expect(cardImg).toBeInTheDocument()
    expect(cardCategory).toBeInTheDocument()
    expect(screen.getByText('Sample Title')).toBeVisible()
  })
})
