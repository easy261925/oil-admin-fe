import { MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useIntl, ConnectProps, connect } from 'umi';
import React from 'react';
import { ConnectState } from '@/models/connect';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>后台管理</span>
              </Link>
            </div>
          </div>
          {children}
        </div>
        <div style={{ padding: 18, display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#155087', color: '#fff' }}>
          <div style={{ textAlign: 'center' }}>公安备案号: 21012202000085</div>
          <div style={{ textAlign: 'center' }}>工信部ICP备案 辽ICP备2021009616号</div>
        </div>
      </div>
    </HelmetProvider >
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
