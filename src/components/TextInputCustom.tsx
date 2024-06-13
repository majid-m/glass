import { FC } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

import TextCustom from '@components/TextCustom';
import colors from '@styles/colors';
import responsiveSize from '@helpers/responsiveSize';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface IProps extends Omit<TextInputProps, "error"> {
    inputRef?: TextInputProps["ref"];
    containerStyle?: ViewProps["style"];
    label?: string;
    rightIcon?: {
        icon: IconSource;
        color?: string;
        onPress?: () => void;
    };
    leftIcon?: {
        icon: IconSource;
        color?: string;
        onPress?: () => void;
    };
    error?: string;
    value: TextInputProps["value"];
    onChangeText: TextInputProps["onChangeText"];
};

const TextInputCustom: FC<IProps> = ({
    inputRef,
    containerStyle,
    label,
    rightIcon,
    leftIcon,
    returnKeyType,
    error,
    value,
    onChangeText,
    ...rest
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextCustom style={styles.label} medium fontSize={14}>
                {label}
            </TextCustom>
            <TextInput
                ref={inputRef}
                mode='outlined'
                outlineColor={!!value ? colors.textLight : colors.borderLight}
                activeOutlineColor={colors.textLight}
                textColor={colors.text}
                placeholderTextColor={colors.placeholder}
                outlineStyle={styles.outline}
                contentStyle={styles.content}
                returnKeyType={returnKeyType}
                blurOnSubmit={returnKeyType === 'next' ? false : true}
                error={!!error}
                value={value}
                onChangeText={onChangeText}
                right={
                    rightIcon &&
                    <TextInput.Icon
                        icon={rightIcon.icon}
                        color={rightIcon?.color ?? colors.border}
                        forceTextInputFocus={false}
                        onPress={rightIcon.onPress}
                    />
                }
                left={
                    leftIcon &&
                    <TextInput.Icon
                        icon={leftIcon.icon}
                        color={leftIcon?.color ?? colors.border}
                        forceTextInputFocus={false}
                        onPress={leftIcon.onPress}
                    />
                }
                {...rest}
            />
            {!!error &&
                <TextCustom style={styles.error} fontSize={10} color={colors.error}>
                    {error}
                </TextCustom>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    outline: {
        borderRadius: responsiveSize(8),
    },
    content: {
        fontSize: responsiveSize(16),
    },
    label: {
        marginBottom: responsiveSize(4),
        marginLeft: responsiveSize(2),
        fontWeight: "500",
    },
    error: {
        marginTop: responsiveSize(4),
        marginLeft: responsiveSize(2),
    },
});

export default TextInputCustom;