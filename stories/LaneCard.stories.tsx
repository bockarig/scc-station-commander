import type { Meta, StoryObj } from '@storybook/react-vite'

import { LaneCard } from '@/components/lane-card'

const meta: Meta<typeof LaneCard> = {
  title: 'Components/LaneCard',
  component: LaneCard,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Mock functions for stories
const mockIsLaneInAssignment = (laneId: string, assignment: string) => {
  return assignment === 'mock-assignment' && laneId === 'A-001'
}

const mockGetStatusColor = (status: string) => {
  const statusColors: Record<string, string> = {
    high: 'bg-danger-soft border-brd-danger',
    medium: 'bg-warning-soft border-brd-warning',
    attention: 'bg-info-soft border-brd-info',
    excellent: 'bg-success-soft border-brd-success',
    normal: 'bg-gray-2 border-brd-control',
  }
  return statusColors[status] || 'bg-gray-100 border-gray-300'
}

// Base lane data
const baseLane = {
  id: 'A-001',
  status: 'normal',
  volume: 45,
  capacity: 100,
  cluster: 'North',
}

export const Default: Story = {
  args: {
    lane: baseLane,
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const HighStatus: Story = {
  args: {
    lane: {
      ...baseLane,
      status: 'high',
      volume: 95,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const MediumStatus: Story = {
  args: {
    lane: {
      ...baseLane,
      status: 'medium',
      volume: 70,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const AttentionStatus: Story = {
  args: {
    lane: {
      ...baseLane,
      status: 'attention',
      volume: 85,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const ExcellentStatus: Story = {
  args: {
    lane: {
      ...baseLane,
      status: 'excellent',
      volume: 25,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const OverCapacity: Story = {
  args: {
    lane: {
      ...baseLane,
      status: 'high',
      volume: 120,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const HighlightedStowerSheet: Story = {
  args: {
    lane: baseLane,
    selectedStowerSheet: {
      assignment: 'mock-assignment',
      name: 'John Doe',
    },
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const HighlightedBufferSheet: Story = {
  args: {
    lane: baseLane,
    selectedStowerSheet: null,
    selectedBufferSheet: {
      assignment: 'mock-assignment',
      name: 'Jane Smith',
    },
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const Deemphasized: Story = {
  args: {
    lane: {
      ...baseLane,
      id: 'B-002',
    },
    selectedStowerSheet: {
      assignment: 'mock-assignment',
      name: 'John Doe',
    },
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const LowVolume: Story = {
  args: {
    lane: {
      ...baseLane,
      volume: 15,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const HighVolume: Story = {
  args: {
    lane: {
      ...baseLane,
      volume: 85,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
  },
}

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <LaneCard
        lane={{ id: 'A-001', status: 'normal', volume: 45, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-002', status: 'high', volume: 95, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-003', status: 'medium', volume: 70, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-004', status: 'attention', volume: 85, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
    </div>
  ),
}

export const WithHighlightedAndDeemphasized: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <LaneCard
        lane={{ id: 'A-001', status: 'high', volume: 95, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={{ assignment: 'mock-assignment', name: 'John Doe' }}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-002', status: 'medium', volume: 70, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={{ assignment: 'mock-assignment', name: 'John Doe' }}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-003', status: 'normal', volume: 45, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={{ assignment: 'mock-assignment', name: 'John Doe' }}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-004', status: 'attention', volume: 85, capacity: 100, cluster: 'North' }}
        selectedStowerSheet={{ assignment: 'mock-assignment', name: 'John Doe' }}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
    </div>
  ),
}

export const VariousCapacities: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <LaneCard
        lane={{ id: 'A-001', status: 'normal', volume: 20, capacity: 50, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-002', status: 'medium', volume: 75, capacity: 150, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
      <LaneCard
        lane={{ id: 'A-003', status: 'high', volume: 190, capacity: 200, cluster: 'North' }}
        selectedStowerSheet={null}
        selectedBufferSheet={null}
        isLaneInAssignment={mockIsLaneInAssignment}
        getStatusColor={mockGetStatusColor}
      />
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    lane: {
      ...baseLane,
      status: 'medium',
      volume: 65,
      capacity: 100,
    },
    selectedStowerSheet: null,
    selectedBufferSheet: null,
    isLaneInAssignment: mockIsLaneInAssignment,
    getStatusColor: mockGetStatusColor,
    onClick: (laneId: string) => {
      alert(`Lane ${laneId} clicked!`)
    },
  },
}
