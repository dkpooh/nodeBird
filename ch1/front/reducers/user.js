export const initialState = {
	isLoggedIn: false,
	user: {}
}

// 액션의 이름 정의
const LOG_IN = 'LOG_IN' 
const LOG_OUT = 'LOG_OUT' 

// 실제 액션
const loginAction = {
	type: LOG_IN,
	data: {
		nickname: 'dkpooh'
	}
}

const logoutAction = {
	type: LOG_OUT,
	data: {
		nickname: 'none'
	}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case LOG_IN :
			return {
				...state,
				isLoggedIn: true,
				user: action.data,
			}

		case LOG_OUT :
			return {
				...state,
				isLoggedIn: false, // 없애도 되나?
				user: null,
			}

		default: 
			return {
				...state
			}
	}
}