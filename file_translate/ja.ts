const ja = {
  timeUnit: {
    second: "秒",
    minute: "分",
    hour: "時間",
  },
  common: {
    ok: "OK",
    cancel: "キャンセル",
    back: "Back",
    logOut: "ログアウト",
    required: "必須",
    optional: "任意",
    change: "変更",
    edit: "編集",
    goBack: "<<戻る",
    confirm: "確認",
    submit: "提出する",
  },
  tab: {
    tabDashboard: "ダッシュボード",
    tabFormCreation: "データ入力",
    tabMyPage: "マイページ",
    tabTop: "TOP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  errorScreen: {
    title: "何かが間違っている！",
    reset: "リセット",
    friendlySubtitle:
      "この画面は、エラーが発生したときに本番環境でユーザーに表示されます。 このメッセージをカスタマイズすることができ（そのファイルは `app/i18n/ja.ts` にあります）、レイアウトも同様に変更できます（ `app/screens/error`）。 このエラー画面を完全になくしたい場合は、 `app/app.tsx` ファイルで <ErrorBoundary> コンポーネントを確認してください。",
  },
  loginScreen: {
    example: "例",
    password: "パスワード",
    forgotPassword: "パスワードを忘れた方は",
    pressThis: "こちら",
    rememberMe: "ログイン状態を保存する",
    signIn: "ログイン",
    requiredUsernameSchema: "メールアドレス または ユーザー名が入力されていません",
    invalidEmailSchema: "メールアドレスが正しくありません",
    requiredPasswordSchema: "パスワードが入力されていません",
    userNotRegisteredSchema: "このユーザーが登録されていません",
  },
  forgotPasswordScreen: {
    title: "パスワード再設定",
    usernameOrEmail: "メールアドレス または ユーザー名",
    email: "メールアドレス",
    backToLogin: "ログイン画面へ戻る",
    sendLink: "パスワードリセットのメールを送信",
    sendLinkSuccess: "パスワードリセットのメールを送信しました。",
  },
  resetPasswordScreen: {
    title: "パスワード再設定",
    passwordLabel: "新しいパスワードを入力",
    confirmPasswordLabel: "パスワード再入力",
    buttonResetPassword: "パスワードをリセット",
    goBackToLogin: "ログイン画面へ戻る",
    requiredPasswordSchema: "パスワードが入力されていません",
    requiredConfirmPasswordSchema: "パスワード再入力が入力されていません",
    passwordsDontMatchSchema: "パスワードが一致しません",
    sessionExpired: "セッションが期限切れです。もう一度やり直してください。",
    tokenInvalidOrExpired: "トークンが無効または期限切れです。もう一度やり直してください。",
  },
  logoutScreen: {
    goToLoginScreen: "ログイン画面へ",
    logoutTitle: "ログアウトしました。",
    thanksForUsing: "ご利用ありがとうございました。",
  },
  welcomeScreen: {
    goNext: "ログイン画面へ",
  },
  complete: {
    title: "パスワード再設定",
    content: "パスワードを再設定しました。",
  },
  myPageScreen: {
    basicInfo: "基本情報",
    emailTitle: "メールアドレス",
    username: "ユーザー名",
    password: "パスワード",
    setting: "設定",
    settingLanguage: "言語設定",
    solution: "ソリューション",
    displayName: "表示名",
    affiliationInfo: "所属情報",
    departmentName: "部署名",
    director: "役職",
    timezone: "タイムゾーン",
    numberDigit: "数値桁区切り形式",
  },
  dashboardScreen: {
    approved: "承認済",
    approving: "承認中",
    typing: "入力中",
    sendBack: "差戻し",
    latestInputResult: "最新の入力結果",
    dashboard: "ダッシュボード",
  },
  formCreationScreen: {
    formCreation: "帳票作成",
  },
  formTitleScreen: {
    saveLoginState: "ログイン状態を保存する",
    keep: "保存",
    contentConfirmation: "内容確認",
  },
  notificationListScreen: {
    title: "通知一覧",
    remand: "差戻し",
    approved: "承認済",
    typing: "入力中",
    acknowledged: "承認中",
  },
  reviewFeedbackScreen: {
    title: "設備総合効率分析-MAKINO",
  },
  editDataScreen: {
    title: "データ照会・編集",
    latestInputResult: "最新の入力結果",
    advancedSearch: "詳細検索",
    detail: "詳細",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  viewDataDetailScreen: {
    title: "設備総合効率分析-MAKINO",
    titleComment:
      "更新します。よろしいですか？\n" +
      "申し送りコメントが必要な場合は\n" +
      "以下に記載してください。",
    subtitle: "自動保存：2023/08/10  12:30",
    approvalStatus: "承認ステータス",
    fileReference: "ファイル参照",
    basicInformation: "基本情報",
    equipmentInformation: "設備情報",
    employmentInformation: "勤務情報",
    viewComments: "コメント表示",
    edit: "編集",
    deletion: "削除",
    comment: "コメント",
  },
}

export default ja
export type Translations = typeof ja
