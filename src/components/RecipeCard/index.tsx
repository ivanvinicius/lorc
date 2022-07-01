import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import {
  RiTimerLine,
  RiKnifeLine,
  RiBarChart2Line,
  RiTeamLine,
  RiShoppingBag3Line
} from 'react-icons/ri'

import { GradientIcon } from '../GradientIcon'

import { Anchor, Container, Content, RecipeName, Infos, Row } from './styles'

interface Props {
  href: string
  img: StaticImageData
  name: string
  infos: {
    duration: number
    servings: number
    ingredients: number
    stepsToCook: number
    difficulty: string
  }
}
export function RecipeCard({ href = '#', img, name, infos }: Props) {
  return (
    <Link href={href} passHref>
      <Anchor title={'Ver receita'}>
        <Container>
          <Image
            src={img}
            alt="Image do banner da receita."
            width={210}
            height={150}
            placeholder="blur"
            quality={100}
            blurDataURL="https://app-food4u-bucket.s3.us-east-2.amazonaws.com/card1.png"
          />
          <Content>
            <RecipeName title={name}>{name}</RecipeName>
            <Infos>
              <Row>
                <GradientIcon icon={RiTimerLine} size={16} />
                <p>{infos.duration}</p>
              </Row>
              <Row>
                <GradientIcon icon={RiTeamLine} size={16} />
                <p>{infos.servings} porções</p>
              </Row>
              <Row>
                <GradientIcon icon={RiShoppingBag3Line} size={16} />
                <p>{infos.ingredients} ingredients</p>
              </Row>
              <Row>
                <GradientIcon icon={RiKnifeLine} size={16} />
                <p>{infos.stepsToCook} passos de preparo</p>
              </Row>
              <Row>
                <GradientIcon icon={RiBarChart2Line} size={16} />
                <p>Nível {infos.difficulty} </p>
              </Row>
            </Infos>
          </Content>
        </Container>
      </Anchor>
    </Link>
  )
}
