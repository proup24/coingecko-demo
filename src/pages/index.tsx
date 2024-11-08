import { ValueChartCard } from '@/components/cards/value-chart-card'
import { RateLabel } from '@/components/labels/rate-label'
import { CoinList } from '@/components/lists/coin-list'

export default function Home() {
  const marketCapChangeRate = 0.02
  return (
    <div className="relative flex justify-center">
      <div className="max-w-screen-xl flex-1 py-4">
        <h1 className="text-2xl font-semibold">Cryptocurrency Prices by Market Cap</h1>
        <p>
          The global cryptocurrency market cap today is $2.71 Trillion,{' '}
          <RateLabel rate={marketCapChangeRate} /> change in the last 24 hours.
        </p>
        <div className="grid grid-cols-3 gap-2">
          <div className="grid gap-2">
            <ValueChartCard
              chartData={[1, 2, 3, 4, 5]}
              value="$2,699,074,605,535"
              label="Market Cap"
              rate={1.2}
            />
            <ValueChartCard
              chartData={[1, 2, 3, 4, 5]}
              value="$174,393,116,132"
              label="24h Trading Volume"
            />
          </div>
          <CoinList
            title="🔥 Trending"
            coins={[
              {
                icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                name: 'Bitcoin',
                price: 60000,
                rate: 0.02
              },
              {
                icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
                name: 'Ethereum',
                price: 4000,
                rate: 0.03
              },
              {
                icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                name: 'Solana',
                price: 200,
                rate: 0.01
              }
            ]}
          />
          <CoinList
            title="🚀 Largest Gainers"
            coins={[
              {
                icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                name: 'Bitcoin',
                price: 60000,
                rate: 0.02
              },
              {
                icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
                name: 'Ethereum',
                price: 4000,
                rate: 0.03
              },
              {
                icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
                name: 'Solana',
                price: 200,
                rate: 0.01
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
