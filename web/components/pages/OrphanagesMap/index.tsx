import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import { Container, Sidebar } from './styles'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Visite um orfanato – Happy</title>
      </Head>
      <Sidebar>
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>

        <footer>
          <span>Rio do Sul</span>
          <strong>Santa Catarina</strong>
        </footer>
      </Sidebar>

      <Map center={[-5.4655855, -47.8855649]} zoom={15} style={{ width: '100%', height: '100%' }}>
        {/* <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`}
        />
      </Map>

      <Link href="/app" passHref>
        <a>
          <FiArrowRight size={28} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </Link>
    </Container>
  )
}

export default OrphanagesMap
