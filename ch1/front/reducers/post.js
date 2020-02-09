export const initialState = {
	mainPosts: [{
    user: {
      id: 1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }],
}

const ADD_DUMMY = 'ADD_DUMMY'

const addDummyAction = {
	type: ADD_DUMMY,
	mainPosts: {
		user: {
			id: 0,
			nickname: 'guest',
		}, 
		content: 'hello, guest',
	}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case ADD_DUMMY:
			return {
				mainPosts: [
					...state,
					...addDummy.mainPosts
				]
			}
		default: 
			return {
				...state
			}
	}

}