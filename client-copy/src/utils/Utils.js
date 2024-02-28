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


export {getMappedCard};