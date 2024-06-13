import { StyleSheet } from "react-native";

import responsiveSize from "@helpers/responsiveSize";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveSize(16),
        paddingVertical: responsiveSize(16),
    },
});

export default styles;