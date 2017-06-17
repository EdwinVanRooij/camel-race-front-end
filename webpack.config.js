var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        })
    ],

    output: {
        path: __dirname + '/public',
        filename: './bundle.js',
    },
    resolve: {
        root: __dirname,
        alias: {
            Container: 'app/components/Container.jsx',
            Nav: 'app/components/Nav.jsx',
            Rules: 'app/components/Rules.jsx',
            Author: 'app/components/Author.jsx',

            applicationStyles: 'app/styles/app.scss',

            PageHeader: 'app/components/PageHeader.jsx',

            Util: 'app/util.jsx',

            Game: 'app/components/game/Game.jsx',

            Lobby: 'app/components/game/lobby/Lobby.jsx',
            LobbyConnectedBox: 'app/components/game/lobby/LobbyConnectedBox.jsx',
            LobbyStartBox: 'app/components/game/lobby/LobbyStartBox.jsx',

            Race: 'app/components/game/race/Race.jsx',
            DeckBox: 'app/components/game/race/DeckBox.jsx',
            SideCardsBox: 'app/components/game/race/SideCardsBox.jsx',
            CamelsBox: 'app/components/game/race/CamelsBox.jsx',
            Camel: 'app/components/game/race/Camel.jsx',

            Results: 'app/components/game/results/Results.jsx',
            ResultsBox: 'app/components/game/results/ResultsBox.jsx',
            RestartBox: 'app/components/game/results/RestartBox.jsx',
            PlayerResults: 'app/components/game/results/PlayerResults.jsx',

            // Sound
            CardFlipSound: 'app/sound/card_flip.mp3',
            VictorySound: 'app/sound/victory.mp3',
            RunescapeSound: 'app/sound/runescape_sound.mp3',
            HorseRace: 'app/sound/horse_race.mp3',

            // Images
            CardUnknown: 'app/img/card_unknown.jpg',
            CardEmpty: 'app/img/card_empty.png',

            AceOfClubs: 'app/img/ace_of_clubs.png',
            AceOfHearts: 'app/img/ace_of_hearts.png',
            AceOfDiamonds: 'app/img/ace_of_diamonds.png',
            AceOfSpades: 'app/img/ace_of_spades.png',

            TwoOfClubs: 'app/img/2_of_clubs.png',
            TwoOfDiamonds: 'app/img/2_of_diamonds.png',
            TwoOfHearts: 'app/img/2_of_hearts.png',
            TwoOfSpades: 'app/img/2_of_spades.png',

            ThreeOfClubs: 'app/img/3_of_clubs.png',
            ThreeOfDiamonds: 'app/img/3_of_diamonds.png',
            ThreeOfHearts: 'app/img/3_of_hearts.png',
            ThreeOfSpades: 'app/img/3_of_spades.png',

            FourOfClubs: 'app/img/4_of_clubs.png',
            FourOfDiamonds: 'app/img/4_of_diamonds.png',
            FourOfHearts: 'app/img/4_of_hearts.png',
            FourOfSpades: 'app/img/4_of_spades.png',

            FiveOfClubs: 'app/img/5_of_clubs.png',
            FiveOfDiamonds: 'app/img/5_of_diamonds.png',
            FiveOfHearts: 'app/img/5_of_hearts.png',
            FiveOfSpades: 'app/img/5_of_spades.png',

            SixOfClubs: 'app/img/6_of_clubs.png',
            SixOfDiamonds: 'app/img/6_of_diamonds.png',
            SixOfHearts: 'app/img/6_of_hearts.png',
            SixOfSpades: 'app/img/6_of_spades.png',

            SevenOfClubs: 'app/img/7_of_clubs.png',
            SevenOfDiamonds: 'app/img/7_of_diamonds.png',
            SevenOfHearts: 'app/img/7_of_hearts.png',
            SevenOfSpades: 'app/img/7_of_spades.png',

            EightOfClubs: 'app/img/8_of_clubs.png',
            EightOfDiamonds: 'app/img/8_of_diamonds.png',
            EightOfHearts: 'app/img/8_of_hearts.png',
            EightOfSpades: 'app/img/8_of_spades.png',

            NineOfClubs: 'app/img/9_of_clubs.png',
            NineOfDiamonds: 'app/img/9_of_diamonds.png',
            NineOfHearts: 'app/img/9_of_hearts.png',
            NineOfSpades: 'app/img/9_of_spades.png',

            TenOfClubs: 'app/img/10_of_clubs.png',
            TenOfDiamonds: 'app/img/10_of_diamonds.png',
            TenOfHearts: 'app/img/10_of_hearts.png',
            TenOfSpades: 'app/img/10_of_spades.png',

            JackOfClubs: 'app/img/jack_of_clubs.png',
            JackOfDiamonds: 'app/img/jack_of_diamonds.png',
            JackOfHearts: 'app/img/jack_of_hearts.png',
            JackOfSpades: 'app/img/jack_of_spades.png',

            QueenOfClubs: 'app/img/queen_of_clubs.png',
            QueenOfDiamonds: 'app/img/queen_of_diamonds.png',
            QueenOfHearts: 'app/img/queen_of_hearts.png',
            QueenOfSpades: 'app/img/queen_of_spades.png',

            KingOfClubs: 'app/img/king_of_clubs.png',
            KingOfDiamonds: 'app/img/king_of_diamonds.png',
            KingOfHearts: 'app/img/king_of_hearts.png',
            KingOfSpades: 'app/img/king_of_spades.png',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpg|png|svg|mp3)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                },
            },
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
