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

            CardUnknown: 'app/img/card_unknown.jpg',
            CardEmpty: 'app/img/card_empty.png',
            AceOfClubs: 'app/img/clubs_ace.png',
            AceOfHearts: 'app/img/hearts_ace.png',
            AceOfDiamonds: 'app/img/diamonds_ace.png',
            AceOfSpades: 'app/img/spades_ace.png',

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
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                },
            },
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
