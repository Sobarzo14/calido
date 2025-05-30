import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import CourseCard from './CourseCard'
import SearchBar from './SearchBar'

const CoursesPage = () => {

  const handleSearch = () => {

  };
  return (
    <SafeAreaView style={{ marginTop: 0 }}>
      <SearchBar onSearch={handleSearch} />
      <View className='recommendedCourses'>

      </View>
      <CourseCard />
    </SafeAreaView>
  )
}

export default CoursesPage

const styles = StyleSheet.create({})
