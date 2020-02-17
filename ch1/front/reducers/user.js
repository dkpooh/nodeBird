// 로그인 후 넣어줄 데이터
const dummyUser = {
	nickname: '도경',
	post: [],
	followings: [],
	followers: [],
	signUpDate: {},
}

export const initialState = {
	isLoggedIn: false,
	user: null
}

// 액션의 이름 정의
export const LOG_IN = 'LOG_IN' 
export const LOG_OUT = 'LOG_OUT' 
export const SIGN_UP = 'SIGN_UP'

// 실제 액션
export const loginAction = {
	type: LOG_IN,
	data: {
		nickname: 'dkpooh'
	}
}

export const logoutAction = {
	type: LOG_OUT,
	data: {
		nickname: 'none'
	}
}

export const signUpAction = (data) => {
	return {
		type: SIGN_UP,
		data: data,
	}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case LOG_IN:
			return {
				...state,
				isLoggedIn: true,
				user: dummyUser
			}

		case LOG_OUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			}

		case SIGN_UP:
			return {
				...state,
				signUpDate: action.data
			}

		default: 
			return {
				...state
			}
	}
}