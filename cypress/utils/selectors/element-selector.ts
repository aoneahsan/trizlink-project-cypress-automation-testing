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
		},
		WORKSPACE_PAGE:{
			New_Workspace_TL_Button: '[cy-es="ztes__wlp-create-btn"]'
		}
	},
} as const;
