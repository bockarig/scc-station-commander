import { useState } from 'react'
import { Clock, MessageSquare, RefreshCw } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { LaneCard } from '@/components/lane-card'

import { KpiMetricsSection } from './kpi/kpi-metrics-section'

// Mock data structure
const clusterData = {
  AB: {
    clusters: ['A', 'B'],
    stowers: [
      {
        id: 'S001',
        name: 'John Smith',
        assignment: 'A1-A4',
        currentRate: 85,
        target: 90,
        status: 'below',
      },
      {
        id: 'S002',
        name: 'Maria Garcia',
        assignment: 'A5-A8',
        currentRate: 95,
        target: 90,
        status: 'above',
      },
      {
        id: 'S003',
        name: 'David Chen',
        assignment: 'B1-B4',
        currentRate: 88,
        target: 90,
        status: 'below',
      },
      {
        id: 'S004',
        name: 'Sarah Johnson',
        assignment: 'B5-B8',
        currentRate: 92,
        target: 90,
        status: 'above',
      },
    ],
    buffers: [
      {
        id: 'B001',
        name: 'Mike Wilson',
        assignment: 'A1-A6',
        performance: 'good',
        notes: 'Consistent catch rate',
      },
      {
        id: 'B002',
        name: 'Lisa Brown',
        assignment: 'A7-A13',
        performance: 'attention',
        notes: 'Missed 3 packages in last hour',
      },
      { id: 'B003', name: 'Tom Davis', assignment: 'B1-B6', performance: 'good', notes: '' },
      {
        id: 'B004',
        name: 'Anna Lee',
        assignment: 'B7-B13',
        performance: 'excellent',
        notes: 'Zero misses today',
      },
    ],
    lanes: generateLaneData('A').concat(generateLaneData('B')),
    volume: { current: 1250, capacity: 1500, trend: 'up' },
  },
  CD: {
    clusters: ['C', 'D'],
    stowers: [
      {
        id: 'S005',
        name: 'Robert Kim',
        assignment: 'C1-C4',
        currentRate: 91,
        target: 90,
        status: 'above',
      },
      {
        id: 'S006',
        name: 'Jennifer Wu',
        assignment: 'C5-C8',
        currentRate: 87,
        target: 90,
        status: 'below',
      },
      {
        id: 'S007',
        name: 'Carlos Rodriguez',
        assignment: 'D1-D4',
        currentRate: 93,
        target: 90,
        status: 'above',
      },
      {
        id: 'S008',
        name: 'Emily Taylor',
        assignment: 'D5-D8',
        currentRate: 89,
        target: 90,
        status: 'below',
      },
    ],
    buffers: [
      { id: 'B005', name: 'Kevin Park', assignment: 'C1-C6', performance: 'good', notes: '' },
      { id: 'B006', name: 'Rachel Green', assignment: 'C7-C13', performance: 'good', notes: '' },
      {
        id: 'B007',
        name: 'James Miller',
        assignment: 'D1-D6',
        performance: 'attention',
        notes: 'Slow on peak hours',
      },
      { id: 'B008', name: 'Sophie Anderson', assignment: 'D7-D13', performance: 'good', notes: '' },
    ],
    lanes: generateLaneData('C').concat(generateLaneData('D')),
    volume: { current: 980, capacity: 1500, trend: 'stable' },
  },
  EG: {
    clusters: ['E', 'G'],
    stowers: [
      {
        id: 'S009',
        name: 'Michael Torres',
        assignment: 'E1-E4',
        currentRate: 94,
        target: 90,
        status: 'above',
      },
      {
        id: 'S010',
        name: 'Amanda Foster',
        assignment: 'E5-E8',
        currentRate: 86,
        target: 90,
        status: 'below',
      },
      {
        id: 'S011',
        name: 'Daniel Wright',
        assignment: 'G1-G4',
        currentRate: 91,
        target: 90,
        status: 'above',
      },
      {
        id: 'S012',
        name: 'Jessica Martinez',
        assignment: 'G5-G8',
        currentRate: 88,
        target: 90,
        status: 'below',
      },
    ],
    buffers: [
      {
        id: 'B009',
        name: 'Ryan Cooper',
        assignment: 'E1-E6',
        performance: 'excellent',
        notes: 'Top performer this week',
      },
      { id: 'B010', name: 'Nicole Hayes', assignment: 'E7-E13', performance: 'good', notes: '' },
      { id: 'B011', name: 'Brandon Scott', assignment: 'G1-G6', performance: 'good', notes: '' },
      {
        id: 'B012',
        name: 'Melissa Clark',
        assignment: 'G7-G13',
        performance: 'attention',
        notes: 'Training needed on new process',
      },
    ],
    lanes: generateLaneData('E').concat(generateLaneData('G')),
    volume: { current: 1180, capacity: 1500, trend: 'up' },
  },
  HJ: {
    clusters: ['H', 'J'],
    stowers: [
      {
        id: 'S013',
        name: 'Christopher Lee',
        assignment: 'H1-H4',
        currentRate: 89,
        target: 90,
        status: 'below',
      },
      {
        id: 'S014',
        name: 'Stephanie Adams',
        assignment: 'H5-H8',
        currentRate: 96,
        target: 90,
        status: 'above',
      },
      {
        id: 'S015',
        name: 'Anthony Garcia',
        assignment: 'J1-J4',
        currentRate: 92,
        target: 90,
        status: 'above',
      },
      {
        id: 'S016',
        name: 'Lauren Thompson',
        assignment: 'J5-J8',
        currentRate: 87,
        target: 90,
        status: 'below',
      },
    ],
    buffers: [
      { id: 'B013', name: 'Marcus Johnson', assignment: 'H1-H6', performance: 'good', notes: '' },
      {
        id: 'B014',
        name: 'Samantha White',
        assignment: 'H7-H13',
        performance: 'excellent',
        notes: 'Perfect attendance record',
      },
      { id: 'B015', name: 'Tyler Brown', assignment: 'J1-J6', performance: 'good', notes: '' },
      { id: 'B016', name: 'Kimberly Davis', assignment: 'J7-J13', performance: 'good', notes: '' },
    ],
    lanes: generateLaneData('H').concat(generateLaneData('J')),
    volume: { current: 1320, capacity: 1500, trend: 'stable' },
  },
  KL: {
    clusters: ['K', 'L'],
    stowers: [
      {
        id: 'S017',
        name: 'Jonathan Miller',
        assignment: 'K1-K4',
        currentRate: 93,
        target: 90,
        status: 'above',
      },
      {
        id: 'S018',
        name: 'Rebecca Wilson',
        assignment: 'K5-K8',
        currentRate: 84,
        target: 90,
        status: 'below',
      },
      {
        id: 'S019',
        name: 'Kevin Anderson',
        assignment: 'L1-L4',
        currentRate: 90,
        target: 90,
        status: 'above',
      },
      {
        id: 'S020',
        name: 'Michelle Taylor',
        assignment: 'L5-L8',
        currentRate: 86,
        target: 90,
        status: 'below',
      },
    ],
    buffers: [
      {
        id: 'B017',
        name: 'Gregory Moore',
        assignment: 'K1-K6',
        performance: 'attention',
        notes: 'Needs refresher training',
      },
      {
        id: 'B018',
        name: 'Christina Jackson',
        assignment: 'K7-K13',
        performance: 'good',
        notes: '',
      },
      {
        id: 'B019',
        name: 'Patrick Martin',
        assignment: 'L1-L6',
        performance: 'excellent',
        notes: 'Mentor for new hires',
      },
      { id: 'B020', name: 'Vanessa Lee', assignment: 'L7-L13', performance: 'good', notes: '' },
    ],
    lanes: generateLaneData('K').concat(generateLaneData('L')),
    volume: { current: 890, capacity: 1500, trend: 'down' },
  },
  MP: {
    clusters: ['M', 'P'],
    stowers: [
      {
        id: 'S021',
        name: 'Steven Rodriguez',
        assignment: 'M1-M4',
        currentRate: 97,
        target: 90,
        status: 'above',
      },
      {
        id: 'S022',
        name: 'Diana Lopez',
        assignment: 'M5-M8',
        currentRate: 88,
        target: 90,
        status: 'below',
      },
      {
        id: 'S023',
        name: 'Matthew Gonzalez',
        assignment: 'P1-P4',
        currentRate: 91,
        target: 90,
        status: 'above',
      },
      {
        id: 'S024',
        name: 'Ashley Hernandez',
        assignment: 'P5-P8',
        currentRate: 85,
        target: 90,
        status: 'below',
      },
    ],
    buffers: [
      { id: 'B021', name: 'Joshua Young', assignment: 'M1-M6', performance: 'good', notes: '' },
      { id: 'B022', name: 'Brittany King', assignment: 'M7-M13', performance: 'good', notes: '' },
      {
        id: 'B023',
        name: 'Andrew Wright',
        assignment: 'P1-P6',
        performance: 'attention',
        notes: 'Equipment issues reported',
      },
      {
        id: 'B024',
        name: 'Megan Hill',
        assignment: 'P7-P13',
        performance: 'excellent',
        notes: 'Cross-trained on multiple areas',
      },
    ],
    lanes: generateLaneData('M').concat(generateLaneData('P')),
    volume: { current: 1420, capacity: 1500, trend: 'up' },
  },
}

