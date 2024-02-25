import React from 'react'
import './Comedy.css';
import Action1 from '../../Assets/Action1.svg';
import Action2 from '../../Assets/Action2.svg';
import Action3 from '../../Assets/Action3.svg';
import Action4 from '../../Assets/Action4.svg';
import Action5 from '../../Assets/Action5.svg';
import Action6 from '../../Assets/Action6.svg';
import Action7 from '../../Assets/Action7.svg';
import Action8 from '../../Assets/Action8.svg';
import Action9 from '../../Assets/Action9.svg';
import Action10 from '../../Assets/Action10.svg';

import fiveStar from '../../Assets/5Star.svg';
import threeStar from '../../Assets/3Star.svg';
import fourStar from '../../Assets/4Star.svg';
const Action = () => {
  return (
    <div className='comedy'>
      <div className="image-gallery2">
            <div className='image-item_fa1'>
                <img src={Action1} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">You only live once</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Stuti Changle</div>
                    </div>
                    <div className='ig2'>
                        <img src={fiveStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Action2} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Vow of Deception</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Rina Kent</div>
                    </div>
                    <div className='ig2'>
                        <img src={threeStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Action3} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Wettlauf ins gluck</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Lilac Mills</div>
                    </div>
                    <div className='ig2'>
                        <img src={fourStar} alt=""></img>
                    </div>
                </div>
            </div>
            
            <div className='image-item_fa1'>
                <img src={Action4} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Like day and night</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Alectra white</div>
                    </div>
                    <div className='ig2'>
                        <img src={fiveStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Action5} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Vanished</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Anna J. Stewart</div>
                    </div>
                    <div className='ig2'>
                        <img src={fourStar} alt=""></img>
                    </div>
                </div>
            </div>
      </div>

      <div className="image-gallery2">
              <div className='image-item_fa1'>
                  <img src={Action6} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">A BBC Radio Drama Collections</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'>  Mark Twain</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Action7} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">The Song of the forever rains</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> E.J. Mellow</div>
                      </div>
                      <div className='ig2'>
                          <img src={fourStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Action8} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">White Nights : The complete Duet</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Anna Zaires</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>
              
              <div className='image-item_fa1'>
                  <img src={Action9} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">My Immortal Highlanders : Part Two</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Hannah Howell</div>
                      </div>
                      <div className='ig2'>
                          <img src={fiveStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Action10} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Bodyguard for a Friend’s Daughter</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Stella Kyarri</div>
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

export default Action