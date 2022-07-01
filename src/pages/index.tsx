import { useEffect, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { RecipeCard } from '../components/RecipeCard'
import { recipes } from '../utils/recipes'
import { convertSecondsToHours } from '../utils/convetSecondsToHours'
import {
  Container,
  Left,
  Right,
  ListArea,
  List
} from '../styles/pages/home.styles'

export default function Home() {
  const [recipesState, setRecipesState] = useState([])
  const [rowWidht, setRowWidth] = useState(0)
  const [scrollX, setScrollX] = useState(-0)

  function handleLeft() {
    const userScreen = Math.round(window.innerWidth)
    let newScrollX = scrollX + userScreen / 1.1

    if (newScrollX > 0) {
      newScrollX = 0
    }
    setScrollX(newScrollX)
  }

  function handleRight() {
    const userScreen = Math.round(window.innerWidth)
    let newScrollX = scrollX - userScreen / 1.1

    if (userScreen - rowWidht > newScrollX) {
      newScrollX = userScreen - rowWidht
    }

    setScrollX(newScrollX)
  }

  useEffect(() => {
    const data = recipes.map(({ infos, ...rest }) => ({
      ...rest,
      infos: {
        ...infos,
        duration: convertSecondsToHours({ valueInSeconds: infos.duration }),
        difficulty:
          infos.difficulty === 1
            ? 'fácil'
            : infos.difficulty === 2
            ? 'médio' //eslint-disable-line
            : 'difícil' //eslint-disable-line
      }
    }))

    setRecipesState(data)
  }, [])

  useEffect(() => {
    const listLength = recipesState?.length

    if (listLength) {
      const padding = 48 * 2
      const rowGap = (listLength - 1) * 16
      const rowSize = listLength * 210 + rowGap + padding

      setRowWidth(rowSize)
    }
  }, [recipesState])

  return (
    <>
      <Container>
        <ListArea>
          <h2>Adiconados recentemente</h2>

          <Left className="buttonController" onClick={handleLeft}>
            <RiArrowLeftSLine />
          </Left>

          <List
            style={{
              width: `${String(rowWidht)}px`,
              marginLeft: `${String(scrollX)}px`
            }}
          >
            {recipesState.map(({ id, href, img, name, infos }) => (
              <RecipeCard
                key={id}
                href={href}
                img={img}
                name={name}
                infos={{ ...infos }}
              />
            ))}
          </List>

          <Right className="buttonController" onClick={handleRight}>
            <RiArrowRightSLine />
          </Right>
        </ListArea>
      </Container>
    </>
  )
}
