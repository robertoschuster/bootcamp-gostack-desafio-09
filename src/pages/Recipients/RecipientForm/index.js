import React, { useState } from 'react';

import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import colors from '~/styles/colors';

import { BaseContainer } from '~/components/BaseContainer';
import { FormHeader } from '~/components/FormHeader';
import { Button } from '~/components/Button';
import { Title } from '~/components/Title';

import { FormWrapper, FieldRowWrapper, FieldWrapper } from './styles';

function RecipientForm({ location }) {
  const [recipient] = useState(location.recipient);

  /**
   * Form
   */
  function handleClickBack() {
    history.goBack();
  }

  async function save(name, street, number, compl, city, state, zip_code) {
    const payload = { name, street, number, compl, city, state, zip_code };

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(
          'Por favor, informe o nome do destinatário.'
        ),
      });
      try {
        await schema.validate(payload, { abortEarly: false });
      } catch (err) {
        return toast.error(err.errors[0]);
      }

      if (recipient) {
        await api.put(`recipients/${recipient.id}`, payload); // Edit
      } else {
        await api.post('recipients', payload); // Create
      }

      toast.success('Cadastro realizado com sucesso!');
      return history.push('/recipients');
    } catch (error) {
      return toast.error('Falha ao salvar!.');
    }
  }

  function handleSubmit({
    name,
    street,
    number,
    compl,
    city,
    state,
    zip_code,
  }) {
    save(name, street, number, compl, city, state, zip_code);
  }

  return (
    <BaseContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit} initialData={recipient}>
          <FormHeader>
            <Title>Cadastro de Destinatários</Title>
            <div>
              <Button type="button" onClick={handleClickBack}>
                <MdArrowBack size={24} color={colors.iconLight} />
                <span>Voltar</span>
              </Button>
              <Button primary type="submit">
                <MdDone size={24} color={colors.iconLight} />
                <span>Salvar</span>
              </Button>
            </div>
          </FormHeader>

          <FieldRowWrapper>
            <FieldWrapper>
              <label htmlFor="name">Nome</label>
              <Input name="name" type="text" autoFocus autoComplete="off" />
            </FieldWrapper>
          </FieldRowWrapper>

          <FieldRowWrapper>
            <FieldWrapper flex={10}>
              <label htmlFor="street">Rua</label>
              <Input name="street" type="text" autoComplete="off" />
            </FieldWrapper>
            <FieldWrapper flex={1}>
              <label htmlFor="number">Número</label>
              <Input name="number" type="text" autoComplete="off" />
            </FieldWrapper>
            <FieldWrapper flex={4}>
              <label htmlFor="compl">Complemento</label>
              <Input name="compl" type="text" autoComplete="off" />
            </FieldWrapper>
          </FieldRowWrapper>

          <FieldRowWrapper>
            <FieldWrapper>
              <label htmlFor="city">Cidade</label>
              <Input name="city" type="text" autoComplete="off" />
            </FieldWrapper>
            <FieldWrapper>
              <label htmlFor="state">Estado</label>
              <Input name="state" type="text" autoComplete="off" />
            </FieldWrapper>
            <FieldWrapper>
              <label htmlFor="zip_code">CEP</label>
              <Input name="zip_code" type="text" autoComplete="off" />
            </FieldWrapper>
          </FieldRowWrapper>
        </Form>
      </FormWrapper>
    </BaseContainer>
  );
}

RecipientForm.propTypes = {
  location: PropTypes.shape(),
};

RecipientForm.defaultProps = {
  location: null,
};

export default RecipientForm;
