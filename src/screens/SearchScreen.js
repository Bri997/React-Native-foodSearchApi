import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/Searchbar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        ></ResultsList>
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit Pricer"
        ></ResultsList>
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        ></ResultsList>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
