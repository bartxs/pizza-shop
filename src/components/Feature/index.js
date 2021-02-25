import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Special offer of the Day</h1>
            <p>Super size pizza, with four different quarters your choice!</p>
            <FeatureButton>Order Now!</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
