export type CoreServices = {
  name: string
  isFree: boolean
  description: string
}

export type Xnode = {
  id: string
  name: string
  description: string
  useCase: string
  status: string
  consoleNodes: string
  consoleEdges: string
  openmeshExpertUserId: string
  createdAt: string
  updatedAt: string
}

type Stats = {
  totalValidators: number
  totalStakeAmount: number
  totalAverageReward: number
  averagePayoutPeriod: string
}

export type XnodeValidatorsStats = {
  stats: Stats
  nodes: Xnode[]
}

export type XnodeWithValidatorsStats = {
  node: Xnode
  stats: Stats
  nodes: Xnode[]
}
