import React, { Component } from 'react';
import Player from './Player';
import './Team.css';

class Team extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h3 className="Team-winner">Winning Team</h3>
        } else {
            title = <h3 className="Team-loser">Losing Team</h3>
        }
        return (
            <div className="Team">
                <h2>{this.props.teamName}</h2>
                {title}
                <h4>Score: {this.props.score}</h4>
                <div className="Team-cards">
                    {this.props.players.map((p) => (
                        <Player firstName={p.firstName} lastName={p.lastName} position={p.position} team={p.team} rating={p.rating} />
                    ))}
                </div>

            </div>
        )
    }
}

export default Team;