import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Pagination,
  Button,
  Flex,
  SlideSection,
} from "./SliderStyle";
import { limitImage } from "../Redux/actions";

const Slider = () => {
  const state = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(limitImage());
  };

  return (
    <Fragment>
      {state.cat.length &&
        state.cat.map((item, index) => {
          return (
            <img
              src={item.url}
              key={index}
              style={{ width: "100px", height: "100px", marginRight: '4px' }}
            />
          );
        })}
      <Flex>
        <Button onClick={loadMore}>Load More</Button>
      </Flex>
    </Fragment>
  );
};

export default Slider;

// <Fragment>
    //   <Flex background>
    //     {state.cat.length &&
    //       state.cat.map((item, index) => {
    //         let bgColor = "white";
    //         if (currentIndex + 1 === +item.id) {
    //           bgColor = "orange";
    //         }
    //         return ( 
    //           <SlideSection key={currentIndex}>
    //             <Pagination
    //               key={index}
    //               bgColor={bgColor}
    //               // onClick={() => indexSlide(item)}
    //             />
    //           </SlideSection>
    //         );
    //       })}
    //   </Flex>