/**
 * modify data operation
 */
import * as types from './mutation-types'

const mutations = {
  // state, 传的参数
  [types.SET_SINGER](state, singer) {
    /* singer: string */
    state.singer = singer
  },
  [types.SET_PLAYING_STATE](state, flag) {
    /* flag: boolean */
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    /* list: array */
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    // list: array
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  [types.SET_SEARCH_HISTORY](state, history) {
    state.searchHistory = history
  },
  [types.SET_PLAY_HISTORY](state, history) {
    state.playHistory = history
  },
  [types.SET_FAVORITE_LIST](state, list) {
    state.favoriteList = list
  }
}

export default mutations
