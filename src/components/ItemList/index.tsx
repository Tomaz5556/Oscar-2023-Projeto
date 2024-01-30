import React, { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StyledTouchableOpacity, StyledText } from './styles';

interface ItemListProps {
  data: string[];
  onPressItem: (item: string) => void;
}

export function ItemList({ data, onPressItem }: ItemListProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const renderItem: ListRenderItem<string> = ({ item }) => (
    <StyledTouchableOpacity
      onPress={() => {
        onPressItem(item);
        setSelectedItem(item);
      }}
      selected={item === selectedItem}
    >
      <StyledText>{item}</StyledText>
    </StyledTouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}