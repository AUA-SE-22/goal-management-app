import { render, screen } from '@testing-library/react'
import LoginForm from '../sections/login/LoginForm'

describe('Correctly renders', () => {

    it('the interface to login', () => {
    const { container } = render(<LoginForm />)
    const button = screen.getByRole('button', {
    name: 'Login',
    })

    expect(button).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    })
})