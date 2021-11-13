import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
  chip: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    color: '#fff',
    fontWeight: 600,
    backgroundColor: '#2f2d32',
  },
})

const SearchContentDisplay = (props) => {
  const classes = useStyles()
  const [instrumentTypeName, setInstrumentTypeName] = useState('')
  const [freeWord, setFreeWord] = useState('')

  // note 楽器検索した時に数字になってしまう件の暫定対応
  useEffect(() => {
    if(props.instrumentType && props.searchSelector.length !== 0){
      const instrumentSelectorArray = props.searchSelector.instrument_types
      const instrument = instrumentSelectorArray.find((type) => type.id === parseInt(props.instrumentType))
      setInstrumentTypeName(instrument.name)
    } else {
      setInstrumentTypeName('')
    }
  }, [props.instrumentType, props.searchSelector])
  useEffect(() => {
    if(props.freeWord){
      setFreeWord(props.freeWord)
    } else {
      setFreeWord('')
    }
  }, [props.freeWord])
  return (
    <Box>
      { instrumentTypeName && <Chip label={instrumentTypeName} className={classes.chip} />} 
      { freeWord && <Chip label={freeWord} className={classes.chip} />} 
    </Box>
  )
}

export default SearchContentDisplay
