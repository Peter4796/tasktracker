import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    SafeAreaView,
    Platform,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from "@/constants/Colors";
import Icon from "@/components/icon";

export default function AddTask() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [inputFocus, setInputFocus] = useState("");

    const showDatepicker = (input: string) => {
        setInputFocus(input);
        setShowDatePicker(true);
    };

    const onChange = (event: any, selectedDate: Date | undefined) => {
        setShowDatePicker(Platform.OS === "ios"); // Close the date picker on iOS after selecting a date
        if (selectedDate) {
            if (inputFocus === "dateToStart") {
                setStartDate(selectedDate);
            } else if (inputFocus === "dateToEnd") {
                setEndDate(selectedDate);
            }
        }
    };

    const inputs = [
        { name: "taskName", label: "Task Name", placeholder: "Task Name" },
        {
            name: "dateToStart",
            label: "Date of Start",
            placeholder: "Date of Start",
            isDate: true,
        },
        {
            name: "dateToEnd",
            label: "Date of End",
            placeholder: "Date of End",
            isDate: true,
        },
        { name: "overView", label: "Overview", placeholder: "Overview" },
        { name: "assignTo", label: "Assign to", placeholder: "Assign to" },
        { name: "comment", label: "Comment", placeholder: "Comment" },
    ];

    return (
        <ScrollView style={styles.addTaskContainer}>
            <SafeAreaView />
            <View style={styles.container}>
                <Text style={styles.textAdd}>Add Task</Text>
            </View>
            <View style={styles.inputContainer}>
                {inputs.map((input) => (
                    <View style={styles.inputView} key={input.name}>
                        <Text style={styles.label}>{input.label}</Text>
                        {input.isDate ? (
                            <View style={styles.dateView}>
                                <TextInput
                                    placeholder={input.placeholder}
                                    style={styles.InputDate}
                                    onFocus={() => showDatepicker(input.name)}
                                    value={
                                        input.name === "dateToStart"
                                            ? startDate.toDateString()
                                            : endDate.toDateString()
                                    }
                                />
                                <TouchableOpacity onPress={() => showDatepicker(input.name)}>
                                    <Icon name={'calendar-number-outline'} size={30} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TextInput
                                placeholder={input.placeholder}
                                style={styles.Input}
                                multiline={true}
                                numberOfLines={4}
                                textAlignVertical="top"
                            />
                        )}
                    </View>
                ))}
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={inputFocus === "dateToStart" ? startDate : endDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Create a task</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addTaskContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    container: {
        flexDirection: "row",
        paddingHorizontal: 16, // Reduced padding for a tighter layout
        alignItems: "center",
        justifyContent: "space-between", // Ensures content is well-spaced
        backgroundColor: Colors.primary,
        paddingVertical: 15, // Uniform vertical padding
        borderBottomLeftRadius: 12, // Add rounded corners
        borderBottomRightRadius: 12,
        shadowColor: "#000", // Add shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Shadow for Android
    },

    textAdd: {
        fontSize: 18,
        color: "white",
        paddingLeft: 120,
        fontWeight: "bold",
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    label: {
        fontSize: 13,
        color: "black",
        fontWeight: "bold",
    },
    inputView: {
        marginTop: 12, // Slightly reduce the margin for better spacing between inputs
        backgroundColor: "#FFFFFF", // Add a white background to make inputs stand out
        borderRadius: 10, // Rounded corners for a softer look
        padding: 10, // Add padding inside the container for a cleaner feel
        shadowColor: "#000", // Add shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Elevation for Android
    },
    Input: {
        backgroundColor: Colors.secondary, // Use a light background color for contrast
        borderRadius: 8, // Match or slightly reduce the radius for consistency
        paddingHorizontal: 15, // Add horizontal padding for spacious input
        paddingVertical: 12, // Ensure comfortable vertical padding
        fontSize: 14, // Slightly larger font for better readability
        color: "#333", // Darker font color for contrast
        borderWidth: 1, // Add a subtle border
        borderColor: "#E0E0E0", // Light gray border for a clean look
    },
    calenderImgs: {
        width: 25,
        height: 25,
    },
    dateView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        marginTop: 10,
    },
    InputDate: {
        fontSize: 12,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        marginTop: 25,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontWeight: "500",
    },
});
