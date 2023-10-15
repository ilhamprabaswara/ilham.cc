import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BlogList } from '@/components/blog/blog-list'

describe('Blog Section', () => {
  it('renders a blog section', () => {
    render(<BlogList />) // React Testing Library

    const blogList = screen.getByRole('list')
    expect(blogList).toBeInTheDocument()
  })
})
