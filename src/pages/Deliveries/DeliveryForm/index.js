import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import api from '~/services/api';
import history from '~/services/history';

import { BaseContainer } from '~/components/BaseContainer';
import { FormHeader } from '~/components/FormHeader';
import { Button } from '~/components/Button';
import { Title } from '~/components/Title';
import { FormWrapper, FieldRowWrapper, FieldWrapper } from './styles';

function DeliveryForm() {
  const [recipientId, setRecipientId] = useState(null);
  const [deliverymanId, setDeliverymanId] = useState(null);

  async function loadRecipients(filter) {
    const response = await api.get('recipients', {
      params: { q: filter },
    });

    const recipients = response.data.map((recipient) => {
      return { value: recipient.id, label: recipient.name };
    });

    return recipients;
  }

  async function loadDeliverymen(filter) {
    const response = await api.get('deliverymen', {
      params: { q: filter },
    });

    const deliverymen = response.data.map((deliveryman) => {
      return { value: deliveryman.id, label: deliveryman.name };
    });

    return deliverymen;
  }

  const loadRecipientOptions = (inputValue, callback) => {
    setTimeout(async () => {
      callback(await loadRecipients(inputValue));
    }, 1000);
  };

  const loadDeliverymanOptions = (inputValue, callback) => {
    setTimeout(async () => {
      callback(await loadDeliverymen(inputValue));
    }, 1000);
  };

  function handleChangeRecipient(selectedOptions) {
    setRecipientId(selectedOptions.value);
  }

  function handleChangeDeliveryman(selectedOptions) {
    setDeliverymanId(selectedOptions.value);
  }

  function handleClickBack() {
    history.goBack();
  }

  async function save(recipient_id, deliveryman_id, product) {
    const delivery = {
      recipient_id,
      deliveryman_id,
      product,
    };

    try {
      const schema = Yup.object().shape({
        recipient_id: Yup.number()
          .typeError('Por favor, informe o destinatário.')
          .required('Por favor, informe o destinatário.'),
        deliveryman_id: Yup.number()
          .typeError('Por favor, informe o entregador.')
          .required('Por favor, informe o entregador.'),
        product: Yup.string().required('Por favor, informe o produto.'),
      });
      try {
        await schema.validate(delivery, { abortEarly: false });
      } catch (err) {
        return toast.error(err.errors[0]);
      }

      await api.post('deliveries', delivery);
      toast.success('Cadastro realizado com sucesso!');
      return history.push('/deliveries');
    } catch (error) {
      return toast.error('Falha ao salvar!.');
    }
  }

  function handleSubmit({ product }) {
    save(recipientId, deliverymanId, product);
  }

  return (
    <BaseContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Title>Cadastro de Encomendas</Title>
            <div>
              <Button type="button" onClick={handleClickBack}>
                <MdArrowBack size={24} color="#FFF" />
                <span>Voltar</span>
              </Button>
              <Button primary type="submit">
                <MdDone size={24} color="#FFF" />
                <span>Salvar</span>
              </Button>
            </div>
          </FormHeader>

          <FieldRowWrapper>
            <FieldWrapper flex={1}>
              <label htmlFor="recipients">Destinatário:</label>
              <AsyncSelect
                name="recipients"
                cacheOptions
                loadOptions={loadRecipientOptions}
                defaultOptions
                onChange={handleChangeRecipient}
                className="combo"
              />
            </FieldWrapper>
            <FieldWrapper flex={1}>
              <label htmlFor="deliveryman">Entregador:</label>
              <AsyncSelect
                name="deliveryman"
                cacheOptions
                loadOptions={loadDeliverymanOptions}
                defaultOptions
                onChange={handleChangeDeliveryman}
              />
            </FieldWrapper>
          </FieldRowWrapper>
          <FieldRowWrapper>
            <FieldWrapper>
              <label htmlFor="product">Produto:</label>
              <Input name="product" type="text" />
            </FieldWrapper>
          </FieldRowWrapper>
        </Form>
      </FormWrapper>
    </BaseContainer>
  );
}

export default DeliveryForm;
