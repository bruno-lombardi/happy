import dynamic from 'next/dynamic'
const OrphanagesMap = dynamic(() => import('../components/pages/OrphanagesMap'), { ssr: false })

export default function App() {
  return <OrphanagesMap />
}
