import React from 'react'
import Button from './Button'

export default {
    title: 'Form/Button',
    component: Button
}

export const Primary = () => <Button varient='primary'>Primary</Button>
export const Secondary = () => <Button varient='secondary'>Secondry</Button>
export const Success = () => <Button varient='success'>Success</Button>
export const Danger = () => <Button varient='danger'>Danger</Button>