import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "../components/Slide";
import { Pagination, Button, Flex } from "../components/SliderStyle";
import { limitImage } from "../Redux/actions";

const Slider = (props) => {
  const state = useSelector((state) => state.cat);
  const dispatch = useDispatch();
  //  const [limit, setLimit] = useState(10);

  const [slide, setSlide] = useState([state.cat]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousState = () => {
    if (currentIndex === 0) {
      return setCurrentIndex({ currentIndex: slide.length - 1 });
    }
    setCurrentIndex({ currentIndex: currentIndex - 1 });
  };

  const nextState = () => {
    const { currentIndex, slide } = this.state;
    if (currentIndex === slide.length - 1) {
      return setCurrentIndex({ currentIndex: 0 });
    }
    setCurrentIndex({ currentIndex: currentIndex + 1 });
  };

  const indexSlide = (info) => {
    const { id } = info;
    setCurrentIndex({ currentIndex: id - 1 });
  };

  const loadMore = () => {
    dispatch(limitImage());
  };

  console.log(state, "1111111111111111111111111111");
  return (
    <>
      {state.cat.length &&
        state.cat.map((item, index) => {
          return (
            <img
              src={item.url}
              key={index}
              style={{ width: "50px", height: "50px" }}
            />
          );
        })}

      <Button onClick={loadMore}>Load More</Button>
    </>
    // <Fragment>
    //   <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
    //   <Flex background>
    //     {slide.map(v => {
    //       let bgColor = "white";
    //       if (currentIndex + 1 === +v.id) {
    //         bgColor = "orange";
    //       }
    //       return (
    //         <Pagination
    //           key={v.id}
    //           bgColor={bgColor}
    //           onClick={() => indexSlide(v)}
    //         />
    //       );
    //     })}
    //   </Flex>
    //   <Flex>
    //     <Button onClick={()=> previousState}>Previous</Button>
    //     <Button onClick={()=> nextState}>Next</Button>
    //     <Button onClick={()=> loadMore}>Load More</Button>
    //   </Flex>
    // </Fragment>
  );
};

export default Slider;
