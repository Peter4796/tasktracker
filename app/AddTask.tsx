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
                <Text style={styles.textAdd}>Add Tasks</Text>
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
        backgroundColor: Colors.secondary,
    },
    container: {
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        paddingVertical: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    textAdd: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    label: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: "600",
        marginBottom: 6,
    },
    inputView: {
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    Input: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: "#2D2D2D",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        marginTop: 4,
    },
    dateView: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: "center",
        marginTop: 4,
        borderWidth: 1,
        borderColor: "#E8E8E8",
    },
    InputDate: {
        fontSize: 16,
        color: "#2D2D2D",
        flex: 1,
        paddingVertical: 6,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 15,
        marginTop: 30,
        marginBottom: 30,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
    },
});
