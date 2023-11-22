import { FlatList, Pressable, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(item) {
    const handlePress = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={handlePress}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem(item)}
    />
  );
}
