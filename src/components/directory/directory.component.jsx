import React from 'react';
import NewsItem from '../news-item/news-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
             sections : [
                {
                  title: "Meet Hayley Arceneaux, first person to go into space with a prosthesis",
                  imageUrl:  "https://www.thehindu.com/sci-tech/96fj10/article33953856.ece/ALTERNATES/LANDSCAPE_615/2021-02-25T200526Z761426494RC2WZL92S1BFRTRMADP3SPACE-EXPLORATION-INSPIRATIO",
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: "Why Warren Buffett won’t take the Reddit bait",
                  imageUrl:  "https://img.etimg.com/thumb/msid-81253728,width-107,height-58,imgsize-432122,overlay-etmarkets/photo.jpg",
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: "How NVIDIA Brings Autonomy To Automakers",
                  imageUrl: "https://cleantechnica.com/files/2021/02/NVIDIA-DRIVE-e1614488544701.png",
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: "First mass-produced solar power car rolling out in 2021, will retail for $25,900",
                  imageUrl: "https://i.dailymail.co.uk/1s/2021/02/28/01/39850826-0-image-a-16_1614475141817.jpg",
                  subtitle: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title:"Review: Caseology’s Nano Pop is the best slim but sturdy Galaxy S21 case",
                  imageUrl:  "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/02/caseology-nano-pop-galaxy-s21-blueberry-yellow-pop-flowerbed.jpg",
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
        }

    }
    render() {
        return (

            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,id,imageUrl}) => (
                     <NewsItem key={id} title={title} imageUrl={imageUrl}/>
               ))
                }
            </div>
        )
    }
}
export default Directory;