function Button(prompt) {
  return (
    <button
      onClick={prompt.onClick}
      className={prompt.otherClass}
      onSubmit={prompt.btnSubmit}
      type={prompt.btnType}
      disabled={prompt.bol}
    >
      {prompt.btnName}
    </button>
  );
}

export default Button;
