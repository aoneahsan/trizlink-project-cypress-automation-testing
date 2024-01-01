export const SELECTORS = {
  PAGES: {
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
      OWS_Element_Selector: '[cy-els="ztes__wlp-owned-ws-card"]',
      Ellipses_General_Selector: '[cy-els="ztes__wlp-card-action-btn"]',
      Workspace_Dlt_Btn: '[cy-es="ztes__wap-delete-btn"]',
      FWS_ElEMENT_SELECTOR: '[cy-els="ztes__wlp-favorite-ws-card"]',
      Delete_Btn_Alert: '.alert-button-role-danger',
      FAVORITE_WS_CARD: (workspaceId: string) =>
        `[cy-es="ztes__wlp-favorite-ws-card-${workspaceId}"]`,
    },
    ATTRIBUTE_KEYS: {
      CYPRESS_SELECTOR: 'cy-es',
      OWS_COMMON_SELECTOR_EXCEPT_ID: 'ztes__wlp-owned-ws-card-',
      FWS_COMMON_SELECTOR_EXCEPT_ID_CY: 'ztes__wlp-card-favorites-btn-',
      FWS_COMMON_SELECTOR_EXCEPT_ID: 'cy-es="ztes__wlp-favorite-ws-card',
    },
    GENERAL: {
      // OR Text( this is mainly to unfocused the text input field to get error messages)
      Or_Text: '.zaions__separator',
    },
    URLS: {
      Login_Page: 'https://prettylinks.zaions.com/sign-in',
      Forget_Password_Page: 'https://prettylinks.zaions.com/forgot-password',
    },
  },
} as const;
