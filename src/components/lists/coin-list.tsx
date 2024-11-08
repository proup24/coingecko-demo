import Image from 'next/image'
import { cn } from '@/lib/utils'
import { RateLabel } from '../labels/rate-label'

interface CoinListItem {
  icon: string
  name: string
  price: number
  rate: number
}

interface CoinListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  coins: CoinListItem[]
}

export function CoinList({ title, coins, className, ...props }: CoinListCardProps) {
  return (
    <div className={cn(className, 'grid gap-2 border p-4')} {...props}>
      <h2 className="text-lg font-semibold">{title}</h2>
      {coins.map((coin, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={coin.icon} alt={coin.name} className="mr-4 h-8 w-8" width={32} height={32} />
            <span className="font-semibold">{coin.name}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">${coin.price.toLocaleString()}</span>
            <RateLabel rate={coin.rate} />
          </div>
        </div>
      ))}
    </div>
  )
}
