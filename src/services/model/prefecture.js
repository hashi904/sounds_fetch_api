// prefectureのデータ取得に関するメソッド
import prefectures from "../../lib/prefecture"

// 都道府県名からidを取得する
const getPrefectureByName = (name) => {
  const record = prefectures.find((type) => type.label === name)
  return record.id
}

export default getPrefectureByName
