export const SELECTORS = {
  PAGES: {
    WORKSPACE_PAGE: {
      New_Workspace_TL_Button: '[cy-es="ztes__wlp-create-btn"]',
      Create_Workspace_Card: '[cy-es="ztes__wlp-create-card-btn"]',
      Create_Btn_New_Workspace: '[cy-es="ztes__wcm-create-btn"]',
      Workspace_Name_input: '[cy-es="ztes__wcm-name-input"]',
      Workspace_Timezone: '[cy-es="ztes__wcm-timezone-input"]',
      // TODO UNABLE TO MAKE A SPECIFIC SELECTOR FOR DROPDOWN TIMEZONE AS IT IS AN IONIC FRAMEWORK
      DROPDOWN_TIMEZONE: '.action-sheet-button',
      WORKSPACE_VIEW_BTN: '[cy-els="ztes__owned-wlp-view-btn"]',
      // OWS_Selector stands for owned workspace selector(common testing selector)
      OWS_ELEMENT_SELECTOR: '[cy-els="ztes__wlp-owned-ws-card"]',
      ELLIPSE_GENERAL_SELECTOR: '[cy-els="ztes__owned-wlp-card-action-btn"]',
      // WSC means workspace card
      WSC_DELETE_SELECTOR: '[cy-els="ztes__owned-wap-delete-btn"]',
      WSC_SETTING_SELECTOR: '[cy-els="ztes__owned-wap-settings-btn"]',
      // favorite icon on new workspace card (NWC) to add it to the favorite workspaces section.
      Favorite_Icon_NWC: '[cy-els="ztes__owned-wlp-card-favorites-btn"]',
      Unfavorite_Icon_NWC: '[cy-els="ztes__owned-wlp-card-unfavorites-btn"]',
      FWS_ElEMENT_SECTION: '[cy-es="ztes__wlp-fw-no-data-col-icon"]',
      FWS_ElEMENT_SELECTOR: '[cy-els="ztes__wlp-favorite-ws-card"]',
      Delete_Btn_Alert: '[cy-els="ztes__owned-wlp-m-delete-btn"]',

      FAVORITE_WS_CARD: (workspaceId: string) =>
        `[cy-es="ztes__wlp-favorite-ws-card-${workspaceId}"]`
    },
    ATTRIBUTE_KEYS: {
      CYPRESS_SELECTOR: 'cy-es',
      OWS_COMMON_SELECTOR_EXCEPT_ID: 'ztes__wlp-owned-ws-card-',
      FWS_COMMON_SELECTOR_EXCEPT_ID_CY: 'ztes__wlp-card-favorites-btn-',
      FWS_COMMON_SELECTOR_EXCEPT_ID: 'cy-es="ztes__wlp-favorite-ws-card',
    },
    WSM_PAGE: {
      WSM_PAGE_SELECTOR: '.workspace-setting-modal-size>.ion-page',
      WSMP_SETTING_SECTION: '[cy-els="ztes__wsm-settings-tab"]',
      WSMP_NAME_INPUT: '[cy-els="ztes__wsm-st-name-input"]',
      WSMP_TIMEZONE: '[cy-els="ztes__wsm-st-timezone-input"]',
      WSMP_UPDATE_BTN: '[cy-els="ztes__wsm-st-update-btn"]',
      WSMP_DELETE_WORKSPACE_BTN: '[cy-els="ztes__wsm-st-delete-btn"]',
      WSMP_POPOVER_DELETE_BTN: '.alert-button-role-danger'
    },
    SHORT_LINK_LIST_PAGE: {
      CREATE_NEW_LINK_BTN: '[cy-es="ztes__slp-create-btn"]',
      // * SLM STANDS FOR SHORT LINK LIST MANAGEMENT PAGE
      NEW_FOLDER_CREATE_BTN_SLM: '[cy-es="ztes__f-create-btn-shortLink"]',
      // TODO UNABLE TO MAKE A SPECIFIC SELECTOR FOR NEW FOLDER CREATION MODEL PAGE AS IT IS AN IONIC FRAMEWORK
      NEW_FOLDER_ION_MODEL: '.link-in-bio-folder-modal .ion-page',
      NEW_FOLDER_NAME_INPUT: '[cy-es="ztes__folder-fm-name-input"]',
      // * IM STANDS FOR ION MODEL
      CREATE_BTN_NEW_FOLDER_IM: '[cy-es="ztes__folder-fm-submit-form-btn"]'
    },
    GENERAL: {
      // OR Text( this is mainly to unfocused the text input field to get error messages)
      Or_Text: '.zaions__separator',
    },
    URLS: {
      Login_Page: 'https://prettylinks.zaions.com/sign-in',
      Forget_Password_Page: 'https://prettylinks.zaions.com/forgot-password',
      SHORT_LINK_LIST_PAGE: 'https://prettylinks.zaions.com/app/workspaces/657c8631819d8/short-links/list/',
      CREATE_NEW_FOLDER_API: 'https://zlinkbackend.zaions.com/api/zlink/v1/user/personalWorkspace/657c8631819d8/folder'
    }
  }
} as const;
