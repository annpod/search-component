import { Story, Meta } from '@storybook/react'
import { Search } from '../search'

export default {
  title: 'Search',
  component: Search,
} as Meta

const Template: Story = () => <Search />

export const Primary = Template.bind({})
