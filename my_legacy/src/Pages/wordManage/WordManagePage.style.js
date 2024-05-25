// WordManagePage.style.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100vh;
  /* background-color: #f7f7f7; */
  padding: 20px;
`;

export const BackButton = styled.a`
  align-self: flex-start;
  text-decoration: none;
  color: #1a73e8;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SortButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SortButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #1a73e8;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1669c1;
  }
`;

export const WordTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  background-color: #e0e0e0;
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const ActionButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  font-size: 12px;
  color: white;
  background-color: ${({ color }) => color || "#1a73e8"};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#1669c1"};
  }
`;

export const AddWordButton = styled.button`
  text-decoration: none;
  color: #1a73e8;
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 14px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

export const CancelButton = styled.button`
  padding: 10px;
  font-size: 14px;
  color: white;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
