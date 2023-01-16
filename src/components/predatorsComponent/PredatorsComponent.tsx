import Carousel from 'react-multi-carousel';
import './PredatorsStyle.css';

interface PredatorComponentProps {
  title: string;
  data: {
    PC: PredatorComponentPropsElement;
    PS4: PredatorComponentPropsElement;
    SWITCH: PredatorComponentPropsElement;
    X1: PredatorComponentPropsElement;
  };
}

interface PredatorComponentPropsElement {
  foundRank: number;
  totalMastersAndPreds: number;
  uid: string;
  updateTimestamp: number;
  val: number;
}

export const PredatorsComponent = (props: PredatorComponentProps) => {
  const { title } = props;
  const { PC, PS4, X1 } = props.data;
  const responsive = {
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
  return (
    <div className='predatorsBR'>
      <h1>{title}</h1>
      <Carousel
        partialVisible={true}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
      >
        <div>
          <h2>PC</h2>
          <p>Place: {PC.foundRank}</p>
          <p>Predator Cutoff: {PC.val}</p>
          <p>Total Masters and Preds: {PC.totalMastersAndPreds}</p>
        </div>
        <div>
          <h2>Play Station</h2>
          <p>Place: {PS4.foundRank}</p>
          <p>Predator Cutoff: {PS4.val} </p>
          <p>Total Masters and Preds: {PS4.totalMastersAndPreds}</p>
        </div>
        <div>
          <h2>Xbox</h2>
          <p>Place: {X1.foundRank}</p>
          <p>Predator Cutoff: {X1.val}</p>
          <p>Total Masters and Preds: {X1.totalMastersAndPreds}</p>
        </div>
      </Carousel>
    </div>
  );
};
