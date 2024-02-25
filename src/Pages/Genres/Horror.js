import React from 'react'
import './Comedy.css';
import Comedy1 from '../../Assets/Comedy1.svg';
import Comedy2 from '../../Assets/Comedy2.svg';
import Comedy3 from '../../Assets/Comedy3.svg';
import Comedy4 from '../../Assets/Comedy4.svg';
import Comedy5 from '../../Assets/Comedy5.svg';
import Comedy6 from '../../Assets/Comedy6.svg';
import Comedy7 from '../../Assets/Comedy7.svg';
import Comedy8 from '../../Assets/Comedy8.svg';
import Comedy9 from '../../Assets/Comedy9.svg';
import Fa4 from '../../Assets/Featured_Audio_Book 4.svg';

import fiveStar from '../../Assets/5Star.svg';
import threeStar from '../../Assets/3Star.svg';
import fourStar from '../../Assets/4Star.svg';

const Horror = () => {
  return (
    <div className='comedy'>
      <div className="image-gallery2">
            <div className='image-item_fa1'>
                <img src={Comedy1} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">One Night at the call centre</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Chetan Bhagat</div>
                    </div>
                    <div className='ig2'>
                        <img src={fiveStar} alt=""></img>
                        
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Comedy2} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Anxious People</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Fredrik Backman</div>
                    </div>
                    <div className='ig2'>
                        <img src={threeStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Comedy3} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Everything if F*cked</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Mark Manson</div>
                    </div>
                    <div className='ig2'>
                        <img src={fourStar} alt=""></img>
                    </div>
                </div>
            </div>
            
            <div className='image-item_fa1'>
                <img src={Comedy4} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Lump</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Nathan Whitlock</div>
                    </div>
                    <div className='ig2'>
                        <img src={fiveStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Fa4} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Avengers: Infinity</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> J.A. Moore, Marvel</div>
                    </div>
                    <div className='ig2'>
                        <img src={fourStar} alt=""></img>
                    </div>
                </div>
            </div>
      </div>

      <div className="image-gallery2">
              <div className='image-item_fa1'>
                  <img src={Comedy6} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Tales from the Gas station, Volume four</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'>  Jack Townsend</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Comedy7} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">The Restaurant at the end of the Universe</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Douglas Adams</div>
                      </div>
                      <div className='ig2'>
                          <img src={fourStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Comedy8} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Hitchhiker’s guide to the Galaxy</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Douglas Adams</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>
              
              <div className='image-item_fa1'>
                  <img src={Comedy9} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">The Mysterious Stranger and Other Stories</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Mark Twain</div>
                      </div>
                      <div className='ig2'>
                          <img src={fiveStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Comedy5} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Die Nachteile Von Manschen</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Gereon Klung</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Horror