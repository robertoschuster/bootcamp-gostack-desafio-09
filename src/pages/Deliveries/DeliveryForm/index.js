import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
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

function DeliveryForm({ location }) {
  const [delivery] = useState(location.delivery);
  const [selectedRecipient, setSelectedRecipient] = useState(
    delivery && delivery.recipient
  );
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(
    delivery && delivery.deliveryman
  );

  /**
   * Async Select
   */
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
    setSelectedRecipient({
      id: selectedOptions.value,
      name: selectedOptions.label,
    });
  }

  function handleChangeDeliveryman(selectedOptions) {
    setSelectedDeliveryman({
      id: selectedOptions.value,
      name: selectedOptions.label,
    });
  }

  /**
   * Form
   */
  function handleClickBack() {
    history.goBack();
  }

  async function save(recipient_id, deliveryman_id, product) {
    const payload = {
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
        await schema.validate(payload, { abortEarly: false });
      } catch (err) {
        return toast.error(err.errors[0]);
      }

      if (delivery) {
        await api.put(`deliveries/${delivery.id}`, payload); // Edit
      } else {
        await api.post('deliveries', payload); // Create
      }

      toast.success('Cadastro realizado com sucesso!');
      return history.push('/deliveries');
    } catch (error) {
      return toast.error('Falha ao salvar!.');
    }
  }

  function handleSubmit({ product }) {
    save(delivery, selectedRecipient.id, selectedDeliveryman.id, product);
  }

  return (
    <BaseContainer>
      <FormWrapper>
        <Form
          onSubmit={handleSubmit}
          initialData={{ product: delivery && delivery.product }}>
          <FormHeader>
            <Title>Cadastro de Encomendas</Title>
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
            <FieldWrapper flex={1}>
              <label htmlFor="recipients">Destinatário:</label>
              <AsyncSelect
                autoFocus
                name="recipients"
                placeholder="Selecione um destinatário..."
                cacheOptions
                loadOptions={loadRecipientOptions}
                defaultOptions
                onChange={handleChangeRecipient}
                defaultValue={
                  delivery && {
                    value: delivery.recipient.id,
                    label: delivery.recipient.name,
                  }
                }
              />
            </FieldWrapper>
            <FieldWrapper flex={1}>
              <label htmlFor="deliveryman">Entregador:</label>
              <AsyncSelect
                name="deliveryman"
                placeholder="Selecione um entregador..."
                cacheOptions
                loadOptions={loadDeliverymanOptions}
                defaultOptions
                onChange={handleChangeDeliveryman}
                defaultValue={
                  delivery && {
                    value: delivery.deliveryman.id,
                    label: delivery.deliveryman.name,
                  }
                }
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

DeliveryForm.propTypes = {
  location: PropTypes.shape(),
};

DeliveryForm.defaultProps = {
  location: null,
};

export default DeliveryForm;
