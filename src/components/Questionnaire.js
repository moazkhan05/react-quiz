import React, { Component } from 'react'

/*api*/
import dataSet from '../api/dataSet';

/*components*/
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

export class Questionnaire extends Component {
    constructor(){
        super();
        this.state={
            current:0,
            dataSet:dataSet,
            correct:0,
            incorrect:0,
            isFinished:false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(choice){
        
        if(choice == this.state.dataSet[this.state.current].correct )
            this.setState({correct : this.state.correct +1});
        else    
            this.setState({incorrect : this.state.incorrect +1}); 
            
        if (this.state.current == this.state.dataSet.length-1 )
            this.setState({ isFinished : true });
        else
            this.setState({ current : this.state.current +1 });
               
    }

    render() {
        return (
            <div>
               <QuizArea handleClick={this.handleClick}  
                        isFinished={this.state.isFinished}
                        correct={this.state.correct} 
                        incorrect={this.state.incorrect}
                        dataSet={this.state.dataSet[this.state.current]}/>
               <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect}/> 
            </div>
        )
    }
}

export default Questionnaire
