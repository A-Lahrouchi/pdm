import {createStore, combineReducers} from 'redux';
import FavoriteCoinCard from '../components/FavoriteCoinCard';

//Action
const ADD_FAVORIT_COIN = 'ADD_FAVORITE_COIN';

const addFavoritCoin = coin => {
  return {
    type: ADD_FAVORIT_COIN,
    payload: {
      coin,
    },
  };
};

//reducer

const initFavoriteCoinList = [
  {
    id: 'bitcoin',
    rank: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    volumeUsd24Hr: 13312149834.3490261076453956,
    priceUsd: 62081.3175820536678842,
    changePercent24Hr: 2.8638475671636943,
    vwap24Hr: 60827.8814068980567711,
  },
  {
    id: 'ethereum',
    rank: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    supply: 120155065.83782619,
    maxSupply: null,
    marketCapUsd: 410039006357.1356222776966618,
    volumeUsd24Hr: 8538874999.3346879350830056,
    priceUsd: 3412.5819290096934876,
    changePercent24Hr: 3.3083159705526166,
    vwap24Hr: 3361.6133911032061147,
  },
  {
    id: 'tether',
    rank: 3,
    symbol: 'USDT',
    name: 'Tether',
    supply: 112559949271.11937,
    maxSupply: null,
    marketCapUsd: 112552303512.7406642304016193,
    volumeUsd24Hr: 18964636474.7701466260085889,
    priceUsd: 0.9999320738999243,
    changePercent24Hr: 0.0079528497491675,
    vwap24Hr: 0.9998360291242793,
  },
  {
    id: 'binance-coin',
    rank: 4,
    symbol: 'BNB',
    name: 'BNB',
    supply: 166801148.0,
    maxSupply: 166801148.0,
    marketCapUsd: 96401535806.7286141211021144,
    volumeUsd24Hr: 268339396.9031371047176458,
    priceUsd: 577.9428796660836778,
    changePercent24Hr: 2.6162759371459702,
    vwap24Hr: 569.7564857135717447,
  },
  {
    id: 'solana',
    rank: 5,
    symbol: 'SOL',
    name: 'Solana',
    supply: 461692203.9830211,
    maxSupply: null,
    marketCapUsd: 63960628311.9174048157787784,
    volumeUsd24Hr: 1128190155.6656568179155697,
    priceUsd: 138.5352140671398046,
    changePercent24Hr: 6.6341395542903323,
    vwap24Hr: 134.1811721204625551,
  },
];

const favoriteCoinList = (state = initFavoriteCoinList, action) => {
  switch (action.type) {
    case ADD_FAVORIT_COIN:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    default:
      return state;
  }
};

const rootReducers = combineReducers({favoriteCoinList});

//Store
export const store = createStore(rootReducers);
