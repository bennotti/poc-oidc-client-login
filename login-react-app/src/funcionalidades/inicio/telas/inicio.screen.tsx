import { Button, Card, Col, Divider, Dropdown, Form, List, Menu, Modal, Row, Statistic, Table, Tag, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CalendarOutlined, EditOutlined } from '@ant-design/icons';
import { env } from '@infra/env';

const { Title } = Typography;

export const InicioScreen: FC = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const [usuario, setUsuario] = useState(`${env.USUARIO}`);
  const [senha, setSenha] = useState(`${env.SENHA}`);
  const [codigoAutorizacao, setCodigoAutorizacao] = useState('');

  const carregarCodigoAutorizacao = async () => {
    const response = await fetch(`${env.API_URL}/api/auth/code?${searchParams.toString()}`).then((response) => response.json())
    setCodigoAutorizacao(response.data.codigoAutorizacao);
  };

  useEffect(() => {
    carregarCodigoAutorizacao().catch(console.log);
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch(`${env.API_URL}/api/auth/login`, {  // Enter your IP address here
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        codigoAutorizacao,
        senha,
        login: usuario,
      }) // body data type must match "Content-Type" header
    }).then((response) => response.json())
    window.location.href = response.data.redirectUri;
    // console.log(response);
  }

  const handleChangeUsuario = (event: any) => {
    setUsuario(event.target.value);
  }

  const handleChangeSenha = (event: any) => {
    setSenha(event.target.value);
  }

  return (
    <>
      <Row gutter={16} justify='center' align='top' style={{ marginBottom: 10 }}>
        <Col span={16} className='site-layout-background' style={{ paddingBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
          <Row gutter={0} justify='center' align='top'>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Title>Login</Title>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <div>
                <Form>
                  <label>
                    Usuario:
                    <input value={usuario} onChange={handleChangeUsuario} />
                  </label>
                  <label>
                    Senha:
                    <input value={senha} onChange={handleChangeSenha} />
                  </label>
                  <input type="button" value="Confirmar" disabled={codigoAutorizacao === ''} onClick={handleSubmit}/>
                </Form>
              </div>
              <p>{codigoAutorizacao}</p>
              <p>{searchParams.get('client_id')}</p>
              <p>{searchParams.get('redirect_uri')}</p>
              <p>{searchParams.get('response_type')}</p>
              <p>{searchParams.get('scope')}</p>
              <p>{searchParams.get('state')}</p>
              <p>{searchParams.get('code_challenge')}</p>
              <p>{searchParams.get('code_challenge_method')}</p>
              <p>{searchParams.get('response_mode')}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
