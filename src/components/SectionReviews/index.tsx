import Slider from 'react-slick'

import { Container, Heading, ReviewCard } from 'components'

import reviews from './content'
import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = () => (
  <Container>
    <Heading reverseColor>O que os alunos estão dizendo</Heading>

    <S.Content>
      <Slider {...settings}>
        {reviews.map(({ name, image, description }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={image}
            description={description}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
