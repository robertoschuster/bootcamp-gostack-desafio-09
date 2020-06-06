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
import AvatarInput from '~/components/AvatarInput';

import { FormWrapper, FieldRowWrapper, FieldWrapper } from './styles';

function DeliverymenForm({ location }) {
  const [deliveryman] = useState(location.deliveryman);

  /**
   * Form
   */
  function handleClickBack() {
    history.goBack();
  }

  async function save(name, email, avatar_id) {
    const payload = {
      name,
      email,
      avatar_id,
    };

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Por favor, informe o nome do entregador.'),
        email: Yup.string().required(
          'Por favor, informe o e-mail do entregador.'
        ),
      });
      try {
        await schema.validate(payload, { abortEarly: false });
      } catch (err) {
        return toast.error(err.errors[0]);
      }

      if (deliveryman) {
        await api.put(`deliverymen/${deliveryman.id}`, payload); // Edit
      } else {
        await api.post('deliverymen', payload); // Create
      }

      toast.success('Cadastro realizado com sucesso!');
      return history.push('/deliverymen');
    } catch (error) {
      return toast.error('Falha ao salvar!.');
    }
  }

  function handleSubmit({ name, email, avatar_id }) {
    save(name, email, avatar_id);
  }

  return (
    <BaseContainer>
      <FormWrapper>
        <Form
          onSubmit={handleSubmit}
          initialData={{
            name: deliveryman && deliveryman.name,
            email: deliveryman && deliveryman.email,
          }}>
          <FormHeader>
            <Title>Cadastro de Entregadores</Title>
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
              <AvatarInput
                name="avatar_id"
                defaultImage={
                  deliveryman && deliveryman.avatar && deliveryman.avatar.url
                }
              />
            </FieldWrapper>
          </FieldRowWrapper>

          <FieldRowWrapper>
            <FieldWrapper>
              <label htmlFor="name">Nome</label>
              <Input name="name" type="text" autoFocus autoComplete="off" />
            </FieldWrapper>
          </FieldRowWrapper>

          <FieldRowWrapper>
            <FieldWrapper>
              <label htmlFor="email">Email</label>
              <Input name="email" type="email" autoComplete="off" />
            </FieldWrapper>
          </FieldRowWrapper>
        </Form>
      </FormWrapper>
    </BaseContainer>
  );
}

DeliverymenForm.propTypes = {
  location: PropTypes.shape(),
};

DeliverymenForm.defaultProps = {
  location: null,
};

export default DeliverymenForm;
