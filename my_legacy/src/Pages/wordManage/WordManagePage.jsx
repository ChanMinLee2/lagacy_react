// WordManagePage.jsx
import React, { useState } from "react";
import * as S from "./WordManagePage.style";

const WordManagePage = () => {
  const words = [
    {
      pos: "n",
      english: "mean",
      korean: "평균",
      level: 2,
      lastModified: "2024-05-10 01:52:18",
    },
    {
      pos: "n",
      english: "min",
      korean: "최소",
      level: 1,
      lastModified: "2024-05-10 01:07:16",
    },
    {
      pos: "n",
      english: "max",
      korean: "최대",
      level: 1,
      lastModified: "2024-05-10 00:51:58",
    },
  ];

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newWord, setNewWord] = useState({
    pos: "",
    english: "",
    korean: "",
    level: "",
  });
  const [currentWord, setCurrentWord] = useState(null);

  const handleSort = (sortType) => {
    // 정렬 로직 추가
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWord((prevWord) => ({
      ...prevWord,
      [name]: value,
    }));
  };

  const handleAddWord = (e) => {
    e.preventDefault();
    // 단어 추가 로직 추가
    setAddModalOpen(false);
  };

  const handleEditWord = (e) => {
    e.preventDefault();
    // 단어 수정 로직 추가
    setEditModalOpen(false);
  };

  const openEditModal = (word) => {
    setCurrentWord(word);
    setEditModalOpen(true);
  };

  return (
    <S.Container>
      <S.BackButton href="/menu">홈으로</S.BackButton>
      <S.Header>단어 조회</S.Header>
      <S.SortButtons>
        <S.SortButton onClick={() => handleSort("alphabet_asc")}>
          알파벳 오름차순
        </S.SortButton>
        <S.SortButton onClick={() => handleSort("alphabet_desc")}>
          알파벳 내림차순
        </S.SortButton>
        <S.SortButton onClick={() => handleSort("date_asc")}>
          수정된 날짜 오름차순
        </S.SortButton>
        <S.SortButton onClick={() => handleSort("date_desc")}>
          수정된 날짜 내림차순
        </S.SortButton>
      </S.SortButtons>
      <S.WordTable>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>품사</S.TableHeader>
            <S.TableHeader>영어 철자</S.TableHeader>
            <S.TableHeader>한글 뜻</S.TableHeader>
            <S.TableHeader>난이도</S.TableHeader>
            <S.TableHeader>마지막 수정 시간</S.TableHeader>
            <S.TableHeader>동작</S.TableHeader>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {words.map((word, index) => (
            <S.TableRow key={index}>
              <S.TableCell>{word.pos}</S.TableCell>
              <S.TableCell>{word.english}</S.TableCell>
              <S.TableCell>{word.korean}</S.TableCell>
              <S.TableCell>{word.level}</S.TableCell>
              <S.TableCell>{word.lastModified}</S.TableCell>
              <S.TableCell>
                <S.ActionButton
                  color="#4caf50"
                  hoverColor="#388e3c"
                  onClick={() => openEditModal(word)}
                >
                  수정하기
                </S.ActionButton>
                <S.ActionButton color="#f44336" hoverColor="#d32f2f">
                  삭제하기
                </S.ActionButton>
              </S.TableCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.WordTable>
      <S.AddWordButton onClick={() => setAddModalOpen(true)}>
        단어 추가
      </S.AddWordButton>

      {isAddModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>단어 추가</S.ModalTitle>
              <S.CloseButton onClick={() => setAddModalOpen(false)}>
                &times;
              </S.CloseButton>
            </S.ModalHeader>
            <S.Form onSubmit={handleAddWord}>
              <S.Input
                type="text"
                name="pos"
                placeholder="품사"
                value={newWord.pos}
                onChange={handleInputChange}
                required
              />
              <S.Input
                type="text"
                name="english"
                placeholder="영어 철자"
                value={newWord.english}
                onChange={handleInputChange}
                required
              />
              <S.Input
                type="text"
                name="korean"
                placeholder="한글 뜻"
                value={newWord.korean}
                onChange={handleInputChange}
                required
              />
              <S.Input
                type="number"
                name="level"
                placeholder="난이도"
                value={newWord.level}
                onChange={handleInputChange}
                required
              />
              <S.SubmitButton type="submit">추가하기</S.SubmitButton>
            </S.Form>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {isEditModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>단어 수정</S.ModalTitle>
              <S.CloseButton onClick={() => setEditModalOpen(false)}>
                &times;
              </S.CloseButton>
            </S.ModalHeader>
            <S.Form onSubmit={handleEditWord}>
              <S.Input
                type="text"
                name="pos"
                placeholder="품사"
                value={currentWord.pos}
                onChange={handleInputChange}
                required
              />
              <S.Input
                type="text"
                name="english"
                placeholder="영어 철자"
                value={currentWord.english}
                onChange={handleInputChange}
                required
              />
              <S.Input
                type="text"
                name="korean"
                placeholder="한글 뜻"
                value={currentWord.korean}
                onChange={handleInputChange}
                required
              />
              <S.Input
                type="number"
                name="level"
                placeholder="난이도"
                value={currentWord.level}
                onChange={handleInputChange}
                required
              />
              <S.SubmitButton type="submit">저장</S.SubmitButton>
              <S.CancelButton type="button" onClick={() => {}}>
                취소
              </S.CancelButton>
            </S.Form>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default WordManagePage;
