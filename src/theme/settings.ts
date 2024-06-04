/** Default theme settings */
export const themeSettings: App.Theme.ThemeSetting = {
  themeScheme: 'light',
  themeColor: '#1677ff',
  otherColor: { info: '#1677FF', success: '#52c41a', warning: '#faad14', error: '#f5222d' },
  isInfoFollowPrimary: true,
  layout: {
    mode: 'vertical',
    scrollMode: 'content'
  },
  page: {
    animate: true,
    animateMode: 'fade-slide'
  },
  header: { height: 48, breadcrumb: { visible: true, showIcon: true } },
  tab: { visible: true, cache: true, height: 40, mode: 'button' },
  fixedHeaderAndTab: true,
  sider: {
    inverted: false,
    width: 240,
    collapsedWidth: 64,
    mixWidth: 90,
    mixCollapsedWidth: 64,
    mixChildMenuWidth: 200
  },
  footer: {
    visible: true,
    fixed: false,
    height: 48,
    right: true
  }
};

/**
 * Override theme settings
 *
 * If publish new version, use `overrideThemeSettings` to override certain theme settings
 */
export const overrideThemeSettings: Partial<App.Theme.ThemeSetting> = {};
