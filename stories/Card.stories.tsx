import { BellRingingIcon } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@/components/ui/button.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <Card className="mx-auto max-w-xs">
      <p className="text-center">Card</p>
    </Card>
  ),
}

export const WithContent: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <Card className="mx-auto max-w-lg">
      <h3 className="font-semibold">
        The greatest of all time <span className="text-cnt-secondary text-sm">(in tennis)</span>
      </h3>
      <p className="mt-2 text-sm leading-6">
        Roger Federer's unparalleled combination of skill, longevity, and versatility has led him to
        hold numerous records, including the most Grand Slam singles titles.
      </p>
      <p className="mt-2 hidden text-sm leading-6 sm:block">
        His graceful and effortless style of play, combined with his sportsmanship and impact on the
        global tennis community, solidify his legacy as the greatest tennis player of all time.
      </p>
    </Card>
  ),
}

export const WithAsChildProp: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <ul role="list" className="flex list-none flex-col gap-4">
      <Card asChild>
        <li className="text-gray-900 dark:text-gray-50">
          This Card will be turned into a {`<li>`} element
        </li>
      </Card>
      <Card asChild>
        <li className="text-gray-900 dark:text-gray-50">
          This Card will also be turned into a {`<li>`} element
        </li>
      </Card>
    </ul>
  ),
}

export const NotificationList: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <Card {...args}>
      <header>
        <h2>Notifications</h2>
        <p>You have 3 unread messages.</p>
      </header>
      <div className="grid gap-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center gap-4">
            <BellRingingIcon weight="duotone" className="size-6" />
            <div>
              <p>{notification.title}</p>
              <p className="text-foreground/60">{notification.description}</p>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <Button variant="ghost">Close</Button>
      </footer>
    </Card>
  ),
}

export const Comparison: Story = {
  parameters: {
    layout: 'centered',
  },
  render: (args) => (
    <div className="ring-brd-line grid grid-cols-2 gap-x-8 rounded-md p-3 ring-1">
      <div className="space-y-2">
        <p className="text-cnt-secondary flex justify-center text-sm font-medium">Tremor UI</p>
        <Card {...args}>
          <header>
            <h2>Notifications</h2>
            <p>You have 3 unread messages.</p>
          </header>
          <div className="grid gap-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-center gap-4">
                <BellRingingIcon weight="duotone" className="size-6" />
                <div>
                  <p>{notification.title}</p>
                  <p className="text-cnt-tertiary">{notification.description}</p>
                </div>
              </div>
            ))}
          </div>
          <footer>
            <Button variant="ghost">Close</Button>
          </footer>
        </Card>
      </div>
      <div className="space-y-2">
        <p className="text-cnt-secondary flex justify-center text-sm font-medium">Shadcn UI</p>
        <Card {...args}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-center gap-4">
                <BellRingingIcon weight="duotone" className="text-cnt-primary size-6" />
                <div>
                  <p>{notification.title}</p>
                  <p className="text-cnt-tertiary">{notification.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="">
            <Button variant="danger">Cancel Subscription</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
}
