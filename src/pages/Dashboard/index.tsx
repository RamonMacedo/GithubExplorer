import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/34130141?s=460&u=424970fda7829a37f4d4f1e7b0f376a7dcc90bb2&v=4"
            alt="Ramon Macêdo"
          />
          <div>
            <strong>TemAqui</strong>
            <p>
              Aplicação voltada para incremento de estabelecimentos, e produtos
              dos mesmos, oferecendo serviço delivery ao usuário final.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/34130141?s=460&u=424970fda7829a37f4d4f1e7b0f376a7dcc90bb2&v=4"
            alt="Ramon Macêdo"
          />
          <div>
            <strong>TemAqui</strong>
            <p>
              Aplicação voltada para incremento de estabelecimentos, e produtos
              dos mesmos, oferecendo serviço delivery ao usuário final.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/34130141?s=460&u=424970fda7829a37f4d4f1e7b0f376a7dcc90bb2&v=4"
            alt="Ramon Macêdo"
          />
          <div>
            <strong>TemAqui</strong>
            <p>
              Aplicação voltada para incremento de estabelecimentos, e produtos
              dos mesmos, oferecendo serviço delivery ao usuário final.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
