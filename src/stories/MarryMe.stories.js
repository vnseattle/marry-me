import React from 'react';
import { storiesOf } from '@storybook/react';
import MarryMe from '../component/index';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return (<MarryMe />)
}
)

