import React from 'react'
import Button from './Button'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

export const Primary = () => <Button varient='primary'>Primary</Button>
export const Secondary = () => <Button varient='secondary'>Secondry</Button>
export const Success = () => <Button varient='success'>Success</Button>
export const Danger = () => <Button varient='danger'>Danger</Button>

const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    varient: 'primary',
    children: 'Primary Args'  //override args from component level
}
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
}
export const SecondaryA = Template.bind({})
SecondaryA.args = {
    varient: 'secondary',
    // children: 'Secondary  Args'
}