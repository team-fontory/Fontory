import { SectionLayout } from '@/components'
import { PopularList } from '@/features/home/ui/PopularList'

const Home = () => {
  return (
    <div>
      <SectionLayout title="인기 폰트">
        <PopularList />
      </SectionLayout>
    </div>
  )
}

export default Home
