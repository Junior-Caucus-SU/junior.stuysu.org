import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
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
                <Button
                    variant="solid"
                    size="md"
                    aria-label="Check out more"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Check out Resource
                </Button>
            </CardContent>
        </Card>
    );
}