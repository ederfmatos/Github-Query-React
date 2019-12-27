import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import Container from '~/components/Container';

import { Loading, Owner } from './styles';
export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repositoryName = decodeURIComponent(match.params.repository);

    const [{ data: repository }, { data: issues }] = await Promise.all([
      api.get(`/repos/${repositoryName}`),
      api.get(`/repos/${repositoryName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      issues,
      repository,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositorios</Link>

          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description || '-'}</p>
        </Owner>
      </Container>
    );
  }
}
