import ConceptItem from './ConceptItem';
import '../index.css';
const Concepts = (props) => {
    return (
        <ul id='concepts'>
            <ConceptItem
                image={props.concepts[0].image}
                title={props.concepts[0].title}
                description={props.concepts[0].description}
            />
            <ConceptItem
                image={props.concepts[1].image}
                title={props.concepts[1].title}
                description={props.concepts[1].description}
            />
            <ConceptItem
                image={props.concepts[2].image}
                title={props.concepts[2].title}
                description={props.concepts[2].description}
            />
        </ul>
    )
}

export default Concepts;