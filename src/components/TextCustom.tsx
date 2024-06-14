import React, { FC, ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import colors from '~/styles/colors';

interface IProps {
    children: ReactNode;
    style?: TextStyle;
    color?: TextStyle["color"];
};

const TextCustom: FC<IProps> = ({ children, style, color, ...rest }) => {
    return (
        <Text
            style={[
                styles.defaultStyle,
                style,
                !!color && { color },
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    defaultStyle: {
        color: colors.text,
    },
});

export default TextCustom;