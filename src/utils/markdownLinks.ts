import { type ReactNode } from "react";
import { type FlatList, Linking, Platform } from "react-native";

export const openLink = (
  href: string,
  flatListRef: React.RefObject<FlatList<ReactNode>>,
) => {
  const relativeLink = href.startsWith("/#") && href.replace("/#", "");

  if (!relativeLink) return Linking.openURL(href);

  const flatListData = flatListRef.current?.props.data;
  const actualData = flatListData && Array.from(flatListData);
  const item = actualData?.find((node) => {
    const elem = node as React.ReactElement;
    const { id }: { id: string | undefined } = elem.props;
    if (id === relativeLink) return node;
  });
  flatListRef.current?.scrollToItem({
    animated: true,
    item,
    viewOffset: Platform.OS === "ios" ? 75 : 0,
  });
};
