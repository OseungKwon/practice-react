const React = require("react");
const { useState } = React;

const WordRelay = () => {
  const [Word, setWord] = useState("사과");
  const [Value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (Word[Word.length - 1] === Value[0]) {
      setWord(Value);
      setValue("");
    } else {
      setValue("다시 입력해 주세요");
    }
  };
  return (
    <div>
      <div>{Word}</div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={Value} />
        <button>입력!</button>
      </form>
      <div>{Value}</div>
    </div>
  );
};

module.exports = WordRelay;
