//query stringから値を受け取り、検索条件を作成する

const createCondition = (text, instrumentType) => {
  let condition = []

  if(text){
    condition.push('text=' + text)
  }

  if(instrumentType){
    condition.push('instrument_type=' + instrumentType)
  }

  return condition.length === 0 ? '' :  '?' + condition.join('&')
}

export default createCondition
