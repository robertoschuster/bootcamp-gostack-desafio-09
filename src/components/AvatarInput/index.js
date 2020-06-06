import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { Container } from './styles';

function AvatarInput({ defaultImage }) {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(
    (defaultValue && defaultValue.url) || (defaultImage && defaultImage)
  );

  const ref = useRef();

  // Cadastra o campo para o unform da page profile saber que ele existe
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="Foto do Entregador" />
        ) : (
          <>
            <MdImage size={40} color="#ccc" />
            <strong>Adicionar foto</strong>
          </>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  defaultImage: PropTypes.string,
};

AvatarInput.defaultProps = {
  defaultImage: null,
};

export default AvatarInput;
