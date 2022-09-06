/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { HomeStackParamList } from '../types';

const linking: LinkingOptions<HomeStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'Search',
            },
          },
          Mylist: {
            screens: {
              MylistScreen: 'Mylist',
            },
          },
          More: {
            screens: {
              MoreScreen: 'More',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
