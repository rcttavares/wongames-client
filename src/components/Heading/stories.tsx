import { Meta, StoryObj } from '@storybook/nextjs'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'Most Populars',
    color: 'black'
  }
}
