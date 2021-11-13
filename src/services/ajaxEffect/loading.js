import CircularProgress from '@material-ui/core/CircularProgress' 

const style = {
  display: 'inlineBlock',
  textAlign: 'left'
}
const Loading = (isLoading) => {
  if(isLoading){
    return(
      <div style={{textAlign: 'center'}}>
        <CircularProgress style={style} />
      </div>
    )
  }
}

export default Loading
