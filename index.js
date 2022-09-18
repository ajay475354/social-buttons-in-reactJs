const Button = (props) => {
  //  Write your code here.
  const { heading, firstButton, secondButton, thirdButton } = props;
  console.log(props);
  return (
    <div className="bg_container">
      <h1 className="heading">{heading}</h1>
      <div className="buttons_container">
        <button className="button_1">{firstButton}</button>
        <button className="button_2">{secondButton}</button>
        <button className="button_3">{thirdButton}</button>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <Button heading="Social Buttons" />
    <Button firstButton="Like" />>
    <Button secondButton="Comment" />
    <Button thirdButton="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
