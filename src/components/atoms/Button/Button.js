import styled from 'styled-components';

const Button = styled.a`
  margin: 8px;
  display: inline-block;
  padding: 18px 16px;
  background: ${({ primary }) => (primary ? '#fff' : 'none')};
  border-radius: 5px;
  border: 1px solid #fff;
  color: ${({ primary }) => (primary ? '#000' : '#fff')};
  cursor: pointer;
  transition: opacity 0.2s ease, background-color 0.1s ease;

  :hover,
  :focus,
  :active {
    background: #fff;
    color: #000;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: ${({ smFlex }) => smFlex || 1};
  }
`;

export default Button;
