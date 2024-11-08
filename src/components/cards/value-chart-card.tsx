import { cn } from '@/lib/utils'
import { LineLinearChart } from '../charts/line-linear-chart'
import { RateLabel } from '../labels/rate-label'

interface ValueChartCardProps extends React.HTMLAttributes<HTMLDivElement> {
    chartData: number[],
    value: string
    label: string
    rate?: number
}

export function ValueChartCard({ chartData, value, label, rate, className, ...props }: ValueChartCardProps) {
  return (
    <div className={cn('flex justify-between border p-4', className)} {...props}>
      <div className="grid">
        <span className="text-xl font-semibold">{value}</span>
        <span className="font-semibold">
           {label}{rate != null && <RateLabel rate={rate} />}
        </span>
      </div>
      <LineLinearChart dataKey="desktop" />
    </div>
  )
}
