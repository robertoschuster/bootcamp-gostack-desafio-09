import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdArrowBack } from 'react-icons/md';

import api from '~/services/api';

import { BaseContainer } from '~/components/BaseContainer';
import { FormHeader } from '~/components/FormHeader';
import { Button } from '~/components/Button';
import { Title } from '~/components/Title';
import { FormWrapper, FieldRowWrapper, FieldWrapper } from './styles';

function DeliveryForm() {
  const [selectedRecipient, setSelectedRecipient] = useState(null);

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

  function handleChange(selectedOptions) {
    setSelectedRecipient(selectedOptions);
  }

  return (
    <BaseContainer>
      <FormHeader>
        <Title>Cadastro de Encomendas</Title>
        <div>
          <Button type="button">
            <MdArrowBack size={24} color="#FFF" />
            <span>Voltar</span>
          </Button>
          <Button primary type="button">
            <MdDone size={24} color="#FFF" />
            <span>Salvar</span>
          </Button>
        </div>
      </FormHeader>

      <FormWrapper>
        <Form>
          <FieldRowWrapper>
            <FieldWrapper flex={1}>
              <label htmlFor="recipients">Destinatário:</label>
              <AsyncSelect
                name="recipients"
                cacheOptions
                loadOptions={loadRecipientOptions}
                defaultOptions
                onChange={handleChange}
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
                onChange={handleChange}
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
