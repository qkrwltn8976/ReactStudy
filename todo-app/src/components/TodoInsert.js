import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라
  // 한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook 사용
  const onChange = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
      // submit 이벤트는 브라우저에서 새로고침 발생시키므로 이를 방지하기 위해 다음 함수 호출
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
