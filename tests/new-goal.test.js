import { render, screen } from '@testing-library/react'
import NewGoal from '../pages/goals/new-goal'

describe('Correctly renders', () => {

    it('the interface to add new goals', () => {
    const { container } = render(<NewGoal />)
    const button = screen.getByRole('button', {
    name: 'Add goal',
    })

    expect(button).toBeInTheDocument()
    expect(container).toMatchSnapshot()
    })
})