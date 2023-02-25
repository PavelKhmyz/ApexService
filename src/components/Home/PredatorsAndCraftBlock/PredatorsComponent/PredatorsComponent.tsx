import Carousel from 'react-multi-carousel';
import { RP } from '../../../../redux/initialStates/Types/predatorsInitialStateType';
import { PredatorsInner } from './components/PredatorsInner';

interface PredatorComponentProps {
  title: string;
  data: RP;
}

const predatorCarouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: -1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: -1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: -1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: -1,
  },
};

export const PredatorsComponent = ({ title, data }: PredatorComponentProps) => {
  const { PC, PS4, X1 } = data;

  return (
    <div className='predatorsBR'>
      <p className='predatorsTitle'>{title}</p>
      <Carousel
        partialVisible
        responsive={predatorCarouselResponsive}
        autoPlay
        infinite
        arrows={false}
      >
        <PredatorsInner title='PC' data={PC} />
        <PredatorsInner title='Play Station' data={PS4} />
        <PredatorsInner title='Xbox' data={X1} />
      </Carousel>
    </div>
  );
};
