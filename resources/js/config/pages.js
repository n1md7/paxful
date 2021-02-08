export const BUY_BITCOINS = 'buy-bitcoins';
export const SELL_BITCOINS = 'sell-bitcoins';
export const WALLET = 'wallet';
export const SUPPORT = 'support';
export const YOUR_ACCOUNT = 'your-account';

export default [
    {
        name: 'Buy bitcoins',
        path: '/buy',
        key: BUY_BITCOINS,
        subPages: []
    },
    {
        name: 'Sell bitcoins',
        path: '/sell',
        key: SELL_BITCOINS,
        tabs: [
            'Overview',
            'Trades',
            'Disputes',
            'Your offers',
            'My team',
            'Trade history'
        ]
    },
    {
        name: 'Wallet',
        path: '/wallet',
        key: WALLET,
        tabs: []
    },
    {
        name: 'Support',
        path: '/support',
        key: SUPPORT,
        tabs: []
    },
    {
        name: 'Your account',
        path: '/account',
        key: YOUR_ACCOUNT,
        tabs: []
    }
];
