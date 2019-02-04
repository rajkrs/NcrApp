//const StyleLintPlugin = require('stylelint-webpack-plugin');
const { resolve, join } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const NODE_ENV_DEV = process.env.NODE_ENV === 'development';
var src = resolve(join(__dirname, './src/assets/fonts'));

const tsLoaderUse = [{
    loader: 'awesome-typescript-loader',
    options: {
        configFileName: 'tsconfig.json',
        useCache: NODE_ENV_DEV
    }
}];


module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ['main']
    },
    target: 'web',
    context: resolve(join(__dirname, '../')),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules|bower-components/
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules|bower-components/,
                use: tsLoaderUse
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf|png)$/,
                include: src,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        },

                    }
                ]
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('postcss-smart-import'),
                                require('autoprefixer'),
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader!style-loader!css-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                ]
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

        ],
    },
    plugins: [
        new CheckerPlugin(),
        //new StyleLintPlugin()  //Commenting this out (need more research) as it is throwing error when we run command for webpack --watch.
    ],
    //externals: {
    //    'react': 'React',
    //    'react-dom': 'ReactDOM',
    //},
    performance: {
        hints: false,
    },
    stats: {
        colors: true,
        errorDetails: true,
        modules: true,
        reasons: true
    }
}

