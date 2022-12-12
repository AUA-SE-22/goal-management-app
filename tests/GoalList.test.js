import { render, screen } from '@testing-library/react'
import GoalList from '../sections/goals/GoalList'

describe('Correctly renders', () => {

    const goals = [{
        name: 'name1',
        detail: 'details1',
        id: 'someId'
    }, {
        name: 'name2',
        detail: 'details2',
        id: 'someId'
    }]

    it('the interface to the goal list for an employer', () => {
    const { container } = render(<GoalList goals={goals} isEmployer />)()
    expect(container).toMatchSnapshot()
    })

    it('the interface to the goal list for an employee', () => {
        const { container } = render(<GoalList goals={goals} isEmployer={false} />)()
        expect(container).toMatchSnapshot()
        })
})