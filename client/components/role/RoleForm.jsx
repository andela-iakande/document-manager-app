import React from 'react';
import TextInput from '../document/TextInput';

/**
 * Renders RoleForm component
 *
 * @param {Object} props { role, onSave, onChange, loading, errors }
 * @return {object} Role Form
 */
const RoleForm = ({ role, onSave, onChange, loading, errors }) => (
  <form method="POST" style={{ width: 800, margin: '0 60px 20px 300px' }}>
    <TextInput
      className="inputTitle"
      name="title"
      label="Title"
      defaultvalue={role.title}
      onChange={onChange}
      error={errors}
    />

    <input
      id="submitRole"
      type="submit" style={{ marginLeft: '350px' }}
      disabled={loading}
      value={loading ? 'saving ...' : 'save'}
      className="col s12 btn btn-large waves-effect teal darken-2"
      onClick={onSave}
    />
  </form>
  );

RoleForm.propTypes = {
  role: React.PropTypes.object.isRequired,
};

export default RoleForm;
