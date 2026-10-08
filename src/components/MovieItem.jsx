import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import { CardBody, CardFooter } from 'react-bootstrap';
function MovieItem(props){
    // Log the movie when this component loads or gets a different movie prop.
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]);
    // Use the movie passed from Movies to fill in the Bootstrap card.
    return (
        <Card>
            {/* Show the title at the top of the card. */}
            <Card.Header>{props.myMovie.Title}</Card.Header>
            <Card.Body>
                {/* The title is also used as alt text for the poster. */}
                <img
                    src={props.myMovie.Poster}
                    alt={props.myMovie.Title}
                />
            </Card.Body>

            {/* Show the release year below the poster. */}
            <Card.Footer>{props.myMovie.Year}</Card.Footer>
        </Card>

    );
}
export default MovieItem;
