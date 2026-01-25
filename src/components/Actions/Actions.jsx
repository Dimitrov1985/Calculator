import Button from "../Button/button";
// комент с Сашей

const Actions = ({ handleButtonClick }) => {
  return (
    <div className="buttons">
      <Button value="7" onClick={handleButtonClick} />
      <Button value="8" onClick={handleButtonClick} />
      <Button value="9" onClick={handleButtonClick} />
      <Button value="/" onClick={handleButtonClick} />

      <Button value="6" onClick={handleButtonClick} />
      <Button value="5" onClick={handleButtonClick} />
      <Button value="4" onClick={handleButtonClick} />
      <Button value="*" onClick={handleButtonClick} />

      <Button value="3" onClick={handleButtonClick} />
      <Button value="2" onClick={handleButtonClick} />
      <Button value="1" onClick={handleButtonClick} />
      <Button value="+" onClick={handleButtonClick} />

      <Button value="0" onClick={handleButtonClick} />
      <Button value="." onClick={handleButtonClick} />
      <Button value="=" onClick={handleButtonClick} />
      <Button value="-" onClick={handleButtonClick} />

      <Button value="x²" onClick={handleButtonClick} />
      <Button value="%" onClick={handleButtonClick} />
      <Button value="⌫" onClick={handleButtonClick} />
      <Button value="C" onClick={handleButtonClick} />
    </div>
  );
};

export default Actions;
