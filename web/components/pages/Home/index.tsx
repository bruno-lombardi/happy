import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { Container, ContentWrapper, Location, MainContent, NavigateButtonLink } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Happy – Faça uma criança feliz</title>
      </Head>

      <ContentWrapper>
        <img src="/logo.svg" alt="" />

        <MainContent>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </MainContent>

        <Location>
          <strong>Santa Catarina</strong>
          <span>Rio do Sul</span>
        </Location>

        <Link href="/app" passHref>
          <NavigateButtonLink>
            <FiArrowRight size={28} color="rgba(0, 0, 0, 0.6)" />
          </NavigateButtonLink>
        </Link>
      </ContentWrapper>
    </Container>
  )
}

export default Home
