// WordManagePage.jsx
import React, { useEffect, useState } from "react";
import * as S from "./WordManagePage.style";
import useWordList from "../../Hooks/useWordList";
import useWordCreate from "../../Hooks/useWordCreate";
import useWordModify from "../../Hooks/useWordModify";
import useWordDelete from "../../Hooks/useWordDelete";

const getWordIdByEnglish = (englishWord) => {
  // 로컬 스토리지에서 wordsInfo를 가져옴
  const wordsInfo = JSON.parse(localStorage.getItem("wordsInfo"));

  if (!wordsInfo) {
    console.error("No wordsInfo found in localStorage");
    return null;
  }

  // 특정 영어 단어와 일치하는 객체를 찾음
  const word = wordsInfo.find((word) => word.english === englishWord);

  if (!word) {
    console.error(`No word found for english: ${englishWord}`);
    return null;
  }

  // 해당 객체의 id를 반환
  return word.id;
};

const WordManagePage = () => {
  const [ordering, setOrdering] = useState("");

  const { wordsInfo, loading } = useWordList(ordering);
  // wordsInfo = JSON.parse(wordsInfo);
  // useWordList(ordering);

  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isCreateSubmitted, setIsCreateSubmitted] = useState(false);
  const [isEditSubmitted, setIsEditSubmitted] = useState(false);
  const [newWord, setNewWord] = useState({
    type: "",
    english: "",
    korean: "",
    level: "",
  });
  const [currentWord, setCurrentWord] = useState({
    type: "",
    english: "",
    korean: "",
    level: "",
  });
  const [currentWordId, setCurrentWordId] = useState(null);
  const [deleteWordId, setDeleteWordId] = useState(null);

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
    setIsCreateSubmitted(true);
    setAddModalOpen(false);
  };

  const handleEditWord = (e) => {
    e.preventDefault();
    // 단어 수정 로직 추가
    setIsEditSubmitted(true);
    setEditModalOpen(false);
  };

  const openEditModal = (word) => {
    setCurrentWord(word);
    setCurrentWordId(word.id); // 단어 ID를 설정
    setEditModalOpen(true);
  };

  useEffect(() => {
    if (isCreateSubmitted) {
      // 단어 추가 후 실행되는 로직
      useWordCreate(newWord)
        .then(() => {
          setIsCreateSubmitted(false);
        })
        .catch((error) => {
          console.error(error);
          setIsCreateSubmitted(false);
        });
    }
    if (isEditSubmitted) {
      useWordModify(currentWord, currentWordId)
        .then(() => {
          setIsEditSubmitted(false);
        })
        .catch((error) => {
          console.error(error);
          setIsEditSubmitted(false);
        });
    }
    if (deleteWordId) {
      useWordDelete(deleteWordId)
        .then(() => {
          setDeleteWordId(null);
        })
        .catch((error) => {
          console.error(error);
          setDeleteWordId(null);
        });
    }
  }, [isCreateSubmitted, isEditSubmitted, deleteWordId]);

  const query_params = [
    "?ordering=english",
    "?ordering=-english",
    "?ordering=date_modified",
    "?ordering=-date_modified",
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      {console.log(wordsInfo)}
      <S.BackButton href="/menu">홈으로</S.BackButton>
      <S.Header>단어 조회</S.Header>
      <S.SortButtons>
        <S.SortButton onClick={() => setOrdering(query_params[0])}>
          알파벳 오름차순
        </S.SortButton>
        <S.SortButton onClick={() => setOrdering(query_params[1])}>
          알파벳 내림차순
        </S.SortButton>
        <S.SortButton onClick={() => setOrdering(query_params[2])}>
          수정된 날짜 오름차순
        </S.SortButton>
        <S.SortButton onClick={() => setOrdering(query_params[3])}>
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
          {wordsInfo.map((word, index) => (
            <S.TableRow key={index}>
              <S.TableCell>{word.type}</S.TableCell>
              <S.TableCell>{word.english}</S.TableCell>
              <S.TableCell>{word.korean}</S.TableCell>
              <S.TableCell>{word.level}</S.TableCell>
              <S.TableCell>{word.date_modified}</S.TableCell>
              <S.TableCell>
                <S.ActionButton
                  color="#4caf50"
                  hoverColor="#388e3c"
                  onClick={() => openEditModal(word)}
                >
                  수정하기
                </S.ActionButton>
                <S.ActionButton
                  color="#f44336"
                  hoverColor="#d32f2f"
                  onClick={() => {
                    setDeleteWordId(word.id);
                    console.log(word.id);
                  }}
                >
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
                name="type"
                placeholder="품사"
                defaultValue={newWord.type}
                onChange={(e) => {
                  setNewWord((prev) => ({
                    ...prev,
                    ["type"]: e.target.value,
                  }));
                }}
                required
              />
              <S.Input
                type="text"
                name="english"
                placeholder="영어 철자"
                defaultValue={newWord.english}
                onChange={(e) => {
                  setNewWord((prev) => ({
                    ...prev,
                    ["english"]: e.target.value,
                  }));
                }}
                required
              />
              <S.Input
                type="text"
                name="korean"
                placeholder="한글 뜻"
                defaultValue={newWord.korean}
                onChange={(e) => {
                  setNewWord((prev) => ({
                    ...prev,
                    ["korean"]: e.target.value,
                  }));
                }}
                required
              />
              <S.Input
                type="number"
                name="level"
                placeholder="난이도"
                defaultValue={newWord.level}
                onChange={(e) => {
                  setNewWord((prev) => ({
                    ...prev,
                    ["level"]: e.target.value,
                  }));
                }}
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
                name="type"
                placeholder="품사"
                defaultValue={currentWord.type}
                onChange={(e) => {
                  setCurrentWord((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }));
                }}
                required
              />
              <S.Input
                type="text"
                name="english"
                placeholder="영어 철자"
                defaultValue={currentWord.english}
                onChange={(e) => {
                  setCurrentWord((prev) => ({
                    ...prev,
                    ["english"]: e.target.value,
                  }));
                }}
                required
              />
              <S.Input
                type="text"
                name="korean"
                placeholder="한글 뜻"
                defaultValue={currentWord.korean}
                onChange={(e) => {
                  setCurrentWord((prev) => ({
                    ...prev,
                    ["korean"]: e.target.value,
                  }));
                }}
                required
              />
              <S.Input
                type="number"
                name="level"
                placeholder="난이도"
                defaultValue={currentWord.level}
                onChange={(e) => {
                  setCurrentWord((prev) => ({
                    ...prev,
                    ["level"]: e.target.value,
                  }));
                }}
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
