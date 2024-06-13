import React, { FC, ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

import responsiveSize from '~/helpers/responsiveSize';
import colors from '~/styles/colors';

interface IProps {
    children: ReactNode;
    style?: TextStyle;
    color?: TextStyle["color"];
    fontSize?: number;
    fontWeight?: TextStyle["fontWeight"];
    light?: boolean;
    medium?: boolean;
    bold?: boolean;
    center?: boolean;
    justify?: boolean;
    right?: boolean;
    left?: boolean;
    error?: boolean;
    onPress?: () => void;
};

const TextCustom: FC<IProps> = ({
    children,
    style,
    color = colors.text,
    fontSize = 14,
    fontWeight = "400",
    light,
    medium,
    bold,
    center,
    justify,
    right,
    left,
    error,
    onPress,
    ...rest
}) => {

    return (
        <Text
            style={[
                styles.defaultStyle,
                { fontSize: responsiveSize(fontSize), fontWeight },
                !!color && { color },
                light && { fontFamily: 'Montserrat-Light' },
                medium && { fontFamily: 'Montserrat-Medium' },
                bold && { fontFamily: 'Montserrat-Bold' },
                center && { textAlign: 'center' },
                justify && { textAlign: 'justify' },
                right && { textAlign: 'right' },
                left && { textAlign: 'left' },
                error && { fontSize: responsiveSize(10), color: colors.error },
                style,
            ]}
            onPress={onPress}
            {...rest}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Montserrat-Regular',
    },
});

export default TextCustom;