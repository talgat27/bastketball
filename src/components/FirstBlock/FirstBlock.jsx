import blackSpot from '../../images/black-spot.png'
import circleLogo from '../../images/circle-logo.png'
import pic1 from '../../images/pic1.png'
import './FirstBlock.scss'

export default function FirstBlock() {
    return (
        <div className='firstBlock-container'>
            <section>
                <div className='firstLine'>
                    <div>
                        <img src={blackSpot} alt="black spot" />
                        <span>Jersey</span>
                        <img src={blackSpot} alt="black spot" />
                        <span>Nike & NBA collaboration</span>
                    </div>
                </div>
                <div className="secondLine">
                    <span>Jersey</span>
                    <img src={circleLogo} alt="circle logo" />
                    <span>NBA</span>
                </div>
                <div className="thirdLine">
                    <div>
                        <p>whichever <span className='blue'>nba</span> <span className='red'>team</span> your support, get your jersey here today.</p>
                    </div>
                </div>
                <img src={pic1} alt="two basketball players" className='img'/>
            </section>
        </div>
    )
}