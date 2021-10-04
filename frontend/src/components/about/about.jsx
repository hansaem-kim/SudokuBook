import React from 'react';
import hansaem from '../../assets/images/hansaem-pic.jpg'
import simon from '../../assets/images/simon-pic.jpg'
import quinn from '../../assets/images/quinn-pic.jpeg'
import aiden from '../../assets/images/aiden-pic.jpg'


class About extends React.Component{


    render(){
        return(
            <div className='about-container'>
                <h1>Meet the Dev Team</h1>
                <div className="developers-container">
                    <div className="developer-info">
                        <h1>Aiden Chang</h1>
                        <div className="inner-div">
                            <div className='row'>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://github.com/skylineciel"><span className='github'><i class="fab fa-github fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aidenjang"><span className='linkedin'><i class="fab fa-linkedin fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><span className='personal'><i class="fas fa-user-circle fa-3x"></i></span></div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='one-aiden'><i class="fas fa-question-circle fa-3x"></i></span>                        
                                    <div className='fact hide'>
                                        <p>Aiden got lasek surgery done.</p>
                                    </div></div>
                                
                                <div className='info-tile'><img className='profile-pic' src={aiden} alt="aiden-picture" /></div>
                                <div className='info-tile fact-tile'><span className='two-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Aiden was born in South Korea.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='three-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Aiden has a background in computer engineering.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='four-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Aiden is a full stack developer who loves to build useful applications.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='five-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Aiden's favorite logic game is Rush Hour.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="developer-info">
                        <h1>Hansaem Kim</h1>
                        <div className="inner-div">
                            <div className='row'>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://github.com/hansaem-kim"><span className='github'><i class="fab fa-github fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hansaem-kim-244238127/"><span className='linkedin'><i class="fab fa-linkedin fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><span className='personal'><i class="fas fa-user-circle fa-3x"></i></span></div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='one-aiden'><i class="fas fa-question-circle fa-3x"></i></span>                        
                                    <div className='fact hide'>
                                        <p>Hansaem is a Teach For America alumni. He was a highschool math teacher.</p>
                                    </div></div>
                                <div className='info-tile'><img className='profile-pic' src={hansaem} alt="hansaem-picture" /></div>
                                <div className='info-tile fact-tile'><span className='two-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Hansaem grew up in Vegas but has never gambled. </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='three-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>안녕하세요, I speak Korean.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='four-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Hansaem is a Nonogram (picture logic puzzle) master.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='five-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Hansaem never lost in Clue, a board-game.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="developer-info">
                        <h1>Quinn Mullaney</h1>
                        <div className="inner-div">
                            <div className='row'>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://github.com/qmullaney"><span className='github'><i class="fab fa-github fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/quinntmullaney/"><span className='linkedin'><i class="fab fa-linkedin fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><span className='personal'><i class="fas fa-user-circle fa-3x"></i></span></div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='one-aiden'><i class="fas fa-question-circle fa-3x"></i></span>                        
                                    <div className='fact hide'>
                                        <p>Quinn’s favorite puzzle is not actually sudoku, but the Rubik’s Cube.</p>
                                    </div></div>
                                
                                <div className='info-tile'><img className='profile-pic' src={quinn} alt="quinn-picture" /></div>
                                <div className='info-tile fact-tile'><span className='two-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Quinn can solve the Rubik’s Cube in around 30 seconds.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='three-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Quinn likes to play, but sucks at, League of Legends.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='four-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Rainbow sprinkles on vanilla soft serve is about as good as it gets, in Quinn’s opinion.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='five-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Quinn likes to read and watch any media in the fiction genre.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="developer-info">
                        <h1>Simon Puno</h1>
                        <div className="inner-div">
                            <div className='row'>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://github.com/simonpuno"><span className='github'><i class="fab fa-github fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/simonpuno/"><span className='linkedin'><i class="fab fa-linkedin fa-3x"></i></span></a></div>
                                <div className='info-tile link-tile'><span className='personal'><i class="fas fa-user-circle fa-3x"></i></span></div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='one-aiden'><i class="fas fa-question-circle fa-3x"></i></span>                        
                                    <div className='fact hide'>
                                        <p>Simon's favorite game is Jeopardy.</p>
                                    </div></div>
                                
                                <div className='info-tile'><img className='profile-pic' src={simon} alt="simon-picture" /></div>
                                <div className='info-tile fact-tile'><span className='two-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Simon's favorite foods are steak and ramen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='info-tile fact-tile'><span className='three-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Simon enjoys tasting hot sauces, traveling, hiking, and trying new restaurants. </p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='four-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>In his free time, Simon likes to go on walks, play guitar, or watch TV.</p>
                                    </div>
                                </div>
                                <div className='info-tile fact-tile'><span className='five-aiden'><i class="fas fa-question-circle fa-3x"></i></span>
                                    <div className='fact hide'>
                                        <p>Simon's first concert was Taylor Swift in 2007 on the Fearless Tour.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>
        )
    }
}

export default About;