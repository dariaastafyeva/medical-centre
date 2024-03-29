const getMappedCard = (elements, componentName, propName) => {
    const Component = componentName;

    return (
        <div className='team-cards'>
            {elements.map(element => (
                <Component {...propName={element}} />
            ))}
        </div>

    );
};

const getFirstLetterUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

export { getMappedCard, getFirstLetterUpperCase };