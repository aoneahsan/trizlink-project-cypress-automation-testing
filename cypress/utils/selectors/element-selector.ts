export const SELECTORS = {
  PAGES: {
    LOGIN: {
      // login button on the home page at the top right corner to go to the login page
      Login_Button_HP: '[cy-es="ztes__hp-nav-login-btn"]',
      // email text to enter the email in the login page
      Email_Input_Text: '[cy-es="ztes__lp-email-input"]',
      // password text to enter the password in the login page
      Password_Input_Text: '[cy-es="ztes__lp-password-input"]',
      // login button where user click on it to login in the account
      Login_Button: '[cy-es="ztes__lp-login-btn"]',
      Password_eye_icon: '[cy-es="ztes__lp-see-password-btn"]',
      Forget_Password_Btn: '[cy-es="ztes__lp-forget-pw-btn"]',
    },
    WORKSPACE_PAGE: {
      New_Workspace_TL_Button: '[cy-es="ztes__wlp-create-btn"]',
      Create_Workspace_Card: '[cy-es="ztes__wlp-create-card-btn"]',
      Create_Btn_New_Workspace: '[cy-es="ztes__wcm-create-btn"]',
	    Workspace_Name_input: '[cy-es="ztes__wcm-name-input"]',
      Workspace_Timezone: '[cy-es="ztes__wcm-timezone-input"]',
      Dropdown_Timezone: '.action-sheet-button',
      // favorite icon on new workspace card (NWC) to add it to the favorite workspaces section.
      Favorite_Icon_NWC: '[cy-els="ztes__wlp-card-favorites-btn"]',
      // OWS_Selector stands for owned workspace selector(common testing selector)
      OWS_General_Selector: '[cy-els="ztes__wlp-owned-ws-card"]',

      Ellipses_General_Selector: '[cy-els="ztes__wlp-card-action-btn"]',
      Workspace_Dlt_Btn: '[cy-es="ztes__wap-delete-btn"]',
      Owned_Workspace_Section: '[cy-els="ztes__wlp-owned-ws-card"]',
      Favorite_Workspace_Section: '[cy-els="ztes__wlp-favorite-ws-card"]',
      Delete_Btn_Alert: '.alert-button-role-danger'
    },
    GENERAL: {
      // OR Text( this is mainly to unfocused the text input field to get error messages)
      Or_Text: '.zaions__separator',
    },
    URLS: {
      Login_Page: 'https://prettylinks.zaions.com/sign-in',
      Forget_Password_Page: 'https://prettylinks.zaions.com/forgot-password',
    
    }
  }
} as const;
