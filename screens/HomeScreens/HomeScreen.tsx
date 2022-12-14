import { Image, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import styles from './style'
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';


// const firstCategory = categories.items[0]

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    // const HomeScreen = () => {
return (
    <View style={styles.container}>
        {/* List of categories */}
        <FlatList
            data = {categories.items}
            renderItem={({item}) => <HomeCategory category={item} />}
        />
    </View>
  );
}

// export default HomeScreen;