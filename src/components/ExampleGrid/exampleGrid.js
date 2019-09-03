import React from 'react';

import Example from '../Example/example';

const ExampleGrid = ({ whiskies }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {whiskies.map(whisky => (<Example key={whisky.id} whisky={whisky} />))}
    </div>
);

export default ExampleGrid;