function generateLaneData(cluster: string) {
  const lanes = []
  for (let i = 1; i <= 13; i++) {
    const aisle1 = i * 2 - 1
    const aisle2 = i * 2
    lanes.push({
      id: `${cluster}${aisle1}-${cluster}${aisle2}`,
      cluster,
      volume: Math.floor(Math.random() * 50) + 20,
      capacity: 80,
      status: Math.random() > 0.8 ? 'high' : Math.random() > 0.6 ? 'medium' : 'normal',
    })
  }
  return lanes
}

function isLaneInAssignment(laneId: string, assignment: string): boolean {
  // Parse assignment like "A1-A4" or "A7-A13"
  const assignmentMatch = assignment.match(/([A-Z])(\d+)-([A-Z])(\d+)/)
  if (!assignmentMatch) return false

  const [, startCluster, startNum, endCluster, endNum] = assignmentMatch
  const startNumber = Number.parseInt(startNum)
  const endNumber = Number.parseInt(endNum)

  // Parse lane ID like "A1-A2" or "B5-B6"
  const laneMatch = laneId.match(/([A-Z])(\d+)-([A-Z])(\d+)/)
  if (!laneMatch) return false

  const [, laneCluster, laneStart, , laneEnd] = laneMatch
  const laneStartNum = Number.parseInt(laneStart)
  const laneEndNum = Number.parseInt(laneEnd)

  // Check if lane cluster matches and lane numbers fall within assignment range
  return laneCluster === startCluster && laneStartNum >= startNumber && laneEndNum <= endNumber
}

