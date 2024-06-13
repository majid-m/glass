import React, { FC, ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import colors from '~/styles/colors';

interface IProps {
    children: ReactNode;
    style?: TextStyle;
};

const TextCustom: FC<IProps> = ({ children, style, ...rest }) => {
    return (
        <Text
            style={[
                styles.defaultStyle,
                style,
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