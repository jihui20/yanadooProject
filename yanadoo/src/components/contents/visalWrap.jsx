import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss'; 
import 'swiper/components/scrollbar/scrollbar.scss'; 
import styled from 'styled-components';
import axios from 'axios';

const VisualSlideS = styled.div`
  max-width:1200px;
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
      <VisualSlideS>
        <Swiper
        className='swiper-container'
        slidesPerView={1}
        breakpoints={{
          640: {
            // width: 640,
            slidesPerView: 1,
          },
          960: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {slideInfo &&
              slideInfo.map((slideList, idx) => (
                <SwiperSlide key={idx}>
                  
                    <div className="test" style={{backgroundImage: `url(` + slideList.picture + `)`}}>
                      <p>{slideList.title}</p>
                    </div>
                </SwiperSlide>
              ))

            }
      </Swiper>
    </VisualSlideS>
    )
}

export default VisualWrap;