const getPerformanceColor = (performance: string) => {
  switch (performance) {
    case 'excellent':
      return 'bg-(--green-9)'
    case 'good':
      return 'bg-accent-9'
    case 'attention':
      return 'bg-(--orange-9)'
    default:
      return 'bg-gray-3'
  }
}

function calculateStationWideData(clusterData: any) {
  const allStowers = Object.values(clusterData).flatMap((cluster: any) => cluster.stowers)
  const allBuffers = Object.values(clusterData).flatMap((cluster: any) => cluster.buffers)

  const totalVolume = Object.values(clusterData).reduce(
    (acc: any, cluster: any) => ({
      current: acc.current + cluster.volume.current,
      capacity: acc.capacity + cluster.volume.capacity,
    }),
    { current: 0, capacity: 0 },
  )

  // Determine overall trend based on majority of clusters
  const trends = Object.values(clusterData).map((cluster: any) => cluster.volume.trend)
  const trendCounts = trends.reduce((acc: any, trend) => {
    acc[trend] = (acc[trend] || 0) + 1
    return acc
  }, {})
  const overallTrend = Object.keys(trendCounts).reduce((a, b) =>
    trendCounts[a] > trendCounts[b] ? a : b,
  )

  return {
    totalVolume: {
      current: totalVolume.current,
      capacity: totalVolume.capacity,
      trend: overallTrend as 'up' | 'down' | 'stable',
    },
    allStowers,
    allBuffers,
    clusterCount: Object.keys(clusterData).length,
  }
}

