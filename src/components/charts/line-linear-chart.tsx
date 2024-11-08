'use client'

import { Line, LineChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
} from '@/components/ui/chart'

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 }
]

const chartConfig = {
  desktop: {
    label: 'value',
    color: 'hsl(var(--chart-1))',
  }
} satisfies ChartConfig

export function LineLinearChart({ dataKey }: { dataKey?: string }) {
  return (
    <ChartContainer className="w-40 h-16" config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
      >
        <Line
          dataKey={dataKey}
          type="linear"
          stroke="var(--success)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
