import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search courses..." }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (text: string) => {
        setSearchTerm(text);
        onSearch(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchTerm}
                onChangeText={handleChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 2,
        borderColor: "black"
    },
});

export default SearchBar;
