const musicCategories = (genre, updateUser) => {
  // 初期読み込み対応
  if(!genre || !updateUser){ return }
  return genre.map((v, index) => {
    const obj = {
      music_category_id: v?.id,
      position: index + 1
    }

    return obj
  })
}

const updateUserJson = (updateUser,
                        prefecture,
                        instrumentType,
                        experience,
                        skillLevel,
                        liveExperience,
                        genre,
                        activeDate,
                        tweet,
                        introduction
  ) => {
    if(!updateUser) { return }

    const json = {
      user: {
        introduction: introduction,
        prefecture_id: prefecture,
        tweet: tweet,
        user_active_dates_attributes: [
          {
            id: updateUser.active_dates[0].id,
            date: activeDate
          }
        ]
      },
      music_categories: musicCategories(genre, updateUser),
      instruments: [
        {
          id: updateUser.instruments[0].id,
          instrument_type_id: instrumentType,
          experience: experience,
          skill_level: skillLevel,
          position: 1,
          live_experiences: [
            {
              id: updateUser.instruments[0].live_experience[0].id,
              live_experience_id: liveExperience
            }
          ]
        }
      ]
    }

    return json
}

export default updateUserJson
