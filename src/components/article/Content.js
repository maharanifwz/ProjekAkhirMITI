import React from 'react'
import { Row, Col } from 'antd'
import article1 from '../../assets/article1.png'
import artikel2 from '../../assets/artikel2.png'

const items = [
  {
    key: '1',
    image: 'artikel2',
    title: 'The Health and Mood-Boost..',
  },
  {
    key: '2',
    image: 'artikel3',
    title: 'The Health and Mood-Boost..',
  },{
    key: '3',
    image: 'artikel4',
    title: 'The Health and Mood-Boost..',
  },{
    key: '4',
    image: 'artikel5',
    title: 'The Health and Mood-Boost..',
  },
]

export const AppContent = () => {
  return (
    <div className='block artikel' >
      <div className='container-fluid'>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <h2>The Health and Mood-Boosting Benefits of Pets</h2>
            <p className='unique'>24 Feb 2022 / by kelompok 7 </p>
            <img src={article1}/>
            <article>
              <p>
                Most pet owners are clear about the immediate joys that come with sharing their lives with companion animals. However, many of us remain unaware of the physical and mental health benefits that can also accompany the pleasure of snuggling up to a furry friend. It’s only recently that studies have begun to scientifically explore the benefits of the human-animal bond.
              </p>
              <p>
                Pets have evolved to become acutely attuned to humans and our behavior and emotions. Dogs, for example, are able to understand many of the words we use, but they’re even better at interpreting our tone of voice, body language, and gestures. And like any good human friend, a loyal dog will look into your eyes to gauge your emotional state and try to understand what you’re thinking and feeling (and to work out when the next walk or treat might be coming, of course).
              </p>
              <p>
                Pets, especially dogs and cats, can reduce stress, anxiety, and depression, ease loneliness, encourage exercise and playfulness, and even improve your cardiovascular health. Caring for an animal can help children grow up more secure and active. Pets also provide valuable companionship for older adults. Perhaps most importantly, though, a pet can add real joy and unconditional love to your life.
              </p>
              <p>
                While it’s true that people with pets often experience greater health benefits than those without, a pet doesn’t necessarily have to be a dog or a cat. A rabbit could be ideal if you’re allergic to other animals or have limited space but still want a furry friend to snuggle with. Birds can encourage social interaction and help keep your mind sharp if you’re an older adult. Snakes, lizards, and other reptiles can make for exotic companions. Even watching fish in an aquarium can help reduce muscle tension and lower your pulse rate.
              </p>
            </article>
          </Col>
          <Col span={12}>
            <div className='artikel-desc'>
            <h4>Artikel Terbaru</h4>
            <div className='artikel-section'>
            {items.map(item => {
              return (
                <div className='artikel-style'>
                  <img className='float' style={{width:96}} src={require('../../assets/' + item.image + '.png')}/>
                  <p>{item.title}</p>
                  <hr/>
                </div>
              
              );
            })}
            </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
