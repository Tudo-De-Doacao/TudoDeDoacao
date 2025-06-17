    import { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from 'react-native';

const CollapsibleView = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapse = () => {
    Animated.timing(animation, {
      toValue: collapsed ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setCollapsed(!collapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleCollapse}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.contentContainer, { height: heightInterpolate }]}>
        <View>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#FDEEDA',
    marginBottom: 10,
  },
  titleContainer: {
    backgroundColor: '#ffc0b8',
    padding: 10,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
});

export default CollapsibleView;
