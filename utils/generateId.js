const generatedId = () => {
  const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let id = '';
  for (let i = 0; i < 4; i++) {
    id += numArray[Math.floor(Math.random() * numArray.length)];
  }

  return id;
};

export default generatedId
