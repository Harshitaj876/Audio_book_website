import React from 'react'
import './Comedy.css';
import Biography1 from '../../Assets/Biography1.svg';
import Biography2 from '../../Assets/Biography2.svg';
import Biography3 from '../../Assets/Biography3.svg';
import Biography4 from '../../Assets/Biography4.svg';
import Biography5 from '../../Assets/Biography5.svg';
import Biography6 from '../../Assets/Biography6.svg';
import Biography7 from '../../Assets/Biography7.svg';
import Biography8 from '../../Assets/Biography8.svg';
import Biography9 from '../../Assets/Biography9.svg';
import Biography10 from '../../Assets/Biography10.svg';

import fiveStar from '../../Assets/5Star.svg';
import threeStar from '../../Assets/3Star.svg';
import fourStar from '../../Assets/4Star.svg';
const Biography = () => {
  return (
    <div className='comedy'>
      <div className="image-gallery2">
            <div className='image-item_fa1'>
                <img src={Biography1} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Doglapan</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Ashneer Grover</div>
                    </div>
                    <div className='ig2'>
                        <img src={fiveStar} alt=""></img>
                        
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Biography2} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Autobiography of a Yogi</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Paramahansa</div>
                    </div>
                    <div className='ig2'>
                        <img src={threeStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Biography3} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">Same as ever</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Morgan Housel</div>
                    </div>
                    <div className='ig2'>
                        <img src={fourStar} alt=""></img>
                    </div>
                </div>
            </div>
            
            <div className='image-item_fa1'>
                <img src={Biography4} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">L'atto creativo</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Rick Rubin</div>
                    </div>
                    <div className='ig2'>
                        <img src={fiveStar} alt=""></img>
                    </div>
                </div>
            </div>

            <div className='image-item_fa1'>
                <img src={Biography5} alt=""></img>
                <div className='text_box_fa1'>
                    <div className="title2">War Dog</div>
                    <div className="description2">
                        <div className='blue_written1'>Written by:</div>
                        <div className='black_by1'> Damien Lewis</div>
                    </div>
                    <div className='ig2'>
                        <img src={fourStar} alt=""></img>
                    </div>
                </div>
            </div>
      </div>

      <div className="image-gallery2">
              <div className='image-item_fa1'>
                  <img src={Biography7} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Jack Kerouac - Kurzbiografie Kompakt</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'>  Jurgen Fritsche</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Biography8} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Biohrafias Breves - Pepe Mujica</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Luis Machado</div>
                      </div>
                      <div className='ig2'>
                          <img src={fourStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Biography6} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">The Almanack of Naval Ravikant</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Eric Jorgenson</div>
                      </div>
                      <div className='ig2'>
                          <img src={threeStar} alt=""></img>
                      </div>
                  </div>
              </div>
              
              <div className='image-item_fa1'>
                  <img src={Biography9} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">The Rebellious CEO - 12 leaders who did it right </div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Ralph Nader</div>
                      </div>
                      <div className='ig2'>
                          <img src={fiveStar} alt=""></img>
                      </div>
                  </div>
              </div>

              <div className='image-item_fa1'>
                  <img src={Biography10} alt=""></img>
                  <div className='text_box_fa1'>
                      <div className="title2">Detras del ruido: Todo lo que aprendi para...</div>
                      <div className="description2">
                          <div className='blue_written1'>Written by:</div>
                          <div className='black_by1'> Angel Martin</div>
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

export default Biography