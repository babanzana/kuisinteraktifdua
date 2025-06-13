/* eslint-disable @typescript-eslint/no-unused-vars */
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default InputField;

// CSS styles (bisa diletakkan di file .css atau styled-components)
const styles = `
  .input-container {
    width: 300px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    border-radius: 12px;
  }
  
  .input-label {
    display: block;
    color: white;
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  
  .input-field {
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    outline: none;
    transition: background-color 0.2s ease;
  }
  
  .input-field:focus {
    background-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
  `;
