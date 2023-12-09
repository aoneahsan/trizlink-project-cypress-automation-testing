export const SELECTORS = {
	PAGES: {
		LOGIN: {
			//login button on the home page at the top right corner to go to the login page
			Login_Button_HP: '[cy-es="ztes__hp-nav-login-btn"]',
			// email text to enter the email in the login page
			Email_Input_Text: '[cy-es="ztes__lp-email-input"]',
			// password text to enter the password in the login page
			Password_Input_Text: '[cy-es="ztes__lp-password-input"]',
			// login button where user click on it to login in the account
			Login_Button: '[cy-es="ztes__lp-login-btn"]',
			Password_eye_icon: '[cy-es="ztes__lp-see-password-btn"]',
			Forget_Password_Btn: '[cy-es="ztes__lp-forget-pw-btn"]'
		},
		WORKSPACE_PAGE:{
			New_Workspace_TL_Button: '[cy-es="ztes__wlp-create-btn"]'
		},
		GENERAL:{
//OR Text( this is mainly to unfocused the text input field to get error messages)
Or_Text: '.zaions__separator',
		},
		URLS:{
			Login_Page: 'https://prettylinks.zaions.com/sign-in',
			Forget_Password_Page:'https://prettylinks.zaions.com/forgot-password'
		}
	},
} as const;
