import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import "./ResourceCard.css";

export default function ResourceCard(props) {
    return (
        <Card className="resource-card-super">
            <div>
                <h1 className="resource-text resource-title">props.title</h1>
                <h2 className="resource-title resource description">props.subtitle</h2>
            </div>
            <p className="resourcecard-description resource-text">
                props.description
            </p>
            <CardContent orientation="horizontal">
                <div>
                    <p level="body-xs" className="resource-text">Release</p>
                    <p className=" resource-text">
                        12/13/23
                    </p>
                </div>
                <a href = {props.link}>
                <div className="resource-button">
                    <span className="resource-text">
                        Check out Resource
                    </span>
                </div> 
                </a>
            </CardContent>
        </Card>
    );
}