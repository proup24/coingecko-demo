import { ArrowDown, ArrowUp } from 'lucide-react'

interface RateLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  rate: number
}

export function RateLabel({ rate, ...props }: RateLabelProps) {
  const formatRate = (rate: number) => `${rate.toFixed(1)}%`
  return (
    <span {...props} style={{ color: rate >= 0 ? 'var(--success)' : 'hsl(var(--destructive))' }}>
      {rate >= 0 ? (
        <ArrowUp className="inline" size={15} />
      ) : (
        <ArrowDown className="inline" size={15} />
      )}
      {formatRate(rate)}
    </span>
  )
}
