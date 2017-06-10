import React from 'react';
import PageHeader from 'PageHeader';

import SideCardsBox from 'DeckBox';
import DeckBox from 'DeckBox';
import CamelsBox from 'CamelsBox';

class Race extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <PageHeader title={'Race!'}/>
                </div>
                <div className="row container">
                    <div className="columns small-2 medium-2 large-2">
                        <SideCardsBox />
                    </div>

                    <div className="columns small-8 medium-8 large-8">
                        <CamelsBox/>
                    </div>

                    <div className="columns small-2 medium-2 large-2">
                        <DeckBox/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Race;