export const Dashboard = () => {
  const [selectedCluster, setSelectedCluster] = useState('AB')
  const [selectedAssociate, setSelectedAssociate] = useState<any>(null)
  const [notes, setNotes] = useState('')
  const [swapMode, setSwapMode] = useState(false)
  const [selectedForSwap, setSelectedForSwap] = useState<string[]>([])
  const [selectedStowerSheet, setSelectedStowerSheet] = useState<any>(null)
  const [selectedBufferSheet, setSelectedBufferSheet] = useState<any>(null)

  const currentData = clusterData[selectedCluster as keyof typeof clusterData]
  const stationData = calculateStationWideData(clusterData)

  const handleSwapAssignment = () => {
    if (selectedForSwap.length === 2) {
      // In a real app, this would update the backend
      console.log(`Swapping assignments between ${selectedForSwap[0]} and ${selectedForSwap[1]}`)
      setSwapMode(false)
      setSelectedForSwap([])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Station Dashboard</h1>
          <p className="text-cnt-secondary">Process Assistant Overview</p>
        </div>
        <div className="flex items-center gap-4">
          <Button className="h-7 bg-transparent leading-6" variant="secondary">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Badge variant="neutral" className="rounded-none text-sm">
            <Clock className="mr-1 h-3 w-3" />
            Last updated: 2 min ago
          </Badge>
        </div>
      </div>

      {/* Station-wide KPI Metrics Section */}
      <KpiMetricsSection stationData={stationData} />

      {/* Cluster-specific content with tabs */}
      <Tabs value={selectedCluster} onValueChange={setSelectedCluster} className="w-full">
        {/* Lane Layout Section Header with Tabs */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Cluster Details</h2>
            <p className="text-cnt-secondary mt-1">
              Select a cluster to view detailed lane status and associate management
            </p>
          </div>
          <div className="flex items-center gap-4">
            <TabsList variant="solid" className="grid grid-cols-6">
              <TabsTrigger value="AB">AB</TabsTrigger>
              <TabsTrigger value="CD">CD</TabsTrigger>
              <TabsTrigger value="EG">EG</TabsTrigger>
              <TabsTrigger value="HJ">HJ</TabsTrigger>
              <TabsTrigger value="KL">KL</TabsTrigger>
              <TabsTrigger value="MP">MP</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value={selectedCluster} className="mt-6 space-y-6">
          {/* KPI Metrics Section */}

          {/* Lane Layout Section Header */}
          {/* Lane Views */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {currentData.clusters.map((cluster) => (
              <Card key={cluster} className="bg-gray-3 border-brd-line rounded-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Cluster {cluster}</CardTitle>
                    <Badge variant="neutral">
                      {currentData.lanes
                        .filter((lane) => lane.cluster === cluster)
                        .reduce((acc, lane) => acc + lane.volume, 0)}{' '}
                      at station
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="rounded-sm border border-none border-gray-200 p-6">
                    <div className="grid grid-cols-4 gap-3">
                      {currentData.lanes
                        .filter((lane) => lane.cluster === cluster)
                        .map((lane) => (
                          <LaneCard
                            lane={lane}
                            selectedStowerSheet={selectedStowerSheet}
                            selectedBufferSheet={selectedBufferSheet}
                            isLaneInAssignment={isLaneInAssignment}
                            onClick={(laneId) =>
                              console.log(`Lane ${laneId} clicked - show detailed view`)
                            }
                          />
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Associates Management Section Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Associates Management</h2>
              <p className="text-cnt-secondary mt-1">
                Monitor performance and manage assignments across all roles
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-sm bg-gray-700"></div>
                  <span>Stowers ({currentData.stowers.length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-sm bg-gray-600"></div>
                  <span>Buffers ({currentData.buffers.length})</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={swapMode ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSwapMode(!swapMode)}
                >
                  {swapMode ? 'Cancel Swap' : 'Swap Assignments'}
                </Button>
                {swapMode && selectedForSwap.length === 2 && (
                  <Button size="sm" onClick={handleSwapAssignment}>
                    Confirm Swap
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Performance Summary Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card className="from-gray-2 to-gray-4 border-brd-line bg-gradient-to-r">
              <CardContent className="rounded-sm p-4 px-2 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cnt-secondary text-sm font-medium">Performing Well</p>
                    <p className="text-2xl font-bold">
                      {currentData.stowers.filter((s) => s.status === 'above').length +
                        currentData.buffers.filter(
                          (b) => b.performance === 'excellent' || b.performance === 'good',
                        ).length}
                    </p>
                  </div>
                  <div className="bg-gray-3 rounded-lg p-2">
                    <div className="bg-gray-6 h-6 w-6 rounded-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brd-line from-gray-3 to-gray-5 bg-gradient-to-r">
              <CardContent className="rounded-sm p-4 px-3 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cnt-secondary text-sm font-medium">Need Attention</p>
                    <p className="text-2xl font-bold">
                      {currentData.stowers.filter((s) => s.status === 'below').length +
                        currentData.buffers.filter((b) => b.performance === 'attention').length}
                    </p>
                  </div>
                  <div className="bg-gray-4 rounded-lg p-2">
                    <div className="bg-gray-8 h-6 w-6 rounded-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="from-gray-2 to-gray-4 border-brd-line bg-gradient-to-r">
              <CardContent className="rounded-sm p-4 px-3 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cnt-secondary text-sm font-medium">Avg Stow Rate</p>
                    <p className="text-2xl font-bold">
                      {Math.round(
                        currentData.stowers.reduce((acc, s) => acc + s.currentRate, 0) /
                          currentData.stowers.length,
                      )}
                      /hr
                    </p>
                  </div>
                  <div className="bg-gray-3 rounded-lg p-2">
                    <div className="bg-gray-7 h-6 w-6 rounded-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unified Associates List */}
          <Card className="border-transparent bg-transparent">
            <CardHeader>
              <CardTitle>All Associates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Stowers */}
                {currentData.stowers.map((stower) => (
                  <div
                    key={stower.id}
                    className={`border-brd-line cursor-pointer rounded-sm border p-4 hover:shadow-md ${
                      swapMode && selectedForSwap.includes(stower.id)
                        ? 'border-gray-600 bg-pink-500'
                        : stower.status === 'below'
                          ? 'border-brd-ring bg-gray-gray-3 hover:border-gray-7'
                          : 'hover:border-brd-control border-brd-line'
                    }`}
                    onClick={() => {
                      if (swapMode) {
                        if (selectedForSwap.includes(stower.id)) {
                          setSelectedForSwap(selectedForSwap.filter((id) => id !== stower.id))
                        } else if (selectedForSwap.length < 2) {
                          setSelectedForSwap([...selectedForSwap, stower.id])
                        }
                      } else {
                        setSelectedStowerSheet(stower)
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-sm bg-gray-700"></div>
                          <Badge
                            variant="neutral"
                            className="border-brd-line bg-gray-50 text-xs text-gray-700"
                          >
                            Stower
                          </Badge>
                        </div>
                        <div>
                          <div className="font-medium">{stower.name}</div>
                          <div className="text-cnt-secondary text-sm">{stower.assignment}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div
                            className={`font-bold ${stower.status === 'above' ? 'text-cnt-primary' : 'text-gray-700'}`}
                          >
                            {stower.currentRate}/hr
                          </div>
                          <div className="text-xs text-gray-500">Target: {stower.target}</div>
                        </div>
                        <Badge
                          variant={stower.status === 'above' ? 'default' : 'secondary'}
                          className={
                            stower.status === 'above'
                              ? 'border-brd-line bg-gray-3 text-cnt-primary'
                              : 'border-brd-ring bg-gray-4 text-cnt-primary/70'
                          }
                        >
                          {stower.status === 'above' ? 'Above Target' : 'Below Target'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Buffers */}
                {currentData.buffers.map((buffer) => (
                  <div
                    key={buffer.id}
                    className={`cursor-pointer rounded-sm border p-4 hover:shadow-md ${
                      buffer.performance === 'attention'
                        ? 'border-brd-ring bg-gray-100/50 hover:border-gray-500'
                        : buffer.performance === 'excellent'
                          ? 'hover:border-brd-ring border-brd-line bg-gray-50/50'
                          : 'hover:border-brd-line border-gray-200'
                    }`}
                    onClick={() => setSelectedBufferSheet(buffer)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-sm bg-gray-600"></div>
                          <Badge
                            variant="neutral"
                            className="border-brd-line bg-gray-50 text-xs text-gray-700"
                          >
                            Buffer
                          </Badge>
                        </div>
                        <div>
                          <div className="font-medium">{buffer.name}</div>
                          <div className="text-cnt-secondary text-sm">{buffer.assignment}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {buffer.notes && (
                          <div className="max-w-xs truncate rounded-sm bg-gray-100 px-2 py-1 text-xs text-gray-500">
                            {buffer.notes}
                          </div>
                        )}
                        <Badge
                          variant="neutral"
                          className={
                            buffer.performance === 'excellent'
                              ? 'border-brd-line bg-gray-3 text-cnt-primary'
                              : buffer.performance === 'attention'
                                ? 'border-brd-ring bg-gray-4 text-cnt-primary/70'
                                : 'text-cnt-primary/70 border-gray-200 bg-gray-100'
                          }
                        >
                          {buffer.performance === 'excellent'
                            ? 'Excellent'
                            : buffer.performance === 'attention'
                              ? 'Needs Attention'
                              : 'Good'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stower Details Sheet */}
          <Sheet
            open={!!selectedStowerSheet}
            onOpenChange={(open) => !open && setSelectedStowerSheet(null)}
            modal={false}
          >
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Associate Details</SheetTitle>
              </SheetHeader>
              {selectedStowerSheet && (
                <div className="mt-6 space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Name</Label>
                      <p className="text-lg font-semibold">{selectedStowerSheet.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Badge ID</Label>
                      <p className="font-mono text-lg">{selectedStowerSheet.id}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Assignment</Label>
                      <p className="text-lg">{selectedStowerSheet.assignment}</p>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Badge QR Code</Label>
                    <div className="flex justify-center rounded-sm border-2 border-gray-200 bg-white p-4">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedStowerSheet.id}`}
                        alt={`QR Code for ${selectedStowerSheet.id}`}
                        className="h-32 w-32"
                      />
                    </div>
                    <p className="text-center text-xs text-gray-500">
                      Scan to access badge ID: {selectedStowerSheet.id}
                    </p>
                  </div>

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Performance</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-sm bg-gray-50 p-3">
                        <div className="text-cnt-secondary text-sm">Current Rate</div>
                        <div
                          className={`text-xl font-bold ${selectedStowerSheet.status === 'above' ? 'text-cnt-primary' : 'text-gray-700'}`}
                        >
                          {selectedStowerSheet.currentRate}/hr
                        </div>
                      </div>
                      <div className="rounded-sm bg-gray-50 p-3">
                        <div className="text-cnt-secondary text-sm">Target Rate</div>
                        <div className="text-xl font-bold">{selectedStowerSheet.target}/hr</div>
                      </div>
                    </div>
                    <div className="rounded-sm bg-gray-50 p-3">
                      <div className="text-cnt-secondary text-sm">Status</div>
                      <Badge
                        variant={selectedStowerSheet.status === 'above' ? 'default' : 'secondary'}
                        className={
                          selectedStowerSheet.status === 'above'
                            ? 'border-brd-line bg-gray-3 text-cnt-primary'
                            : 'border-brd-ring bg-gray-4 text-cnt-primary/70'
                        }
                      >
                        {selectedStowerSheet.status === 'above' ? 'Above Target' : 'Below Target'}
                      </Badge>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Recent Activity</Label>
                    <div className="space-y-2">
                      <div className="rounded-sm bg-gray-50 p-2 text-sm">
                        <div className="font-medium">
                          Last Hour: {selectedStowerSheet.currentRate} packages
                        </div>
                        <div className="text-cnt-secondary">Started shift at 6:00 AM</div>
                      </div>
                      <div className="rounded-sm bg-gray-50 p-2 text-sm">
                        <div className="font-medium">Break taken: 10:15 AM - 10:30 AM</div>
                        <div className="text-cnt-secondary">15 minute break</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button variant="secondary" className="flex-1 bg-transparent">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Add Note
                    </Button>
                    <Button variant="secondary" className="flex-1 bg-transparent">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh Data
                    </Button>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
          {/* Buffer Details Sheet */}
          <Sheet
            open={!!selectedBufferSheet}
            onOpenChange={(open) => !open && setSelectedBufferSheet(null)}
            modal={false}
          >
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Buffer Associate Details</SheetTitle>
              </SheetHeader>
              {selectedBufferSheet && (
                <div className="mt-6 space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Name</Label>
                      <p className="text-lg font-semibold">{selectedBufferSheet.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Badge ID</Label>
                      <p className="font-mono text-lg">{selectedBufferSheet.id}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Assignment</Label>
                      <p className="text-lg">{selectedBufferSheet.assignment}</p>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Badge QR Code</Label>
                    <div className="flex justify-center rounded-sm border-2 border-gray-200 bg-white p-4">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedBufferSheet.id}`}
                        alt={`QR Code for ${selectedBufferSheet.id}`}
                        className="h-32 w-32"
                      />
                    </div>
                    <p className="text-center text-xs text-gray-500">
                      Scan to access badge ID: {selectedBufferSheet.id}
                    </p>
                  </div>

                  {/* Performance Status */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Performance Status</Label>
                    <div className="rounded-sm bg-gray-50 p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div
                          className={`h-4 w-4 rounded-sm ${getPerformanceColor(selectedBufferSheet.performance)}`}
                        ></div>
                        <span className="text-lg font-semibold capitalize">
                          {selectedBufferSheet.performance}
                        </span>
                      </div>
                      <div className="text-cnt-secondary text-sm">
                        {selectedBufferSheet.performance === 'excellent' &&
                          'Outstanding performance with zero errors'}
                        {selectedBufferSheet.performance === 'good' &&
                          'Meeting all performance standards'}
                        {selectedBufferSheet.performance === 'attention' &&
                          'Requires monitoring and support'}
                      </div>
                    </div>
                  </div>

                  {/* Current Notes */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Current Notes</Label>
                    <div className="min-h-[60px] rounded-sm bg-gray-50 p-3">
                      {selectedBufferSheet.notes ? (
                        <p className="text-sm">{selectedBufferSheet.notes}</p>
                      ) : (
                        <p className="text-sm text-gray-400 italic">No notes recorded</p>
                      )}
                    </div>
                  </div>

                  {/* Add New Note */}
                  <div className="space-y-3">
                    <Label htmlFor="buffer-note" className="text-sm font-medium text-gray-500">
                      Add New Note
                    </Label>
                    <Textarea
                      id="buffer-note"
                      placeholder="Enter observation, feedback, or note about this buffer associate..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-500">Recent Activity</Label>
                    <div className="space-y-2">
                      <div className="rounded-sm bg-gray-50 p-2 text-sm">
                        <div className="font-medium">Current shift: 6:00 AM - 2:30 PM</div>
                        <div className="text-cnt-secondary">
                          Buffer coverage: {selectedBufferSheet.assignment}
                        </div>
                      </div>
                      <div className="rounded-sm bg-gray-50 p-2 text-sm">
                        <div className="font-medium">Last break: 10:15 AM - 10:30 AM</div>
                        <div className="text-cnt-secondary">15 minute break</div>
                      </div>
                      <div className="rounded-sm bg-gray-50 p-2 text-sm">
                        <div className="font-medium">Packages caught: 12 in last hour</div>
                        <div className="text-cnt-secondary">Catch rate: 95%</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button
                      className="flex-1"
                      onClick={() => {
                        // In real app, save note to backend
                        console.log(`Adding note for ${selectedBufferSheet.name}: ${notes}`)
                        setNotes('')
                      }}
                      disabled={!notes.trim()}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Save Note
                    </Button>
                    <Button variant="secondary" className="flex-1 bg-transparent">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh Data
                    </Button>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </TabsContent>
      </Tabs>
    </div>
  )
}
