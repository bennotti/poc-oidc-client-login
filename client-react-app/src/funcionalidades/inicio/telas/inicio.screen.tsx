import { Button, Card, Col, Divider, Dropdown, Form, List, Menu, Modal, Row, Statistic, Table, Tag, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';
import LoggedIn from '@componentes/LoggedIn';

const { Title } = Typography;

export const InicioScreen: FC = () => {
  return (
    <>
      <Row gutter={16} justify='center' align='top' style={{ marginBottom: 10 }}>
        <Col span={16} className='site-layout-background' style={{ paddingBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
          <Row gutter={0} justify='center' align='top'>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Title>Client OIDC</Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <LoggedIn />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
