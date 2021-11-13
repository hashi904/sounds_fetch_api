import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import NarrowDownDialog from './NarrowDownDialog/Index'
import SearchContentDisplay from './SearchContentDisplay'

const Index = (props) => {
  // const [prefecture, setPrefecture] = useState('')
  // const [nickname, setNickname] = useState('')
  // const [birthday, setBirthday] = useState('')
  // const [experience, setExperience] = useState('')
  // const [liveExperience, setLiveExperience] = useState('')
  // const [affectedMusicians, setAffectedMusicians] = useState([])
  // const [plan, setPlan] = useState('')
  // const [genre, setGenre] = useState([])
  // const [commitment, setCommitment] = useState('')
  // const [activeDate, setActiveDate] = useState('')
  // const [sex, setSex] = useState('')
  const [instrumentType, setInstrumentType] = useState(props.initInstrumentType)
  const [freeWord, setFreeWord] = useState(props.initFreeWord)

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item xs={10}>
        <Box mt={10}>
          <SearchContentDisplay
            searchSelector = {props.searchSelector}
            instrumentType = {instrumentType}
            freeWord = {freeWord}
          />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box mt={10}>
          <Box display='flex' justifyContent='flex-end'>
            <NarrowDownDialog
              setCondition = {props.setCondition}
              setInstrumentType={setInstrumentType}
              setFreeWord={setFreeWord}
              // setPrefecture={setPrefecture}
              // setSex={setSex}
              // setExperience={setExperience}
              // setLiveExperience={setLiveExperience}
              // setPlan={setPlan}
              // setCommitment={setCommitment}
              // setActiveDate={setActiveDate}
              // setGenre={setGenre}
              // setAffectedMusicians={setAffectedMusicians}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Index
