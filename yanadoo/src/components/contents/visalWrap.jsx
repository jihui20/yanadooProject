import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y 
} from "swiper"; 
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; 
import "swiper/components/pagination/pagination.scss"; 
import "swiper/components/scrollbar/scrollbar.scss"; 
import styled from 'styled-components';
import axios from 'axios';

const VisualSlide = styled.div`
  max-width:1060px;
  width:100%;
  margin:0 auto;
  font-size:120%;
  font-weight:800;
  color:#000;
  word-break:keep-all;
  box-sizing:border-box;
  .test{
    position:relative;
    height:300px;
    background-repeat:no-repeat;
    background-position:50% 50%;
    background-size:cover;
  }
  .test p{
    display:inline-block;
    position:absolute;
    bottom:1em;
    left:.5em;
    background-color:rgba(255, 255, 255, .5);
  }

  @media ${(props) => props.theme.laptop}{
    padding:0 1em;
   }
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const VisualWrap = () => {

  const [slideInfo, setslideInfo] = useState([]);

  const slidedData = () => {
      axios
          .get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData.json')
          .then(({data}) => {
              setslideInfo(data);
          })
          .catch(e => {
              console.log(e);
          })

  }

  useEffect(() => {
    slidedData();
  }, [])


    return (
      <Swiper
      className='swiper-container'
      spaceBetween={50}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide> slide1 </SwiperSlide>
      <SwiperSlide> slide2 </SwiperSlide>
      <SwiperSlide> slide3 </SwiperSlide>
      <SwiperSlide> slide4</SwiperSlide>
      <SwiperSlide> slide5 </SwiperSlide>
      <SwiperSlide> slide6 </SwiperSlide>
    </Swiper>
    )
}

export default VisualWrap;