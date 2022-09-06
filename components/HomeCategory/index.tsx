import { Image, FlatList } from 'react-native';
import { Text } from '../../components/Themed';

import styles from './style'


interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
           id: string ,
           poster: string,
        }[]
    }
}
 

// export default function HomeCatrgory({ navigation }: RootTabScreenProps<'Home'>) {
const HomeCategory = (props: HomeCategoryProps) => {
    const {category} = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList 
        data= {category.movies}
        renderItem = {({item}) => (
            <Image style={styles.image} source= {{ uri: item.poster }} />
        )}
        horizontal
      />
    </>
  );
}

export default HomeCategory;
